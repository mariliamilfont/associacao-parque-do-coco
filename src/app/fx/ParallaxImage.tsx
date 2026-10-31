"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { efeitos } from "../efeitos";

export default function ParallaxImage({
	children,
	className,
	strength = 28,
}: {
	children: ReactNode;
	className?: string;
	strength?: number;
}) {
	const box = useRef<HTMLDivElement>(null);
	const inner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = box.current;
		const alvo = inner.current;
		if (!el || !alvo || !efeitos.parallax || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let raf = 0;
		const atualizar = () => {
			raf = 0;
			const r = el.getBoundingClientRect();
			const progresso = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
			alvo.style.transform = `translate3d(0, ${(-progresso * strength).toFixed(1)}px, 0) scale(1.15)`;
		};
		const aoRolar = () => {
			if (!raf) raf = requestAnimationFrame(atualizar);
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				atualizar();
				window.addEventListener("scroll", aoRolar, { passive: true });
			} else {
				window.removeEventListener("scroll", aoRolar);
			}
		});
		observer.observe(el);
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", aoRolar);
			cancelAnimationFrame(raf);
		};
	}, [strength]);

	return (
		<div ref={box} className={className}>
			<div ref={inner} className="will-change-transform">
				{children}
			</div>
		</div>
	);
}
