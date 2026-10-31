"use client";

import { useState, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Item = { icon: ReactNode; title: string; description: string };

// estilo cover flow: o card atual fica inteiro no meio, os vizinhos ficam de lado.
// a seta só vai pra frente e do último volta pro primeiro
export default function Carousel({ items }: { items: Item[] }) {
	const [atual, setAtual] = useState(0);
	const n = items.length;
	const proximo = () => setAtual((i) => (i + 1) % n);

	return (
		<div className="mt-6 overflow-hidden py-3" style={{ perspective: "1200px" }}>
			<div className="relative h-[15.5rem] sm:h-[13rem]" aria-live="polite">
				{items.map((item, i) => {
					const off = (i - atual + n) % n;
					const pos = off === 0 ? "center" : off === 1 ? "right" : off === n - 1 ? "left" : "far";
					const ativo = pos === "center";
					return (
						<article
							key={item.title}
							data-pos={pos}
							aria-hidden={!ativo}
							onClick={pos === "right" ? proximo : undefined}
							className="fx-flow-card flex flex-col justify-center gap-4 rounded-2xl border border-[#deebf0] bg-white p-6 pr-16 shadow-[0_0.5rem_1.5rem_rgb(40_109_139/0.08)] sm:flex-row sm:items-center sm:gap-6 sm:p-8 sm:pr-20"
						>
							<div className="shrink-0 [&>*]:mb-0 [&>*]:h-14 [&>*]:w-14 [&_svg]:h-7 [&_svg]:w-7">{item.icon}</div>
							<div>
								<h3 className="text-xl font-bold leading-snug text-[#286d8b]">{item.title}</h3>
								<p className="mt-2 max-w-xl text-base leading-relaxed text-[#617b89]">{item.description}</p>
							</div>
							{ativo && (
								<button
									type="button"
									onClick={proximo}
									aria-label="Próximo card"
									className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#86c490] text-white transition-colors hover:bg-[#65ad70] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286d8b]"
								>
									<ChevronRight aria-hidden="true" size={18} />
								</button>
							)}
						</article>
					);
				})}
			</div>
		</div>
	);
}
