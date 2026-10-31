import Image from "next/image";
import type { CSSProperties } from "react";
import { contato, emailLink } from "./contato";
import { efeitos, fx } from "./efeitos";
import InstagramIcon from "./InstagramIcon";
import Blobs from "./fx/Blobs";
import Typewriter from "./fx/Typewriter";
import ParallaxImage from "./fx/ParallaxImage";
import RevealGrid from "./fx/RevealGrid";
import Wave from "./fx/Wave";
import Words from "./fx/Words";
import {
	Apple,
	Banknote,
	BookOpen,
	CalendarDays,
	Computer,
	Mail,
	MapPin,
	Package,
	Palette,
	QrCode,
	SprayCan,
	UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PixCopyButton from "./PixCopyButton";

type IconCardDetails = {
	icon: LucideIcon;
	title: string;
	description: string;
	color?: "blue" | "green";
};

const contributionMethods: IconCardDetails[] = [
	{
		icon: Banknote,
		title: "Doação financeira",
		description: "Apoio financeiro rápido via PIX para sustentar nossos projetos diários.",
	},
	{
		icon: Package,
		title: "Doação de materiais",
		description: "Contribuição de materiais escolares, artísticos e insumos necessários.",
	},
	{
		icon: UsersRound,
		title: "Voluntariado",
		description: "Compartilhe seu tempo, talento e carinho com nossos jovens.",
	},
];

const materialCategories: {
	icon: LucideIcon;
	title: string;
	items: string[];
}[] = [
	{
		icon: BookOpen,
		title: "Material Escolar",
		items: [
			"Cadernos e blocos de anotações",
			"Lápis, canetas, lapiseiras e borrachas",
			"Papel sulfite, cartolinas e papéis diversos",
			"Outros materiais escolares necessários",
		],
	},
	{
		icon: Palette,
		title: "Materiais de Arte",
		items: [
			"Tintas guache, acrílica e pincéis",
			"Lápis de cor, giz de cera e hidrocor",
			"Glacês, massas de modelar e colas",
			"Outros insumos para oficinas artísticas",
		],
	},
	{
		icon: SprayCan,
		title: "Produtos de Limpeza",
		items: [
			"Desinfetantes e sabão líquido",
			"Sacos de lixo e materiais de higiene",
			"Vassouras, rodos e panos de limpeza",
			"Outros itens para conservação do espaço",
		],
	},
	{
		icon: Apple,
		title: "Alimentos",
		items: [
			"Alimentos não perecíveis para lanches",
			"Insumos utilizados nas atividades",
			"Suplementos de alimentação saudável",
		],
	},
	{
		icon: Computer,
		title: "Equipamentos",
		items: [
			"Computadores e notebooks em bom estado",
			"Projetores e caixas de som",
			"Outros eletrônicos pedagógicos",
		],
	},
];

const volunteerAreas: IconCardDetails[] = [
	{
		icon: BookOpen,
		title: "Educação",
		description: "Apoio direto às atividades pedagógicas regulares e auxílio no reforço escolar de base.",
		color: "green",
	},
	{
		icon: Palette,
		title: "Arte e Cultura",
		description: "Orientação e facilitação de dinâmicas artísticas, musicais, teatrais e culturais.",
		color: "green",
	},
	{
		icon: Computer,
		title: "Tecnologia",
		description: "Apoio em aulas de informática básica, ferramentas de criação e introdução digital.",
		color: "green",
	},
	{
		icon: CalendarDays,
		title: "Atividades e Eventos",
		description: "Auxílio operacional no planejamento e realização dos eventos sociais da Associação.",
		color: "green",
	},
];

function IconBadge({
	icon: Icon,
	color = "blue",
}: {
	icon: LucideIcon;
	color?: "blue" | "green";
}) {
	return (
		<span
			className={`fx-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
				color === "green"
					? "bg-[#f0f8f2] text-[#65ad70]"
					: "bg-[#eff7fa] text-[#347e9c]"
			}`}
		>
			<Icon aria-hidden="true" size={18} strokeWidth={1.8} />
		</span>
	);
}

const card = fx(efeitos.vidaQueroAjudar, "fx-card fx-card-expand");

function InformationCard({ icon: Icon, title, description, color }: IconCardDetails) {
	return (
		<article className={`flex items-start gap-3 rounded-lg border border-[#e3edf1] bg-white p-3.5 sm:p-4 ${card}`}>
			<IconBadge icon={Icon} color={color} />
			<div>
				<h3 className="text-sm font-bold text-[#286d8b]">{title}</h3>
				<p className="mt-1 text-sm leading-relaxed text-[#65727b]">{description}</p>
			</div>
		</article>
	);
}

function MaterialCard({
	icon: Icon,
	title,
	items,
}: {
	icon: LucideIcon;
	title: string;
	items: string[];
}) {
	return (
		<article className={`rounded-lg border border-[#e3edf1] bg-white p-4 sm:p-5 ${card}`}>
			<div className="flex items-center gap-2.5">
				<IconBadge icon={Icon} />
				<h3 className="text-sm font-bold text-[#286d8b]">{title}</h3>
			</div>
			<ul className="mt-3 space-y-1.5 pl-4 text-sm leading-relaxed text-[#65727b] marker:text-[#65ad70]">
				{items.map((item) => (
					<li key={item} className="list-disc">
						{item}
					</li>
				))}
			</ul>
		</article>
	);
}

function ContactCard({
	icon: Icon,
	label,
	children,
	href,
}: {
	icon: LucideIcon;
	label: string;
	children: string;
	href?: string;
}) {
	return (
		<article className={`flex items-center gap-3 rounded-lg border border-[#e3edf1] bg-white p-3.5 sm:p-4 ${card}`}>
			<IconBadge icon={Icon} />
			<div className="min-w-0">
				<h3 className="text-[0.75rem] font-semibold uppercase tracking-wide text-[#69a5c3]">
					{label}
				</h3>
				<p className="mt-0.5 break-words text-sm font-bold leading-relaxed text-[#286d8b]">
					{href ? (
						<a
							href={href}
							{...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
							className="hover:text-[#1597df]"
						>
							{children}
						</a>
					) : (
						children
					)}
				</p>
			</div>
		</article>
	);
}

function PixQrCode() {
	return (
		<Image
			src="/pix-qrcode.svg"
			alt="QR Code para doar pelo Pix"
			width={106}
			height={106}
			unoptimized
			className="h-[6.625rem] w-[6.625rem] rounded-lg border border-[#d6e8f1]"
		/>
	);
}

export default function WannaHelp() {
	return (
		<main className="w-full text-[#286d8b]">
			<section aria-labelledby="help-heading" className="relative overflow-hidden border-b border-[#e7eff2] bg-white">
				<Blobs />
				<div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
					<div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
						<div>
							<p className="mb-4 inline-flex rounded-full bg-[#eff7fa] px-4 py-1.5 text-sm font-bold uppercase text-[#347e9c]">
								Sua ajuda transforma
							</p>
							<h1 id="help-heading" className="max-w-md text-3xl font-extrabold leading-tight text-[#286d8b] sm:text-4xl">
								<Words text="Faça parte dessa história" />
							</h1>
							<p
								className={`mt-4 max-w-xl text-base leading-relaxed text-[#65727b] ${fx(efeitos.vidaQueroAjudar, "fx-rise")}`}
								style={{ "--d": "0.7s" } as CSSProperties}
							>
								Existem diferentes formas de contribuir com o trabalho da Associação Beneficente Parque do Cocó. Escolha a forma que mais combina com você e ajude a impulsionar o futuro de nossas crianças.
							</p>
						</div>
						<ParallaxImage className="overflow-hidden rounded-xl">
							<Image
								src="/hero-educacao.jpg"
								alt="Crianças aprendem e participam juntas de atividades na sala da Associação"
								width={768}
								height={768}
								priority
								sizes="(max-width: 767px) 100vw, 50vw"
								className="aspect-[1.65] w-full object-cover"
							/>
						</ParallaxImage>
					</div>
					<RevealGrid className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{contributionMethods.map((method) => (
							<InformationCard key={method.title} {...method} />
						))}
					</RevealGrid>
				</div>
			</section>

			<section aria-labelledby="donation-heading" className="bg-white">
				<div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:px-10 lg:py-16">
					<div>
						<h2 id="donation-heading" className="text-2xl font-extrabold text-[#286d8b] sm:text-3xl">
							Faça uma doação
						</h2>
						<p className="mt-4 max-w-xl text-base leading-relaxed text-[#65727b]">
							Sua contribuição ajuda a Associação a manter suas atividades, adquirir suprimentos pedagógicos e manter o espaço em pleno funcionamento para atender às necessidades das crianças e adolescentes da região.
						</p>
					</div>
					<div className="rounded-xl border border-[#e1edf1] bg-[#eff7fa] p-5 sm:p-6">
						<div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#286d8b]">
							<QrCode aria-hidden="true" size={18} />
							<span>Doe pelo PIX</span>
						</div>
						<dl className="mt-4 space-y-2">
							<div>
								<dt className="text-[0.75rem] font-semibold uppercase text-[#69a5c3]">
									Chave PIX (CNPJ)
								</dt>
								<dd className="text-sm font-bold text-[#286d8b]">{contato.pix}</dd>
							</div>
							<div>
								<dt className="text-[0.75rem] font-semibold uppercase text-[#69a5c3]">
									Instituição beneficiária
								</dt>
								<dd className="text-sm font-bold text-[#286d8b]">
									Associação Beneficente Parque do Cocó
								</dd>
							</div>
						</dl>
						<PixCopyButton pixKey={contato.pixCopia} />
						<div className="mt-4 flex justify-center">
							<PixQrCode />
						</div>
						<p className="mt-3 text-center text-[0.75rem] leading-relaxed text-[#65727b]">
							Escaneie o QR Code ou copie a chave PIX acima para realizar sua contribuição de forma segura.
						</p>
					</div>
				</div>
			</section>

			<section aria-labelledby="materials-heading" className="bg-[#eff7fa]">
				<Wave from="#ffffff" to="#eff7fa" />
				<div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
					<h2 id="materials-heading" className="text-2xl font-extrabold text-[#286d8b] sm:text-3xl">
						Doação de materiais
					</h2>
					<p className="mt-3 max-w-4xl text-base leading-relaxed text-[#65727b]">
						A Associação também recebe materiais que podem contribuir diretamente para o desenvolvimento de nossas oficinas e para o bom funcionamento do espaço comunitário.
					</p>
					<RevealGrid className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
						{materialCategories.map((category, index) => (
							<div
								key={category.title}
								className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
							>
								<MaterialCard {...category} />
							</div>
						))}
					</RevealGrid>
					<aside className="mt-6 flex items-start gap-3 border-l-2 border-[#f1ae36] bg-[#fff9e8] px-4 py-3.5 text-sm leading-relaxed text-[#52758a]">
						<span aria-hidden="true" className="mt-0.5 font-bold text-[#e4a126]">!</span>
						<Typewriter
							trechos={[
								{ text: "As necessidades da Associação podem variar ao longo do tempo. " },
								{ text: "Entre em contato conosco antes de realizar sua doação", strong: true },
								{ text: " para confirmar quais itens são mais necessários atualmente." },
							]}
						/>
					</aside>
				</div>
			</section>

			<section id="contatos" aria-labelledby="delivery-heading" className="scroll-mt-6 bg-white">
				<Wave from="#eff7fa" to="#ffffff" variant={1} />
				<div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
					<h2 id="delivery-heading" className="text-2xl font-extrabold text-[#286d8b] sm:text-3xl">
						Como entregar sua doação?
					</h2>
					<p className="mt-3 text-base leading-relaxed text-[#65727b]">
						Você pode entregar as doações diretamente em nossa sede. Entre em contato para alinhar os detalhes ou esclarecer qualquer dúvida.
					</p>
					<RevealGrid className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						<ContactCard icon={MapPin} label="Endereço">
							R. Des. Leite Albuquerque, 1523 – Aldeota
						</ContactCard>
						<ContactCard icon={InstagramIcon} label="Instagram" href={contato.instagramUrl}>
							{contato.instagram}
						</ContactCard>
						<ContactCard icon={Mail} label="E-mail" href={emailLink}>
							{contato.email}
						</ContactCard>
					</RevealGrid>
					<div className="mt-6 flex justify-center">
						<a className="button-primary" href={emailLink}>
							<Mail aria-hidden="true" className="mr-2" size={15} />
							Enviar e-mail
						</a>
					</div>
				</div>
			</section>

			<section aria-labelledby="volunteer-heading" className="bg-[#eff7fa]">
				<Wave from="#ffffff" to="#eff7fa" />
				<div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
					<h2 id="volunteer-heading" className="text-2xl font-extrabold text-[#286d8b] sm:text-3xl">
						Seja voluntário
					</h2>
					<p className="mt-3 max-w-5xl text-base leading-relaxed text-[#65727b]">
						Contribua com seu tempo, conhecimento e empatia. Seu trabalho voluntário pode abrir portas importantes para o desenvolvimento sociocultural de nossos jovens.
					</p>
					<RevealGrid className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{volunteerAreas.map((area) => (
							<InformationCard key={area.title} {...area} />
						))}
					</RevealGrid>
				</div>
			</section>

			<section aria-labelledby="volunteer-cta-heading" className="bg-white">
				<Wave from="#eff7fa" to="#ffffff" variant={1} />
				<div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
					<div className="rounded-xl border border-[#e3edf1] bg-white px-5 py-8 text-center sm:px-10 sm:py-10">
						<h2 id="volunteer-cta-heading" className="text-2xl font-extrabold text-[#286d8b]">
							Quer ser voluntário?
						</h2>
						<p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#65727b]">
							Entre em contato conosco para conhecer mais sobre nossos programas e saiba como você pode se inscrever para contribuir ativamente.
						</p>
						<div className="mt-5 flex flex-wrap justify-center gap-3">
							<a className="button-primary" href={contato.instagramUrl} target="_blank" rel="noopener noreferrer">
								<InstagramIcon aria-hidden="true" className="mr-2" size={15} />
								Falar pelo Instagram
							</a>
						</div>
					</div>
				</div>
			</section>

			<section aria-labelledby="difference-heading" className="bg-[#f2f9f4]">
				<Wave from="#ffffff" to="#f2f9f4" />
				<div className="relative overflow-hidden">
					<Blobs />
					<div className="relative mx-auto max-w-3xl px-5 py-10 text-center sm:px-8 sm:py-14">
					<h2 id="difference-heading" className="text-2xl font-extrabold text-[#286d8b] sm:text-3xl">
						Toda contribuição faz diferença.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#65727b]">
						Seja por meio de uma doação pontual, entrega de materiais fundamentais ou dedicando algumas horas do seu dia como voluntário. Existem diversas maneiras de abraçar a causa da Associação Beneficente Parque do Cocó.
					</p>
					</div>
				</div>
			</section>
		</main>
	);
}
