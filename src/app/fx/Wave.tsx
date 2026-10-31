import { efeitos } from "../efeitos";

const paths = [
	"M0 48V26C180 4 360 4 560 22S1000 46 1180 28 1360 6 1440 18V48Z",
	"M0 48V14C220 40 420 42 680 24S1120 0 1440 24V48Z",
];

// faixa com a cor da seção de cima e o desenho na cor da seção de baixo
export default function Wave({ from, to, variant = 0 }: { from: string; to: string; variant?: 0 | 1 }) {
	if (!efeitos.curvas) return null;

	return (
		<div aria-hidden="true" className="h-6 sm:h-10" style={{ background: from }}>
			<svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-full w-full" fill={to}>
				<path d={paths[variant]} />
			</svg>
		</div>
	);
}
