import Image from "next/image";
import type { ReactNode } from "react";

type IconName =
	| "people"
	| "calendar"
	| "book"
	| "home"
	| "education"
	| "palette"
	| "heart"
	| "music"
	| "star"
	| "church"
	| "gift"
	| "volunteer";

const iconArtwork: Record<IconName, ReactNode> = {
	people: (
		<>
			<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="10" cy="7" r="4" />
			<path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
		</>
	),
	calendar: (
		<>
			<rect x="3" y="5" width="18" height="16" rx="2" />
			<path d="M16 3v4M8 3v4M3 11h18" />
		</>
	),
	book: (
		<>
			<path d="M12 7v14M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4a3 3 0 0 0-3 2 3 3 0 0 0-3-2H5a2 2 0 0 1-2-2Z" />
		</>
	),
	home: (
		<>
			<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
			<path d="M9 21v-8h6v8" />
		</>
	),
	education: (
		<>
			<rect x="5" y="2" width="14" height="20" rx="2" />
			<path d="M9 18h6" />
		</>
	),
	palette: (
		<>
			<path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.7-3.05 2 2 0 0 1 1.7-3.05H18a3 3 0 0 0 3-3c0-4.9-4-8.9-9-8.9Z" />
			<circle cx="7.5" cy="10" r="1" />
			<circle cx="11" cy="6.5" r="1" />
			<circle cx="16" cy="8" r="1" />
		</>
	),
	heart: (
		<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
	),
	music: (
		<>
			<path d="M9 18V5l12-2v13" />
			<circle cx="6" cy="18" r="3" />
			<circle cx="18" cy="16" r="3" />
		</>
	),
	star: (
		<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
	),
	church: (
		<>
			<path d="M3 10 12 4l9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
			<path d="M12 2v5M10 4h4M9 21v-7h6v7M3 11h18" />
		</>
	),
	gift: (
		<>
			<rect x="3" y="9" width="18" height="12" rx="1" />
			<path d="M12 9v12M2 5h20v4H2zM12 5H8.5a2.5 2.5 0 1 1 2.5-2.5V9m1-4h3.5a2.5 2.5 0 1 0-2.5-2.5V9" />
		</>
	),
	volunteer: (
		<>
			<path d="M8 11 12 8l4 3-4 4-2-2M8 11l-2-2-3 3 5 6 4-3M16 11l2-2 3 3-5 6-4-3M9 4l3 2 3-2 3 2-2 3-4-1-4 1-2-3Z" />
		</>
	),
};

function CardIcon({ name }: { name: IconName }) {
	return (
		<span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf4f7] text-[#377d99]">
			<svg
				aria-hidden="true"
				className="h-5 w-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				{iconArtwork[name]}
			</svg>
		</span>
	);
}

function InfoCard({
	icon,
	title,
	description,
}: {
	icon: IconName;
	title: string;
	description: string;
}) {
	return (
		<article className="rounded-2xl border border-[#deebf0] bg-white p-4 sm:p-5">
			<CardIcon name={icon} />
			<h3 className="text-base font-bold leading-snug text-[#286d8b]">{title}</h3>
			<p className="mt-2 text-sm leading-relaxed text-[#617b89]">{description}</p>
		</article>
	);
}

const milestones = [
	{
		title: "1993",
		label: "Fundação",
		description:
			"A Associação Beneficente Parque do Cocó foi fundada em 1993 por um grupo de jovens da Primeira Igreja Batista de Fortaleza, com a iniciativa de desenvolver um trabalho social e educativo com crianças e adolescentes.",
		position: "top",
	},
	{
		title: "Início",
		label: "Parque do Cocó",
		description:
			"As primeiras atividades eram realizadas aos domingos no Parque do Cocó, com brincadeiras, contação de histórias e outras ações para as crianças.",
		position: "bottom",
	},
	{
		title: "Sede própria",
		label: "Crescimento",
		description:
			"Com o crescimento do trabalho e a identificação de novas necessidades, a organização passou a contar com uma sede própria.",
		position: "top",
	},
	{
		title: "Ampliação",
		label: "Atividades",
		description:
			"A Associação ampliou sua atuação e passou a atender crianças e adolescentes durante a semana, no contraturno escolar.",
		position: "bottom",
	},
	{
		title: "Hoje",
		label: "Atuação",
		description:
			"Atualmente, a Associação desenvolve atividades educativas, culturais e sociais para crianças e adolescentes, contando com o apoio de voluntários, doações e da comunidade.",
		position: "top",
	},
] as const;

