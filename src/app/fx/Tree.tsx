"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { efeitos } from "../efeitos";

type Tipo =
	| "folhas"
	| "folhasB"
	| "maca"
	| "passaro"
	| "passaroV"
	| "passaroA"
	| "ninho"
	| "borboleta"
	| "frutas"
	| "esquilo";

// poucos galhos, espaçados à toa. cada vez que um entra na tela ele sorteia um tipo novo
const lugares: { top: number; k: number }[] = [
	{ top: 11, k: 0.8 },
	{ top: 45, k: 0.7 },
	{ top: 79, k: 0.9 },
];

const comuns: Tipo[] = ["folhas", "folhasB", "maca", "passaro", "passaroV", "passaroA", "ninho", "borboleta", "frutas"];

function sortear(ultimo: Tipo | null): Tipo {
	if (ultimo !== "esquilo" && Math.random() < 0.22) return "esquilo";
	const opcoes = comuns.filter((t) => t !== ultimo);
	return opcoes[Math.floor(Math.random() * opcoes.length)];
}

const MADEIRA = "#8a5c33";
const VERDES = ["#65ad70", "#4d995a", "#7bc487", "#3f8a4e", "#8fcf8c"];

function delay(s: number): CSSProperties {
	return { "--d": `${s}s` } as CSSProperties;
}

