"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// armed: escondida, visible: animando, settled: animação terminou (libera o hover)
type State = "idle" | "armed" | "visible" | "settled";

const REVEAL_MS = 2200;

export default function TimelineReveal({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	const ref = useRef<HTMLOListElement>(null);
	const [state, setState] = useState<State>("idle");

	useEffect(() => {
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let timer: ReturnType<typeof setTimeout> | undefined;
		setState("armed");

		const observer = new IntersectionObserver(
			([entry]) => {
				clearTimeout(timer);
				if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
					setState("visible");
					timer = setTimeout(() => setState("settled"), REVEAL_MS);
				} else if (!entry.isIntersecting) {
					// só reseta quando sai por completo, pra não piscar na borda
					setState("armed");
				}
			},
			{ threshold: [0, 0.25] },
		);
		observer.observe(el);
		return () => {
			clearTimeout(timer);
			observer.disconnect();
		};
	}, []);

	return (
		<ol ref={ref} data-state={state} className={`timeline ${className ?? ""}`}>
			{children}
		</ol>
	);
}
