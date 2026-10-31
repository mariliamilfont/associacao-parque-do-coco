"use client";

import { useEffect, useRef, useState } from "react";
import { efeitos } from "../efeitos";

type Trecho = { text: string; strong?: boolean };

const MS_POR_LETRA = 24;

// digita o texto quando o aviso aparece na tela (uma vez só). o texto que falta
// fica invisível no lugar, pra altura e quebra de linha não mudarem durante a digitação
export default function Typewriter({ trechos, className }: { trechos: Trecho[]; className?: string }) {
	const ref = useRef<HTMLParagraphElement>(null);
	const total = trechos.reduce((soma, t) => soma + t.text.length, 0);
	const [n, setN] = useState(total);
	const [caret, setCaret] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || !efeitos.avisoDigitado || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let id: ReturnType<typeof setInterval> | undefined;
		let fim: ReturnType<typeof setTimeout> | undefined;
		const raf = requestAnimationFrame(() => {
			setN(0);
			setCaret(true);
		});
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				let atual = 0;
				id = setInterval(() => {
					atual += 1;
					setN(atual);
					if (atual >= total) {
						clearInterval(id);
						// deixa o cursor piscando um pouco depois de terminar
						fim = setTimeout(() => setCaret(false), 3000);
					}
				}, MS_POR_LETRA);
			},
			{ threshold: 0.6 },
		);
		observer.observe(el);
		return () => {
			cancelAnimationFrame(raf);
			clearInterval(id);
			clearTimeout(fim);
			observer.disconnect();
		};
	}, [total]);

	const partes: { visivel: string; oculto: string; cursor: boolean }[] = [];
	let restante = n;
	let cursorColocado = false;
	trechos.forEach((t, i) => {
		const visivel = t.text.slice(0, Math.max(restante, 0));
		const oculto = t.text.slice(visivel.length);
		restante -= t.text.length;
		const cursor = caret && !cursorColocado && (oculto.length > 0 || i === trechos.length - 1);
		if (cursor) cursorColocado = true;
		partes.push({ visivel, oculto, cursor });
	});

	return (
		<p ref={ref} className={className}>
			<span className="sr-only">{trechos.map((t) => t.text).join("")}</span>
			<span aria-hidden="true">
				{trechos.map((t, i) => {
					const { visivel, oculto, cursor } = partes[i];
					const conteudo = (
						<>
							{visivel}
							{cursor && <span className="fx-caret" />}
							<span className="invisible">{oculto}</span>
						</>
					);
					return t.strong ? (
						<strong key={i} className="font-bold text-[#286d8b]">
							{conteudo}
						</strong>
					) : (
						<span key={i}>{conteudo}</span>
					);
				})}
			</span>
		</p>
	);
}