// gerador fixo, pra copa ser igual no servidor e no navegador
function semente(seed: number) {
	return () => {
		seed |= 0;
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

// miolo fixo e grande pra não sobrar buraco por onde apareça o tronco, mais uns sorteados pra bordar o contorno
const lobulos = (() => {
	const rnd = semente(11);
	const miolo = [
		[-6, 26, 26], [22, 24, 28], [50, 26, 28], [78, 30, 26], [104, 36, 22], [128, 44, 18],
		[-8, 52, 26], [20, 54, 26], [48, 54, 26], [76, 56, 22], [102, 58, 18], [4, 76, 22], [34, 74, 22], [62, 74, 18],
		[8, 10, 20], [36, 8, 20], [64, 10, 20], [92, 16, 18], [-14, 40, 24], [116, 30, 16], [84, 76, 14],
	].map(([x, y, r]) => ({ x, y, r }));
	const soltos = Array.from({ length: 40 }, () => {
		const a = rnd() * Math.PI * 2;
		const r = Math.sqrt(rnd());
		return {
			x: Math.round(60 + Math.cos(a) * r * 100),
			y: Math.round(44 + Math.sin(a) * r * 38),
			r: Math.round(11 + rnd() * 9),
		};
	});
	return [...miolo, ...soltos].sort((a, b) => a.y - b.y);
})();

function Folha({ x, y, rot, cor, d }: { x: number; y: number; rot: number; cor: string; d: number }) {
	return (
		<g className="fx-pop" style={delay(d)}>
			<g className="fx-sway" style={{ animationDelay: `${d}s` }}>
				<ellipse cx={x} cy={y} rx="6.5" ry="3.2" transform={`rotate(${rot} ${x} ${y})`} fill={cor} />
			</g>
		</g>
	);
}

function Fruta({ x, y, cor, d }: { x: number; y: number; cor: string; d: number }) {
	return (
		<g className="fx-pop" style={delay(d)}>
			<g className="fx-swing" style={{ transformOrigin: `${x}px ${y - 6}px` }}>
				<path d={`M${x} ${y - 6} L${x} ${y - 3}`} stroke={MADEIRA} strokeWidth="1.2" strokeLinecap="round" />
				<circle cx={x} cy={y} r="4.6" fill={cor} />
				<ellipse cx={x - 1.6} cy={y - 1.8} rx="1.3" ry="0.8" fill="rgb(255 255 255 / 0.5)" transform={`rotate(-35 ${x - 1.6} ${y - 1.8})`} />
			</g>
		</g>
	);
}

function Passaro({ corpo, escuro, barriga }: { corpo: string; escuro: string; barriga: string }) {
	return (
		<g className="fx-fly">
			<g className="fx-bob">
				<path d="M29 17 L19 13 L20 20 Z" fill={escuro} />
				<ellipse cx="36" cy="19" rx="9" ry="6.5" fill={corpo} />
				<ellipse cx="37" cy="22" rx="6" ry="3.4" fill={barriga} />
				<ellipse cx="33" cy="18.5" rx="5" ry="3" fill={escuro} transform="rotate(-15 33 18.5)" />
				<circle cx="44.5" cy="14" r="5" fill={corpo} />
				<circle cx="46" cy="13" r="1.1" fill="#1c2b36" />
				<path d="M48.8 13 L54 14.6 L48.8 16.2 Z" fill="#f0a23a" />
				<path d="M34 25 L34 28.5 M38 25 L38 28.2" stroke="#c9833a" strokeWidth="1" strokeLinecap="round" />
			</g>
		</g>
	);
}

// de frente pra direita, pés na origem; sobe o tronco, vira e corre pelo galho
function Esquilo() {
	return (
		<g className="fx-esq" style={{ transform: "translate(24px, 35px) rotate(0deg) scale(1.25, 1.25)" }}>
			<g className="fx-esq-pula">
				<g className="fx-rabo">
					<path d="M-3 -4 C-15 -3 -17 -21 -9 -27 C-4 -30 1 -25 -2 -21 C-6 -23 -8 -17 -4 -12 Z" fill="#c9762f" />
					<path d="M-8 -24 C-5 -26 -2 -24 -3 -21" stroke="#e6a25a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
				</g>
				<ellipse cx="-1" cy="0" rx="3" ry="1.3" fill="#a85b24" />
				<ellipse cx="5.5" cy="0" rx="3" ry="1.3" fill="#a85b24" />
				<ellipse cx="2" cy="-6" rx="6" ry="5.2" fill="#b9692e" />
				<ellipse cx="4" cy="-4.5" rx="3.6" ry="3.2" fill="#f1d3a5" />
				<path d="M6 -15.5 L5.6 -19.8 L9.2 -16.6 Z" fill="#a85b24" />
				<path d="M9.4 -15.8 L11.2 -19.4 L12.2 -15 Z" fill="#a85b24" />
				<circle cx="8" cy="-12" r="4.2" fill="#b9692e" />
				<ellipse cx="11" cy="-10.6" rx="2.2" ry="1.7" fill="#f1d3a5" />
				<circle cx="9.4" cy="-12.8" r="0.9" fill="#1c2b36" />
				<circle cx="12.7" cy="-11.2" r="0.7" fill="#3a2a1c" />
				<ellipse cx="10" cy="-6" rx="2" ry="2.4" fill="#a8732f" />
				<path d="M8.2 -7.4 C9 -9 11 -9 11.8 -7.4 Z" fill="#6f4a22" />
			</g>
		</g>
	);
}

function Galho({ tipo }: { tipo: Tipo }) {
	const tronco = (d: string, w = 3.4, atraso = 0) => (
		<path className="fx-stem" pathLength={100} style={delay(atraso)} d={d} stroke={MADEIRA} strokeWidth={w} strokeLinecap="round" fill="none" />
	);

	if (tipo === "passaro" || tipo === "passaroV" || tipo === "passaroA") {
		return (
			<>
				{tronco("M0 41 C14 40 28 34 52 27")}
				{tronco("M14 39 C18 33 20 29 26 24", 2, 0.5)}
				<Folha x={27} y={22} rot={-35} cor="#65ad70" d={0.9} />
				<Folha x={52} y={29} rot={20} cor="#4d995a" d={1.0} />
				{tipo === "passaro" && <Passaro corpo="#3f8fd2" escuro="#2d6fa8" barriga="#cfe8f7" />}
				{tipo === "passaroV" && <Passaro corpo="#d84a3a" escuro="#a8321f" barriga="#f6d5cf" />}
				{tipo === "passaroA" && <Passaro corpo="#f2c230" escuro="#d89b1f" barriga="#fff0b8" />}
			</>
		);
	}

	if (tipo === "esquilo") {
		return (
			<>
				{tronco("M0 41 C14 40 28 34 52 27")}
				{tronco("M30 33 C34 28 38 26 42 22", 2, 0.6)}
				<Folha x={53} y={29} rot={20} cor="#65ad70" d={0.9} />
				<Folha x={43} y={21} rot={-40} cor="#4d995a" d={1.0} />
				<Folha x={12} y={37} rot={-20} cor="#7bc487" d={1.1} />
				<Esquilo />
			</>
		);
	}

	if (tipo === "ninho") {
		return (
			<>
				{tronco("M0 41 C14 40 30 36 54 31")}
				{tronco("M24 38 C28 32 34 30 40 29", 2, 0.5)}
				<Folha x={55} y={33} rot={20} cor="#65ad70" d={0.9} />
				<Folha x={18} y={35} rot={-30} cor="#4d995a" d={1.0} />
				<g className="fx-pop" style={delay(1.1)}>
					<ellipse cx="40" cy="27" rx="11" ry="4.5" fill="#a47845" />
					<path d="M30 27 C34 31 46 31 50 27 Z" fill="#8a6038" />
					<circle cx="36" cy="23.6" r="3" fill="#bfe3ee" />
					<circle cx="42.5" cy="23.2" r="3" fill="#cfeaf2" />
				</g>
			</>
		);
	}

	if (tipo === "borboleta") {
		return (
			<>
				{tronco("M0 41 C14 39 26 34 44 26")}
				<Folha x={45} y={24} rot={-30} cor="#65ad70" d={0.9} />
				<Folha x={30} y={30} rot={20} cor="#4d995a" d={1.0} />
				<g className="fx-fly">
					<g className="fx-float">
						<g className="fx-flutter">
							<ellipse cx="48.5" cy="8.5" rx="5" ry="3.4" fill="#f29b38" transform="rotate(-28 48.5 8.5)" />
							<ellipse cx="55.5" cy="8.5" rx="5" ry="3.4" fill="#f29b38" transform="rotate(28 55.5 8.5)" />
							<ellipse cx="49.5" cy="14" rx="3.4" ry="2.5" fill="#f6c244" transform="rotate(25 49.5 14)" />
							<ellipse cx="54.5" cy="14" rx="3.4" ry="2.5" fill="#f6c244" transform="rotate(-25 54.5 14)" />
						</g>
						<ellipse cx="52" cy="11.5" rx="0.9" ry="4" fill="#3a2a1c" />
						<path d="M51.4 7.6 L49.6 5 M52.6 7.6 L54.4 5" stroke="#3a2a1c" strokeWidth="0.6" strokeLinecap="round" />
					</g>
				</g>
			</>
		);
	}

	if (tipo === "frutas") {
		return (
			<>
				{tronco("M0 41 C14 39 30 33 52 27")}
				<Folha x={53} y={29} rot={20} cor="#65ad70" d={0.9} />
				<Folha x={26} y={31} rot={-30} cor="#4d995a" d={1.0} />
				<Fruta x={19} y={43} cor="#f08a24" d={1.1} />
				<Fruta x={34} y={38} cor="#f4a62c" d={1.25} />
				<Fruta x={47} y={35} cor="#f08a24" d={1.4} />
			</>
		);
	}

	if (tipo === "maca") {
		return (
			<>
				{tronco("M0 41 C14 39 26 32 44 22")}
				{tronco("M24 33 C28 28 31 25 33 20", 2, 0.5)}
				<Folha x={45} y={19} rot={-30} cor="#65ad70" d={0.9} />
				<Folha x={34} y={17} rot={-60} cor="#4d995a" d={1.0} />
				<g className="fx-pop" style={delay(1.1)}>
					<g className="fx-swing" style={{ transformOrigin: "30px 27px" }}>
						<path d="M30 27 L30 31" stroke={MADEIRA} strokeWidth="1.4" strokeLinecap="round" />
						<circle cx="30" cy="37" r="6.4" fill="#d9372b" />
						<ellipse cx="27.8" cy="34.6" rx="1.8" ry="1.1" fill="rgb(255 255 255 / 0.55)" transform="rotate(-35 27.8 34.6)" />
						<ellipse cx="33" cy="30.6" rx="3" ry="1.6" fill="#4d995a" transform="rotate(-25 33 30.6)" />
					</g>
				</g>
			</>
		);
	}

	if (tipo === "folhasB") {
		return (
			<>
				{tronco("M0 9 C14 10 30 16 50 30")}
				{tronco("M20 12 C26 19 30 26 31 34", 2, 0.5)}
				<Folha x={52} y={32} rot={45} cor="#65ad70" d={0.9} />
				<Folha x={36} y={20} rot={40} cor="#4d995a" d={1.0} />
				<Folha x={31} y={36} rot={80} cor="#7bc487" d={1.1} />
				<Folha x={42} y={27} rot={-10} cor="#8fcf8c" d={1.2} />
			</>
		);
	}

	return (
		<>
			{tronco("M0 41 C14 39 28 32 42 22")}
			{tronco("M18 37 C22 30 24 26 30 19", 2, 0.5)}
			{tronco("M30 29 C36 28 42 29 50 31", 1.8, 0.7)}
			<Folha x={44} y={19} rot={-35} cor="#65ad70" d={0.9} />
			<Folha x={31} y={16} rot={-70} cor="#4d995a" d={1.0} />
			<Folha x={53} y={31} rot={15} cor="#7bc487" d={1.1} />
			<Folha x={22} y={29} rot={-25} cor="#7bc487" d={1.2} />
			<Folha x={39} y={30} rot={25} cor="#4d995a" d={1.3} />
		</>
	);
}

type Visita = { n: number; tipo: Tipo | null; k: number; dy: number };

// toda vez que o galho entra na tela sorteia outro tipo e toca a animação de novo
function Limb({ top, k }: { top: number; k: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const ultimo = useRef<Tipo | null>(null);
	const [on, setOn] = useState(false);
	const [v, setV] = useState<Visita>({ n: 0, tipo: null, k: 1, dy: 0 });

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let r1 = 0;
		let r2 = 0;
		const observer = new IntersectionObserver(
			([entry]) => {
				cancelAnimationFrame(r1);
				cancelAnimationFrame(r2);
				if (!entry.isIntersecting) {
					setOn(false);
					return;
				}
				const tipo = sortear(ultimo.current);
				ultimo.current = tipo;
				setOn(false);
				setV((o) => ({ n: o.n + 1, tipo, k: 0.85 + Math.random() * 0.3, dy: Math.round((Math.random() * 4 - 2) * 10) / 10 }));
				// um frame parado antes de ligar, senão a transição não toca
				r1 = requestAnimationFrame(() => {
					r2 = requestAnimationFrame(() => setOn(true));
				});
			},
			{ rootMargin: "0px 0px -15% 0px" },
		);
		observer.observe(el);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(r1);
			cancelAnimationFrame(r2);
		};
	}, []);

	return (
		<div
			ref={ref}
			data-state={on ? "on" : "idle"}
			className="fx-limb absolute"
			style={{ top: `${top + v.dy}%`, left: "var(--tl)", width: `calc((100% - var(--tl)) * ${k * v.k} * var(--kmax))` }}
		>
			<svg viewBox="0 0 64 48" className="block h-auto w-full overflow-visible" aria-hidden="true">
				{v.tipo && <Galho key={v.n} tipo={v.tipo} />}
			</svg>
		</div>
	);
}

