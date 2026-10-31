"use client";

import { useEffect, useRef, useState } from "react";
import { efeitos } from "../efeitos";

export default function Counter({ to, from = 0, duration = 1600 }: { to: number; from?: number; duration?: number }) {
	const ref = useRef<HTMLSpanElement>(null);
	const [value, setValue] = useState(to);

	useEffect(() => {
		const el = ref.current;
		if (!el || !efeitos.contadores || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		setValue(from);
		let raf = 0;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				const start = performance.now();
				const tick = (now: number) => {
					const t = Math.min((now - start) / duration, 1);
					setValue(Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3))));
					if (t < 1) raf = requestAnimationFrame(tick);
				};
				raf = requestAnimationFrame(tick);
			},
			{ threshold: 0.6 },
		);
		observer.observe(el);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [to, from, duration]);

	return (
		<span ref={ref} className="tabular-nums">
			{value}
		</span>
	);
}
