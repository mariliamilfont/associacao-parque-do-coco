"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { efeitos, fotosHero } from "../efeitos";

const TROCA_MS = 6500;

export default function HeroGallery() {
	const [atual, setAtual] = useState(0);
	const [zoom, setZoom] = useState(false);

	useEffect(() => {
		if (!efeitos.heroFoto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const raf = requestAnimationFrame(() => setZoom(true));
		const id =
			fotosHero.length > 1 ? setInterval(() => setAtual((n) => (n + 1) % fotosHero.length), TROCA_MS) : undefined;
		return () => {
			cancelAnimationFrame(raf);
			clearInterval(id);
		};
	}, []);

	return (
		<div className="relative aspect-square w-full overflow-hidden">
			{fotosHero.map((foto, i) => {
				const ativa = i === atual;
				return (
					<Image
						key={foto.src}
						src={foto.src}
						alt={foto.alt}
						fill
						sizes="(max-width: 1023px) 100vw, 55vw"
						priority={i === 0}
						className="object-cover"
						style={{
							opacity: ativa ? 1 : 0,
							transform: zoom && ativa ? "scale(1.08)" : "scale(1)",
							// reseta o zoom só depois que a foto sumiu, senão dá um pulo
							transition: ativa
								? `opacity 1.2s ease, transform ${TROCA_MS + 1500}ms linear`
								: "opacity 1.2s ease, transform 0s 1.2s",
						}}
					/>
				);
			})}
		</div>
	);
}