type Queda = { id: number; x: number; y: number; tam: number; rot: number; cor: string; fall: number; dx: number; dur: number };

function reduzido() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Copa({ balanco, onTocar }: { balanco: number; onTocar: () => void }) {
	return (
		<svg
			viewBox="0 0 160 96"
			className="absolute -left-8 top-0 block h-auto w-[calc(100%+2rem)] overflow-visible min-[1500px]:-left-12 min-[1500px]:w-[calc(100%+5rem)]"
			style={{ pointerEvents: "none" }}
			aria-hidden="true"
		>
			<g style={{ pointerEvents: "visiblePainted" }} onMouseEnter={onTocar}>
				<g key={balanco} className={balanco ? "fx-balanca" : undefined}>
					<g className="fx-copa-a" style={delay(0)}>
						{lobulos.map((c, i) => (
							<circle key={i} cx={c.x} cy={c.y + 3} r={c.r} fill="#3f8a4e" />
						))}
					</g>
					<g className="fx-copa-a" style={delay(1.2)}>
						{lobulos.map((c, i) => (
							<circle key={i} cx={c.x - 2} cy={c.y - 2} r={c.r - 3} fill="#5aa566" />
						))}
					</g>
					<g className="fx-copa-a" style={delay(2.4)}>
						{lobulos
							.filter((c) => c.y < 52)
							.map((c, i) => (
								<circle key={i} cx={c.x - 4} cy={c.y - 5} r={c.r - 8} fill="#7bc487" />
							))}
					</g>
					<g className="fx-copa-a" style={delay(3.6)}>
						{lobulos
							.filter((c, i) => c.y < 44 && i % 2 === 0)
							.map((c, i) => (
								<circle key={i} cx={c.x - 6} cy={c.y - 8} r={Math.max(c.r - 12, 2)} fill="#9fd99a" />
							))}
					</g>
				</g>
			</g>
		</svg>
	);
}

