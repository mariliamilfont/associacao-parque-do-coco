import Image from "next/image";
import { BookOpen, Laptop, Music, Palette, Sparkles } from "lucide-react";

type Activity = {
	title: string;
	description: string;
	icon: typeof BookOpen;
	background: string;
};

const activities: Activity[] = [
	{
		title: "Reforço escolar",
		description: "Apoio ao desenvolvimento acadêmico das crianças e adolescentes.",
		icon: BookOpen,
		background: "#eef8fa",
	},
	{
		title: "Aulas de dança",
		description: "Atividades de dança, ritmo e expressão corporal.",
		icon: Sparkles,
		background: "#f0f8f2",
	},
	{
		title: "Aulas de instrumentos",
		description: "Iniciação musical e prática com diferentes instrumentos.",
		icon: Music,
		background: "#f1f7fc",
	},
	{
		title: "Artes",
		description: "Atividades de criatividade e expressão artística.",
		icon: Palette,
		background: "#fff7ed",
	},
	{
		title: "Informática",
		description: "Atividades relacionadas à tecnologia e inclusão digital.",
		icon: Laptop,
		background: "#eef8fa",
	},
	{
		title: "Contação de histórias",
		description: "Momentos de leitura, imaginação e desenvolvimento.",
		icon: BookOpen,
		background: "#f5f2fc",
	},
];

const moments = [
	{ src: "/sobre-nos-turma.jpg", alt: "Crianças e educadores em uma atividade de aprendizagem" },
	{ src: "/hero-educacao.jpg", alt: "Crianças participando de uma atividade educativa" },
	{ src: "/mural-arte.jpg", alt: "Jovens desenvolvendo uma atividade artística" },
	{ src: "/sobre-nos-atividades.jpg", alt: "Grupo reunido durante uma atividade da Associação" },
	{ src: "/hero-educacao.jpg", alt: "Crianças aprendendo e brincando juntas" },
	{ src: "/sobre-nos-turma.jpg", alt: "Turma reunida para uma experiência de convivência" },
	{ src: "/mural-arte.jpg", alt: "Participantes criando uma produção artística" },
	{ src: "/sobre-nos-atividades.jpg", alt: "Crianças e adolescentes em uma oficina" },
];

function ActivityIcon({ icon: Icon }: Pick<Activity, "icon">) {
	return <Icon aria-hidden="true" size={40} strokeWidth={1.8} />;
}

export default function ActivitiesPage() {
	return (
		<main className="bg-white text-[#286d8b]">
			<section aria-labelledby="activities-heading" className="mx-auto max-w-5xl px-6 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14">
				<h1 id="activities-heading" className="text-3xl font-extrabold tracking-tight text-[#286d8b] sm:text-4xl">
					ATIVIDADES
				</h1>
				<p className="mt-3 max-w-2xl text-sm leading-6 text-[#68757d] sm:text-base">
					Conheça as atividades e experiências que fazem parte do dia a dia da Associação.
				</p>

				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{activities.map(({ title, description, icon, background }) => (
						<article key={title} className="rounded-xl border border-[#b9dfbf] p-2.5">
							<div
								className="flex h-[7.5rem] items-center justify-center rounded-lg text-[#287393]"
								style={{ backgroundColor: background }}
							>
								<ActivityIcon icon={icon} />
							</div>
							<div className="px-0.5 pb-1 pt-3">
								<h2 className="text-base font-bold text-[#286d8b]">{title}</h2>
								<p className="mt-2 text-xs leading-[1.45] text-[#68757d]">{description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section aria-labelledby="moments-heading" className="bg-white">
				<div className="mx-auto max-w-5xl px-6 pb-14 sm:px-8 sm:pb-16">
					<h2 id="moments-heading" className="text-xl font-extrabold text-[#286d8b] sm:text-2xl">
						Nossos momentos
					</h2>
					<p className="mt-3 text-xs leading-5 text-[#68757d] sm:text-sm">
						Veja alguns momentos das atividades realizadas pela Associação.
					</p>
					<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
						{moments.map(({ src, alt }, index) => (
							<div key={`${src}-${index}`} className="relative aspect-[1.65] overflow-hidden rounded-xl">
								<Image
									src={src}
									alt={alt}
									fill
									sizes="(max-width: 639px) 50vw, 25vw"
									className="object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section aria-labelledby="projects-heading" className="mx-auto max-w-5xl px-6 pb-14 sm:px-8 sm:pb-16">
				<h2 id="projects-heading" className="text-xl font-extrabold text-[#286d8b] sm:text-2xl">
					Projetos e ações
				</h2>
				<p className="mt-3 text-xs leading-5 text-[#68757d] sm:text-sm">
					Além das atividades semanais, a Associação também promove ações que proporcionam novas experiências às crianças e adolescentes.
				</p>
				<div className="mt-4 border-t border-[#e1ebee]">
					<article className="flex gap-4 py-4">
						<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef8fa] text-[#287393]">
							<BookOpen aria-hidden="true" size={17} strokeWidth={1.8} />
						</span>
						<div>
							<h3 className="text-base font-bold text-[#286d8b]">Passeios culturais</h3>
							<p className="mt-1 text-xs leading-5 text-[#68757d] sm:text-sm">
								Atividades que proporcionam novas experiências culturais às crianças e adolescentes.
							</p>
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}
