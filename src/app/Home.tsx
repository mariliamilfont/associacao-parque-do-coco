import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { efeitos, fx } from "./efeitos";
import Blobs from "./fx/Blobs";
import Counter from "./fx/Counter";
import HeroGallery from "./fx/HeroGallery";
import ParallaxImage from "./fx/ParallaxImage";
import Tree from "./fx/Tree";
import Wave from "./fx/Wave";
import Words from "./fx/Words";

const activities = [
  { icon: "book", title: "Educação" },
  { icon: "music", title: "Cultura" },
  { icon: "palette", title: "Arte" },
  { icon: "people", title: "Convivência" },
];

const waysToHelp = [
  { icon: "heart", title: "Seja voluntário" },
  { icon: "gift", title: "Faça uma doação" },
  { icon: "hand", title: "Seja parceiro" },
];

function SectionIcon({ name }: { name: string }) {
  const commonProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "book") {
    return (
      <svg {...commonProps}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
        <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20M8 7h8M8 10h6" />
      </svg>
    );
  }

  if (name === "music") {
    return (
      <svg {...commonProps}>
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    );
  }

  if (name === "palette") {
    return (
      <svg {...commonProps}>
        <path d="M12 3a9 9 0 0 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3.1l-.5-.5a1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3A8.3 8.3 0 0 0 12 3Z" />
        <circle cx="7.5" cy="10" r=".7" fill="currentColor" />
        <circle cx="10" cy="6.8" r=".7" fill="currentColor" />
        <circle cx="14" cy="6.8" r=".7" fill="currentColor" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg {...commonProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.9M17 14a4.5 4.5 0 0 1 3.5 4.4" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...commonProps}>
        <path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 8.8 1.5Z" />
      </svg>
    );
  }

  if (name === "gift") {
    return (
      <svg {...commonProps}>
        <path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7H8.5a2.5 2.5 0 1 1 2.5-2.5V7ZM12 7h3.5A2.5 2.5 0 1 0 13 4.5V7Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 20V9M12 9 8 5m4 4 4-4M7 20h10M5 20h14" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Tree />
      <section id="inicio" className="relative overflow-hidden border-b border-[#edf0f1] bg-white">
        <Blobs />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12 lg:px-6 lg:py-10">
          <div className="order-2 lg:order-1">
            <span className={`eyebrow ${fx(efeitos.heroEntrada, "fx-rise")}`}>ASSOCIAÇÃO BENEFICENTE</span>
            <h1 className="mt-5 max-w-[31.25rem] text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#246b8d] sm:text-[2.75rem]">
              <Words text="Transformando oportunidades por meio da educação e da convivência" />
            </h1>
            <p
              className={`mt-5 max-w-[30rem] text-base leading-6 text-[#68757d] sm:text-[1.0625rem] ${fx(efeitos.heroEntrada, "fx-rise")}`}
              style={{ "--d": "1.1s" } as CSSProperties}
            >
              Há mais de 30 anos, a Associação Beneficente Parque do Cocó desenvolve ações educativas e sociais para crianças e adolescentes em Fortaleza.
            </p>
            <a
              href="/quero-ajudar"
              className={`button-primary mt-6 ${fx(efeitos.heroEntrada, "fx-rise")} ${fx(efeitos.pulsoBotao, "fx-pulse")}`}
              style={{ "--d": "1.3s" } as CSSProperties}
            >
              Quero ajudar
            </a>
          </div>
          <div className="order-1 overflow-hidden rounded-[0.875rem] lg:order-2">
            <HeroGallery />
          </div>
        </div>
      </section>

      <section id="conheca-associacao" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-6 lg:py-16">
          <ParallaxImage className="overflow-hidden rounded-xl">
            <Image
              src="/mural-arte.jpg"
              alt="Jovens pintando um mural colorido"
              width={1152}
              height={768}
              className="aspect-[1.5] w-full object-cover"
            />
          </ParallaxImage>
          <div>
            <span className="eyebrow eyebrow-green">DESDE 1993</span>
            <h2 className="section-title mt-5">Um espaço para aprender, criar e crescer</h2>
            <p className="mt-5 text-base leading-6 text-[#68757d]">
              Na Associação Beneficente Parque do Cocó, crianças e adolescentes encontram oportunidades de aprendizado, convivência e desenvolvimento por meio de diferentes atividades educativas, esportivas e culturais, fortalecendo os vínculos comunitários e familiares.
            </p>
            <a href="/sobre-nos#historia" className="inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#246b8d] transition-colors hover:text-[#1597df]">
              Conheça nossa história <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
            {efeitos.contadores && (
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#e3edf0] pt-6">
                <div className="flex flex-col-reverse">
                  <dt className="text-sm text-[#68757d]">de atuação</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-[#246b8d]">
                    +<Counter to={30} /> anos
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-sm text-[#68757d]">ano de fundação</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-[#246b8d]">
                    <Counter from={1900} to={1993} />
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-sm text-[#68757d]">faixa etária atendida</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-[#246b8d]">
                    <Counter to={4} /> a <Counter to={16} />
                  </dd>
                </div>
              </dl>
            )}
          </div>
        </div>
      </section>

      <section id="atividades" className="bg-[#eff8fc]">
        <Wave from="#ffffff" to="#eff8fc" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-6 lg:py-16">
          <h2 className="section-title">Educação que vai além da sala de aula</h2>
          <p className="mt-3 text-base text-[#68757d]">
            Nosso trabalho reúne educação, cultura, arte e convivência para contribuir com o desenvolvimento de crianças e adolescentes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <article key={activity.title} className={`activity-card ${fx(efeitos.hoverCards, "fx-card")}`}>
                <span className="icon-circle fx-icon"><SectionIcon name={activity.icon} /></span>
                <h3>{activity.title}</h3>
              </article>
            ))}
          </div>
          <a href="/atividades" className="mt-7 flex items-center justify-end gap-2 text-sm font-bold text-[#246b8d] hover:text-[#1597df]">
            Conheça nossas atividades <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
          </a>
        </div>
      </section>

      <section id="quero-ajudar" className="bg-white">
        <Wave from="#eff8fc" to="#ffffff" variant={1} />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-6 lg:py-16">
          <h2 className="section-title">Você também pode fazer parte dessa história</h2>
          <p className="mt-3 max-w-4xl text-base leading-6 text-[#68757d]">
            A continuidade das atividades da Associação conta com o apoio de voluntários, doadores e parceiros. Cada gesto ajuda a construir novos futuros.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {waysToHelp.map((way) => (
              <a key={way.title} href="#contato" className={`help-card ${fx(efeitos.hoverCards, "fx-card")}`}>
                <span className="icon-circle icon-circle-green fx-icon"><SectionIcon name={way.icon} /></span>
                <h3>{way.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#f3faf7]">
        <Wave from="#ffffff" to="#f3faf7" />
        <div className="relative overflow-hidden">
        <Blobs />
        <div className="relative mx-auto max-w-3xl px-6 py-14 text-center sm:px-8 lg:py-16">
          <h2 className="section-title mx-auto">Juntos, podemos transformar oportunidades</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-[#68757d]">
            Conheça de perto o trabalho da Associação Beneficente Parque do Cocó e descubra como você pode contribuir para o desenvolvimento de crianças e adolescentes.
          </p>
          <a href="/quero-ajudar" className="button-primary mt-6">Quero ajudar</a>
        </div>
        </div>
      </section>
    </main>
  );
}