// sai da borda direita do tronco, então acompanha a largura dele em qualquer tela
function Raiz() {
	return (
		<svg viewBox="0 0 40 40" preserveAspectRatio="none" className="absolute bottom-0 left-full block h-16 w-12 -ml-px min-[1500px]:h-[5.5rem] min-[1500px]:w-[4rem]" aria-hidden="true">
			<path d="M0 0 C0 6 3 12 12 16 C22 21 32 26 40 29 L40 40 L0 40Z" fill="#80552f" />
			<path d="M0 22 C4 30 14 36 30 38 L30 40 L0 40Z" fill="#946639" opacity="0.7" />
		</svg>
	);
}

function Chao() {
	const folhinha = (x: number, y: number, h: number, d: number) => (
		<path key={`${x}-${y}`} className="fx-grama" style={delay(d)} d={`M${x} ${y} C${x - 1} ${y - h * 0.5} ${x + 1} ${y - h * 0.8} ${x + 3} ${y - h} C${x + 3.4} ${y - h * 0.6} ${x + 3} ${y - h * 0.3} ${x + 3.4} ${y}Z`} fill="#4d995a" />
	);
	const flor = (x: number, y: number, cor: string, d: number) => (
		<g key={x}>
			<path d={`M${x} ${y} L${x} ${y - 11}`} stroke="#3f8a4e" strokeWidth="1.3" strokeLinecap="round" />
			<g className="fx-flor" style={delay(d)}>
				{[0, 72, 144, 216, 288].map((a) => (
					<circle key={a} cx={x + Math.cos(((a - 90) * Math.PI) / 180) * 2.7} cy={y - 12 + Math.sin(((a - 90) * Math.PI) / 180) * 2.7} r="2.1" fill={cor} />
				))}
				<circle cx={x} cy={y - 12} r="1.7" fill="#f6c244" />
			</g>
		</g>
	);

	return (
		<svg viewBox="0 0 160 70" className="absolute bottom-0 left-0 block h-auto w-full min-[1380px]:w-[140%] min-[1500px]:w-[200%]" aria-hidden="true">
			<path d="M0 50 C22 46 50 52 84 53 C126 54 148 57 160 70 L0 70Z" fill="#6fb87d" />
			{flor(72, 55, "#f08aa8", 0)}
			{flor(104, 55, "#fff3c4", 0.8)}
			{flor(130, 57, "#f4a62c", 1.6)}
			<g transform="translate(60 58)">
				<path d="M-1.4 0 L-1.2 -4 L1.2 -4 L1.4 0Z" fill="#f1e2c4" />
				<path d="M-5 -4 C-5 -9 5 -9 5 -4Z" fill="#d9372b" />
				<circle cx="-1.8" cy="-6" r="0.9" fill="#fff" />
				<circle cx="1.8" cy="-5.4" r="0.7" fill="#fff" />
			</g>
			<g transform="translate(67 59) scale(0.7)">
				<path d="M-1.4 0 L-1.2 -4 L1.2 -4 L1.4 0Z" fill="#f1e2c4" />
				<path d="M-5 -4 C-5 -9 5 -9 5 -4Z" fill="#e8743a" />
				<circle cx="0" cy="-6" r="0.9" fill="#fff" />
			</g>
			<g transform="translate(96 60)">
				<g className="fx-lesma">
					<path d="M-6 0 C-7 -2 -4 -3 -1 -3 L6 -3 C8 -3 9 -2 9 0Z" fill="#e8c9a0" />
					<path d="M8 -3 L9 -7 M10 -2.5 L12.5 -6" stroke="#e8c9a0" strokeWidth="0.9" strokeLinecap="round" />
					<circle cx="-1" cy="-6" r="4.6" fill="#d19a52" />
					<circle cx="-1" cy="-6" r="2.5" fill="#b87a36" />
					<circle cx="-1" cy="-6" r="0.9" fill="#d19a52" />
				</g>
			</g>
			<path d="M0 62 C14 58 26 62 40 60 C56 58 70 63 92 61 C114 59 134 63 148 64 C156 65 159 67 160 70 L0 70Z" fill="#4d995a" />
			{folhinha(8, 62, 10, 0)}
			{folhinha(20, 62, 7, 0.6)}
			{folhinha(48, 61, 11, 1.1)}
			{folhinha(84, 62, 8, 0.3)}
			{folhinha(118, 62, 11, 0.9)}
			{folhinha(146, 61, 8, 1.4)}
		</svg>
	);
}

