"use client";

import { useEffect, useRef } from "react";
import { efeitos } from "../efeitos";

export default function ReadingProgress() {
	const bar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!efeitos.barraLeitura) return;

		let raf = 0;
		const atualizar = () => {
			raf = 0;
			const total = document.documentElement.scrollHeight - window.innerHeight;
			const p = total > 0 ? Math.min(window.scrollY / total, 1) : 0;
			if (bar.current) bar.current.style.transform = `scaleX(${p})`;
		};
		const aoRolar = () => {
			if (!raf) raf = requestAnimationFrame(atualizar);
		};

		atualizar();
		window.addEventListener("scroll", aoRolar, { passive: true });
		window.addEventListener("resize", aoRolar);
		return () => {
			window.removeEventListener("scroll", aoRolar);
			window.removeEventListener("resize", aoRolar);
			cancelAnimationFrame(raf);
		};
	}, []);

	if (!efeitos.barraLeitura) return null;

	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
			<div ref={bar} className="h-full origin-left bg-[#65ad70]" style={{ transform: "scaleX(0)" }} />
		</div>
	);
}
