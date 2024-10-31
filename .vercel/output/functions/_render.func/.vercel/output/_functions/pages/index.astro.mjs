import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, e as renderComponent } from '../chunks/astro/server_viASAcBr.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bofl7UYO.mjs';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_DqVYVRX4.mjs';
import { $ as $$Grid } from '../chunks/Grid_kvKV1oVK.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "C:/Users/Pau/otunba-portafolio/src/components/PortfolioPreview.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Pau/otunba-portafolio/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "HOLA ", "tagline": "Siendo nosotros un colectivo musical, cultural y pedag\xF3gico bajo el prop\xF3sito com\xFAn de la conservaci\xF3n y salvaguardia del PCI (Patrimonio Cultural Inmaterial) colombiano en la practica del Bullerengue; Otunb\xE1, mezcla lo sonoro, lo po\xE9tico, lo pict\xF3rico y lo pedag\xF3gico a trav\xE9s de la composici\xF3n, interpretaci\xF3n, promoci\xF3n y divulgaci\xF3n de los ritmos del bullerengue tradicional, generando espacios de formaci\xF3n e investigaci\xF3n, di\xE1logos e intercambio de saberes y ruedas de canto y baile como espacios culturales, art\xEDsticos y educativos donde la m\xFAsica se vuelve una alternativa de vida y un espacio para la reconciliaci\xF3n, resiliencia, la convivencia en el respeto de lo diverso y la construcci\xF3n de paz; te invitamos a que descubras las posibilidades que tenemos para ti.", "align": "start", "data-astro-cid-j7pv25f6": true })} <img alt="foto vertical otunba" width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>CANTANDO RESISTEN LAS MUJERES</h3> <p data-astro-cid-j7pv25f6>Proyecto ganador de la convocaroria BECA: MUJERES Y TERRITORIO: “MUJERES VICTIMAS NARRAN SUS TERRITORIOS PARA LA CONSTRUCCIÓN DE PAZ”  de la convocatoria ESTIMULOS 2024</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> </section></main></div>` })}`;
}, "C:/Users/Pau/otunba-portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Pau/otunba-portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