function folhaCaindo(id: number): Queda {
	const tam = 0.9 + Math.random() * 0.8;
	return {
		id,
		x: 6 + Math.random() * 88,
		y: 2.5 + Math.random() * 3,
		tam,
		rot: Math.round(Math.random() * 360),
		cor: VERDES[Math.floor(Math.random() * VERDES.length)],
		fall: 14 + Math.random() * 14,
		dx: (Math.random() * 2 - 1) * 2.5,
		dur: 3.4 + Math.random() * 1.6,
	};
}

export default function Tree(): ReactNode {
	const [quedas, setQuedas] = useState<Queda[]>([]);
	const [balanco, setBalanco] = useState(0);
	const seq = useRef(0);
	const ultimo = useRef(0);

	function soltar(n: number) {
		const novas = Array.from({ length: n }, () => folhaCaindo(seq.current++));
		setQuedas((q) => [...q.slice(-10), ...novas]);
		setTimeout(() => setQuedas((q) => q.filter((f) => !novas.some((x) => x.id === f.id))), 5400);
	}

	function tocar() {
		if (reduzido()) return;
		const agora = Date.now();
		if (agora - ultimo.current < 1600) return;
		ultimo.current = agora;
		setBalanco((b) => b + 1);
		soltar(3 + Math.floor(Math.random() * 3));
	}

	useEffect(() => {
		if (!efeitos.arvore || reduzido()) return;
		let id: ReturnType<typeof setTimeout>;
		const proxima = () => {
			id = setTimeout(
				() => {
					soltar(1 + Math.floor(Math.random() * 2));
					proxima();
				},
				5000 + Math.random() * 7000,
			);
		};
		proxima();
		return () => clearTimeout(id);
	}, []);

	if (!efeitos.arvore) return null;

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[4.5rem] [--kmax:0.8] [--tl:1.4rem] min-[1280px]:block min-[1380px]:w-[7rem] min-[1380px]:[--kmax:1] min-[1380px]:[--tl:1.9rem] min-[1500px]:w-[10rem] min-[1500px]:[--tl:2.9rem]"
		>
			<div className="fx-trunk absolute bottom-0 top-8 -left-6 w-12 min-[1380px]:-left-8 min-[1380px]:w-16 min-[1500px]:-left-10 min-[1500px]:w-[5.5rem]">
				<Raiz />
			</div>
			{lugares.map((g) => (
				<Limb key={g.top} {...g} />
			))}
			<Chao />
			<Copa balanco={balanco} onTocar={tocar} />
			<div className="absolute inset-x-0 top-0">
				{quedas.map((f) => (
					<div
						key={f.id}
						className="fx-queda"
						style={
							{
								left: `${f.x}%`,
								top: `${f.y}rem`,
								width: `${f.tam}rem`,
								height: `${f.tam}rem`,
								"--fall": `${f.fall}rem`,
								"--dx": `${f.dx}rem`,
								"--dur": `${f.dur}s`,
							} as CSSProperties
						}
					>
						<svg viewBox="0 0 20 20" className="block h-full w-full" aria-hidden="true">
							<g transform={`rotate(${f.rot} 10 10)`}>
								<path d="M2 18 C2 6 8 2 18 2 C18 12 12 18 2 18Z" fill={f.cor} />
							</g>
						</svg>
					</div>
				))}
			</div>
		</div>
	);
}
