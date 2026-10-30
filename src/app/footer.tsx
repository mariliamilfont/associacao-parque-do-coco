import Link from "next/link";

const siteLinks = [
	{ label: "Início", href: "/#inicio" },
	{ label: "Sobre Nós", href: "/sobre-nos" },
	{ label: "Atividades", href: "/#atividades" },
	{ label: "Quero ajudar", href: "/quero-ajudar" },
];

function ParqueCocoMark() {
	return (
		<svg aria-hidden="true" className="h-9 w-9 shrink-0" viewBox="0 0 48 48" fill="none">
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

function ContactPlaceholder({ children }: { children: string }) {
	return (
		<div className="rounded-[4px] bg-white px-2 py-[7px] text-[10px] text-[#78848c]">
			{children}
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="mt-auto border-t border-[#d6e0e5] bg-[#f0f7fa] text-[#246b8d]">
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pb-7 pt-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.65fr_1.35fr_0.9fr] lg:gap-10 lg:px-8">
				<section aria-label="Sobre a associação">
					<Link href="/#inicio" aria-label="Associação Parque do Cocó, início" className="inline-flex items-center gap-2">
						<ParqueCocoMark />
						<span className="flex flex-col leading-[1.05]">
							<span className="text-[10px] font-semibold text-[#69a5c3]">Associação</span>
							<span className="text-xs font-bold">Parque do Cocó</span>
						</span>
					</Link>
					<p className="mt-4 max-w-[250px] text-[11px] leading-[1.55] text-[#5d6971]">
						Ações educativas e sociais para crianças e adolescentes em Fortaleza, fortalecendo o aprendizado e a convivência.
					</p>
				</section>

				<nav aria-label="Navegue pelo site">
					<h2 className="mb-3 text-[11px] font-bold">Navegue pelo site</h2>
					<ul className="space-y-2.5">
						{siteLinks.map(({ label, href }) => (
							<li key={label}>
								<Link className="text-[11px] transition-colors hover:text-[#1597df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1597df]" href={href}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<section aria-labelledby="footer-contact-heading">
					<h2 id="footer-contact-heading" className="mb-3 text-[11px] font-bold">Onde estamos e contato</h2>
					<dl className="space-y-2.5 text-[10px]">
						<div>
							<dt className="mb-1 font-semibold">Endereço</dt>
							<dd className="leading-4 text-[#5d6971]">R. Des. Leite Albuquerque, 1523 - Aldeota</dd>
						</div>
						<div>
							<dt className="mb-1 font-semibold">Telefone</dt>
							<dd><ContactPlaceholder>[INSERIR TELEFONE]</ContactPlaceholder></dd>
						</div>
						<div>
							<dt className="mb-1 font-semibold">E-mail</dt>
							<dd><ContactPlaceholder>[INSERIR E-MAIL]</ContactPlaceholder></dd>
						</div>
					</dl>
				</section>

				<section aria-labelledby="footer-social-heading">
					<h2 id="footer-social-heading" className="mb-3 text-[11px] font-bold">Redes sociais</h2>
					<ContactPlaceholder>[INSERIR REDES SOCIAIS]</ContactPlaceholder>
				</section>
			</div>

			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<div className="border-t border-[#dce6ea] py-4 text-[10px] text-[#65727a]">
					Associação Beneficente Parque do Cocó
				</div>
			</div>
		</footer>
	);
}
