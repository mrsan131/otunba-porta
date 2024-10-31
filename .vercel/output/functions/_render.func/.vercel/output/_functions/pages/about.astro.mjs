import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_viASAcBr.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_DqVYVRX4.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_DwRr7BBn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "trabajos | otunba bullerengue", "description": "trabajos de otunba bullerengue", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Otunb\xE1 Bullerengue", "tagline": "Es un colectivo musical y un proyecto educativo en torno a los aires del bullerengue colombiano, que recoge las pr\xE1cticas musicales y danc\xEDsticas de los bailes cantaos de la regi\xF3n del Caribe. Nace en la ciudad de Pereira, y est\xE1 conformada por j\xF3venes y adultos de diferentes regiones del pa\xEDs.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/at-work.jpg" alt="Jeanine White at work with a colleague" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Nosotros somos...</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Somos una agrupación musical que tiene como eje central las prácticas musicales y dancísticas de los aires del bullerengue: “bailes cantados” propios de la región Caribe Colombiana. Nacemos en la ciudad de Pereira como una manifestación artística urbana, representamos el arraigo cultural contemporáneo surgido en los últimos tiempos en el departamento de Risaralda como consecuencia de la confluencia intercultural entre la población afro, indígena y mestiza que habita hoy en el territorio.
</p> <p data-astro-cid-kh7btl4r>
Nuestro nombre es una composición léxica que hace  homenaje al idioma Emberá Chamí, consta de dos vocablos: “Otún” río que atraviesa la ciudad de Pereira, y “bá” o “baa” que significa “aguas o líquido” así pues,  rendimos también culto a las aguas dulces del Otún como fuente de vida de nuestro territorio.
</p> <p data-astro-cid-kh7btl4r>
Nuestro sonido es un diálogo entre la tradición y lo contemporáneo. La capoeira, el teatro, la narración oral, las composiciones inéditas en torno a la actual realidad colombiana y las vivencias de nuestros integrantes hacen parte de la propuesta original de Otunbá, que busca no desligarse de las raíces.
</p> </div> </section></main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/Pau/otunba-portafolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Pau/otunba-portafolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
