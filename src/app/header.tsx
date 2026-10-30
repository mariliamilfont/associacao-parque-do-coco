import Link from "next/link";

const navigationLinks = [
	{ label: "Início", href: "/#inicio" },
	{ label: "Sobre Nós", href: "/sobre-nos" },
	{ label: "Atividades", href: "/#atividades" },
];

function ParqueCocoMark() {
	return (
		<svg
			aria-hidden="true"
			className="h-10 w-10 shrink-0"
			viewBox="0 0 48 48"
			fill="none"
		>
			<path
				d="M8.2 22.8C6.1 14.2 14.1 6.4 25.2 5.2c9-1 16.8 2.7 17.4 9.1.6 6.2-5 10.1-13.2 12.6l-7.7 2.4c5.8-3.4 10.5-6.1 10.5-10.3 0-3.8-4.1-5.8-9.8-5.1-5.8.7-10.9 4.1-12 8.9l-2.2 1.5Z"
				fill="#65A923"
			/>
			<path
				d="M8.6 25.1c5.2-2.4 13-1.6 20.1 1.8-5.5 2.6-10.8 5.8-10.4 9.7.4 3.8 5.6 5.7 11.6 3.8-5.3 5.1-14.9 5.3-21.1 1.7-7.5-4.4-7.9-12.5-.2-17Z"
				fill="#1597DF"
			/>
			<path d="m23.1 14.6 6.4 24.9-12.2-3.3 5.8-21.6Z" fill="#078442" />
		</svg>
	);
}

function FlowerMark() {
	return (
		<svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
			<g fill="currentColor">
				<ellipse cx="12" cy="5.1" rx="2.1" ry="4" />
				<ellipse cx="12" cy="18.9" rx="2.1" ry="4" />
				<ellipse cx="5.1" cy="12" rx="4" ry="2.1" />
				<ellipse cx="18.9" cy="12" rx="4" ry="2.1" />
				<ellipse cx="7.1" cy="7.1" rx="2" ry="3.5" transform="rotate(-45 7.1 7.1)" />
				<ellipse cx="16.9" cy="16.9" rx="2" ry="3.5" transform="rotate(-45 16.9 16.9)" />
				<ellipse cx="16.9" cy="7.1" rx="2" ry="3.5" transform="rotate(45 16.9 7.1)" />
				<ellipse cx="7.1" cy="16.9" rx="2" ry="3.5" transform="rotate(45 7.1 16.9)" />
				<circle cx="12" cy="12" r="2.1" />
			</g>
		</svg>
	);
}

function NavigationItems({ mobile = false }: { mobile?: boolean }) {
	return (
		<>
			{navigationLinks.map(({ label, href }) => (
				<Link
					key={label}
					href={href}
					className={`font-semibold text-[#246b8d] transition-colors hover:text-[#1597df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1597df] ${mobile ? "block px-4 py-3" : "text-sm"}`}
				>
					{label}
				</Link>
			))}
		</>
	);
}

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-[#d5d5d5] bg-white shadow-[0_1px_8px_rgba(36,107,141,0.06)]">
			<div className="mx-auto flex h-[74px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
				<Link
					href="/#inicio"
					aria-label="Associação Parque do Cocó, início"
					className="flex shrink-0 items-center gap-2"
				>
					<ParqueCocoMark />
					<span className="flex flex-col leading-[1.05]">
						<span className="text-[11px] font-semibold text-[#69a5c3]">Associação</span>
						<span className="text-[13px] font-bold text-[#246b8d]">Parque do Cocó</span>
					</span>
				</Link>

				<nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-evenly md:flex">
					<NavigationItems />
				</nav>

				<div className="flex shrink-0 items-center gap-2">
					<details className="group relative md:hidden">
						<summary
							aria-label="Abrir menu de navegação"
							className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-[#246b8d] hover:bg-[#f1f7f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1597df] [&::-webkit-details-marker]:hidden"
						>
							<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
								<path d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</summary>
						<nav
							aria-label="Navegação móvel"
							className="absolute right-0 top-full mt-2 min-w-48 overflow-hidden rounded-md border border-[#d5d5d5] bg-white py-1 shadow-lg"
						>
							<NavigationItems mobile />
						</nav>
					</details>

					<Link
						href="/quero-ajudar"
						className="flex h-[34px] items-center gap-2 rounded-[8px] bg-[#65ad70] px-3 text-[10px] font-bold text-white transition-colors hover:bg-[#4d995a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246b8d] sm:px-4 sm:text-xs"
					>
						<FlowerMark />
						<span className="whitespace-nowrap">QUERO AJUDAR</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
