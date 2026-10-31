"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { efeitos } from "../efeitos";

type Estado = "idle" | "armed" | "visible" | "settled";

// cards entram em sequência quando a grade aparece na tela (uma vez só)
export default function RevealGrid({ className, children }: { className?: string; children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const [estado, setEstado] = useState<Estado>("idle");

	useEffect(() => {
		const el = ref.current;
		if (!el || !efeitos.vidaQueroAjudar || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let timer: ReturnType<typeof setTimeout> | undefined;
		const raf = requestAnimationFrame(() => setEstado("armed"));
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setEstado("visible");
				// depois da entrada solta os delays, senão o hover dos cards fica lento
				timer = setTimeout(() => setEstado("settled"), 1600);
				observer.disconnect();
			},
			{ threshold: 0.15 },
		);
		observer.observe(el);
		return () => {
			cancelAnimationFrame(raf);
			clearTimeout(timer);
			observer.disconnect();
		};
	}, []);

	return (
		<div ref={ref} data-state={estado} className={`fx-reveal ${className ?? ""}`}>
			{children}
		</div>
	);
}
