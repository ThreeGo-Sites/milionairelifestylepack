import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronDown, Play, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxury-pack-hero.jpg";
import mansionVideo from "@/assets/mansion-supercar.mp4.asset.json";
import cashCounterVideo from "@/assets/cash-counter.mp4.asset.json";
import luxuryCashVideo from "@/assets/luxury-cash.mp4.asset.json";

const checkoutUrl = "https://pay.cakto.com.br/3f4kxok_1102215";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vault Society Pack — Vídeos Premium" },
      { name: "description", content: "Mais de 150 vídeos premium para elevar a estética dos seus conteúdos. Acesso digital imediato." },
      { property: "og:title", content: "Vault Society Pack — Vídeos Premium" },
      { property: "og:description", content: "Uma biblioteca visual exclusiva para conteúdos com presença, desejo e alto padrão." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const previewVideos = [
  { src: mansionVideo.url, label: "Mansões & Supercarros", number: "01" },
  { src: cashCounterVideo.url, label: "Negócios & Ambição", number: "02" },
  { src: luxuryCashVideo.url, label: "Luxo & Detalhes", number: "03" },
];

const faqs = [
  ["O que vem no pack?", "Uma biblioteca com mais de 150 vídeos verticais de alto padrão, incluindo carros, mansões, viagens, dinheiro, relógios e experiências premium."],
  ["Como recebo o acesso?", "O acesso é digital e enviado automaticamente após a confirmação do pagamento."],
  ["Os vídeos são de alta qualidade?", "Sim. Todos os arquivos foram selecionados para entregar imagem nítida e uma estética sofisticada nas redes sociais."],
  ["Posso usar nos meus conteúdos?", "Sim. Você pode usar os vídeos na criação dos seus conteúdos, seguindo as condições informadas nos termos de uso."],
  ["Quando recebo o material?", "Imediatamente após a aprovação do pagamento."],
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-[92vh] items-end border-b border-border">
        <img src={heroImage} alt="Supercarro preto diante de uma mansão contemporânea" width={1920} height={1080} className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-10">
          <a href="#top" className="font-display text-2xl font-semibold text-ivory">VAULT SOCIETY</a>
          <a href="#oferta" className="flex items-center gap-2 text-xs font-semibold uppercase text-ivory transition-colors hover:text-gold">Ver oferta <ArrowDown className="size-4" /></a>
        </div>
        <div id="top" className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 pt-32 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:pb-20">
          <div className="animate-reveal max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-gold"><span className="h-px w-10 bg-gold" /> Biblioteca visual exclusiva</p>
            <h1 className="font-display text-6xl leading-[0.88] font-semibold text-ivory sm:text-7xl lg:text-8xl">Vault Society<br /><em className="font-medium text-gold">Lifestyle Pack</em></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ivory/80 md:text-lg">Mais de 150 vídeos para criar conteúdos com presença, desejo e uma estética que não passa despercebida.</p>
          </div>
          <div className="animate-reveal flex flex-col items-start border-l border-ivory/35 pl-5 [animation-delay:180ms] md:items-end md:border-l-0 md:border-r md:pl-0 md:pr-5">
            <strong className="font-display text-6xl text-ivory">150+</strong>
            <span className="text-xs uppercase text-ivory/70">vídeos em alta qualidade</span>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-emerald">Criado para destacar</p>
            <h2 className="font-display text-5xl leading-none font-semibold md:text-6xl">Seu conteúdo merece parecer valioso.</h2>
          </div>
          <div className="grid gap-8 border-t border-ink/20 pt-8 sm:grid-cols-2">
            {[
              ["01", "Variedade real", "Cenas de carros, viagens, arquitetura, dinheiro e experiências de alto padrão."],
              ["02", "Formato pronto", "Vídeos verticais para encaixar em Reels, TikTok e Shorts sem complicação."],
              ["03", "Estética consistente", "Uma seleção visualmente coesa para deixar seu perfil mais sofisticado."],
              ["04", "Acesso imediato", "Receba a biblioteca digital logo após a confirmação da compra."],
            ].map(([number, title, copy]) => (
              <article key={number} className="border-b border-ink/20 pb-7">
                <span className="text-xs font-bold text-emerald">{number}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-gold">Amostras do acervo</p>
              <h2 className="max-w-3xl font-display text-5xl leading-none font-semibold md:text-6xl">Veja antes de entrar.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Aperte o play e confira três exemplos reais dos vídeos disponíveis no pack.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {previewVideos.map((video, index) => (
              <article key={video.src} className={`group relative overflow-hidden border border-border bg-card ${index === 1 ? "md:translate-y-10" : ""}`}>
                <div className="relative aspect-[9/16] overflow-hidden">
                  <video src={video.src} controls playsInline preload="metadata" aria-label={`Prévia: ${video.label}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  <div className="pointer-events-none absolute left-4 top-4 flex size-10 items-center justify-center border border-ivory/50 bg-ink/60 text-xs font-bold text-ivory">{video.number}</div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-xl font-semibold">{video.label}</h3>
                  <Play className="size-4 text-gold" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 bg-emerald py-20 text-emerald-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Sparkles className="mb-7 size-8 text-gold" />
              <h2 className="font-display text-5xl leading-none font-semibold md:text-6xl">Pare de publicar o que todo mundo já viu.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border border-emerald-foreground/20 p-6">
                <span className="text-xs font-semibold uppercase text-emerald-foreground/60">Conteúdo comum</span>
                <ul className="mt-6 space-y-4 text-sm text-emerald-foreground/70"><li>Visual genérico</li><li>Pouco impacto</li><li>Perfil sem unidade</li></ul>
              </div>
              <div className="border border-gold bg-ink/20 p-6">
                <span className="text-xs font-semibold uppercase text-gold">Com o Vault Pack</span>
                <ul className="mt-6 space-y-4 text-sm">{["Estética sofisticada", "Mais opções para criar", "Presença visual marcante"].map((item) => <li key={item} className="flex gap-2"><Check className="size-4 shrink-0 text-gold" />{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="grid overflow-hidden border border-ink/20 md:grid-cols-[1fr_0.9fr]">
            <div className="bg-ink p-8 text-ivory md:p-12">
              <p className="text-xs font-semibold uppercase text-gold">Acesso completo</p>
              <h2 className="mt-5 font-display text-5xl leading-none font-semibold">Tudo o que você precisa para elevar o nível.</h2>
              <ul className="mt-9 space-y-4 text-sm text-ivory/75">
                {["Mais de 150 vídeos verticais", "Diversos estilos de lifestyle", "Arquivos em alta qualidade", "Entrega digital imediata", "Pagamento único"].map((item) => <li key={item} className="flex items-center gap-3"><Check className="size-4 text-gold" />{item}</li>)}
              </ul>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase text-emerald">Oferta especial</p>
              <p className="mt-5 font-display text-6xl font-semibold">R$ 12,99</p>
              <p className="mt-1 text-xs text-ink/55">Pagamento único • Sem mensalidade</p>
              <Button asChild variant="luxury" size="xl" className="mt-8 w-full">
                <a href={checkoutUrl}>Quero acessar agora <ArrowRight /></a>
              </Button>
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink/55"><ShieldCheck className="size-4 text-emerald" /> Pagamento seguro e acesso digital</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.75fr_1.25fr] md:px-10">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-gold">Dúvidas frequentes</p>
            <h2 className="font-display text-5xl leading-none font-semibold">Antes de começar.</h2>
          </div>
          <div className="border-t border-border">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium"><span>{question}</span><ChevronDown className="size-4 shrink-0 text-gold transition-transform group-open:rotate-180" /></summary>
                <p className="max-w-2xl pt-4 text-sm leading-6 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-ink py-16 text-center text-ivory">
        <p className="font-display text-3xl font-semibold">VAULT SOCIETY</p>
        <p className="mt-3 text-xs text-ivory/50">Conteúdo premium. Presença incomparável.</p>
      </footer>
    </main>
  );
}