export default function AboutUs() {
	return (
		<main
			id="sobre-nos"
			className="w-full bg-white px-5 pb-16 pt-10 font-sans text-[#286d8b] sm:px-8 sm:pt-14 lg:px-10 lg:pb-24"
		>
			<div className="mx-auto max-w-6xl">
				<section
					id="inicio"
					aria-labelledby="about-heading"
					className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
				>
					<div>
						<p className="mb-3 text-xs font-semibold text-[#65ad70]">Quem somos</p>
						<h1 id="about-heading" className="text-4xl font-extrabold tracking-tight text-[#286d8b]">
							Sobre nós
						</h1>
						<p className="mt-3 max-w-lg text-base leading-relaxed text-[#617b89]">
							Conheça a história, a atuação e as pessoas que fazem parte da Associação Beneficente Parque do Cocó.
						</p>
						<div className="mt-5 flex flex-wrap gap-2" aria-label="Áreas de atuação">
							{["Infância", "Educação", "Comunidade"].map((item) => (
								<span key={item} className="rounded-full bg-[#eaf4f7] px-4 py-1.5 text-xs font-semibold text-[#377d99]">
									{item}
								</span>
							))}
						</div>
					</div>
					<Image
						src="/sobre-nos-turma.jpg"
						alt="Crianças, educadores e voluntários em uma atividade de aprendizagem"
						width={332}
						height={202}
						priority
						sizes="(max-width: 767px) 100vw, 50vw"
						className="h-auto max-h-[360px] w-full rounded-2xl object-cover md:aspect-[1.65] md:h-full"
					/>
				</section>

				<section aria-labelledby="history-heading" className="mt-16 sm:mt-20">
					<p className="mb-3 text-xs font-semibold text-[#65ad70]">Nossa história</p>
					<h2 id="history-heading" className="max-w-4xl text-2xl font-extrabold leading-tight text-[#286d8b] sm:text-3xl">
						Desde 1993, a Associação Beneficente Parque do Cocó desenvolve um trabalho social e educativo voltado para crianças e adolescentes de comunidades.
					</h2>
					<ol className="relative mt-8 grid gap-7 after:absolute after:left-[5%] after:right-[5%] after:top-1/2 after:hidden after:border-t-2 after:border-[#dce9ec] after:content-[''] md:grid-cols-5 md:gap-3 md:after:block">
						{milestones.map((milestone) => (
							<li key={milestone.title} className="relative md:min-h-[380px]">
								<span
									aria-hidden="true"
									className="absolute -left-4 top-1 z-10 h-3 w-3 rounded-full border-2 border-white bg-[#65ad70] md:left-1/2 md:top-1/2 md:h-5 md:w-5 md:-translate-x-1/2 md:-translate-y-1/2"
								>
									<svg className="hidden h-full w-full p-1 text-white md:block" viewBox="0 0 12 12" fill="currentColor">
										<path d="m6 1 1.2 3.1L10.5 5l-2.5 2.2.7 3.3L6 8.8l-2.7 1.7.7-3.3L1.5 5l3.3-.9L6 1Z" />
									</svg>
								</span>
								<div
									className={`flex h-full flex-col text-left sm:text-center ${
										milestone.position === "top"
											? "md:justify-start md:pb-[210px]"
											: "md:justify-end md:pt-[210px]"
									}`}
								>
									<h3 className="text-base font-bold text-[#286d8b]">{milestone.title}</h3>
									<p className="mt-1 text-xs font-semibold text-[#65ad70]">{milestone.label}</p>
									<p className="mx-auto mt-3 max-w-[190px] text-xs leading-relaxed text-[#356c85]">
										{milestone.description}
									</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<section aria-labelledby="audience-heading" className="mt-14 sm:mt-16">
					<p className="mb-3 text-xs font-semibold text-[#65ad70]">Quem atendemos</p>
					<h2 id="audience-heading" className="max-w-4xl text-2xl font-extrabold leading-tight text-[#286d8b] sm:text-3xl">
						Nosso trabalho é voltado para crianças e adolescentes, contribuindo para sua educação, desenvolvimento e convivência.
					</h2>
					<p className="mt-3 text-sm text-[#617b89]">
						As atividades são realizadas principalmente no contraturno escolar.
					</p>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<InfoCard
							icon="people"
							title="Crianças e adolescentes"
							description="Público atendido pela Associação."
						/>
						<InfoCard
							icon="calendar"
							title="4 a 16 anos"
							description="Faixa etária prioritariamente atendida."
						/>
						<InfoCard
							icon="book"
							title="Escolas públicas"
							description="Atendimento prioritário a estudantes de escolas públicas."
						/>
						<InfoCard
							icon="home"
							title="Comunidades"
							description="Atuação junto a crianças e adolescentes moradores de comunidades."
						/>
					</div>
				</section>

				<section id="atividades" aria-labelledby="activities-heading" className="mt-14 scroll-mt-8 sm:mt-16">
					<p className="mb-3 text-xs font-semibold text-[#65ad70]">Nossa atuação</p>
					<h2 id="activities-heading" className="max-w-5xl text-2xl font-extrabold leading-tight text-[#286d8b] sm:text-3xl">
						Nosso trabalho vai além do apoio escolar. Buscamos contribuir para a educação, a cultura, a convivência e o desenvolvimento social de crianças e adolescentes.
					</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						<InfoCard
							icon="education"
							title="Educação"
							description="Apoio ao desenvolvimento educacional e reforço escolar."
						/>
						<InfoCard
							icon="palette"
							title="Cultura"
							description="Contato com atividades culturais e experiências que ampliam o repertório das crianças e adolescentes."
						/>
						<InfoCard
							icon="people"
							title="Convivência"
							description="Promoção de momentos de interação, respeito e convivência."
						/>
						<InfoCard
							icon="heart"
							title="Desenvolvimento social"
							description="Ações voltadas para o desenvolvimento e para a melhoria das perspectivas de vida."
						/>
						<InfoCard
							icon="music"
							title="Atividades artísticas"
							description="Atividades como balé, violão, artes e contação de histórias."
						/>
						<InfoCard
							icon="star"
							title="Valores"
							description="Promoção de valores, respeito e desenvolvimento humano."
						/>
					</div>
				</section>

				<section aria-labelledby="support-heading" className="mt-14 sm:mt-16">
					<p className="mb-3 text-xs font-semibold text-[#65ad70]">Como somos mantidos</p>
					<h2 id="support-heading" className="max-w-5xl text-2xl font-extrabold leading-tight text-[#286d8b] sm:text-3xl">
						Para manter suas atividades, a Associação conta com o apoio da igreja, de doações e do trabalho de voluntários.
					</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<InfoCard
							icon="church"
							title="Igreja"
							description="Apoio da igreja para a manutenção das atividades da instituição."
						/>
						<InfoCard
							icon="gift"
							title="Doações"
							description="Contribuições financeiras e materiais que ajudam a manter as atividades."
						/>
						<InfoCard
							icon="volunteer"
							title="Voluntários"
							description="Pessoas que contribuem com seu tempo, conhecimento e trabalho."
						/>
					</div>
					<p className="mt-6 text-sm leading-relaxed text-[#617b89]">
						A participação da comunidade é fundamental para a continuidade do nosso trabalho.
					</p>
				</section>

				<section
					id="quero-ajudar"
					aria-labelledby="contribute-heading"
					className="mt-12 grid scroll-mt-8 items-center gap-8 rounded-3xl bg-[#eaf4f7] p-6 sm:mt-14 sm:p-9 lg:grid-cols-2 lg:gap-12 lg:p-10"
				>
					<div>
						<p className="mb-3 text-xs font-semibold text-[#65ad70]">Faça parte dessa história</p>
						<h2 id="contribute-heading" className="text-3xl font-extrabold leading-tight text-[#286d8b] sm:text-4xl">
							Existem diferentes formas de contribuir com o trabalho da Associação Beneficente Parque do Cocó.
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-[#617b89]">
							Seja por meio de doações, trabalho voluntário ou apoio institucional, sua participação ajuda a fortalecer o atendimento às crianças e adolescentes.
						</p>
						<a
							href="#footer-contact-heading"
							className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#65ad70] px-5 text-sm font-bold text-white transition-colors hover:bg-[#4d995a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286d8b]"
						>
							Quero ajudar
						</a>
					</div>
					<Image
						src="/sobre-nos-atividades.jpg"
						alt="Voluntários e crianças participam juntos de uma atividade educativa"
						width={310}
						height={181}
						sizes="(max-width: 1023px) 100vw, 50vw"
						className="h-auto max-h-[360px] w-full rounded-2xl object-cover lg:aspect-[1.7] lg:h-full"
					/>
				</section>
			</div>
		</main>
	);
}
