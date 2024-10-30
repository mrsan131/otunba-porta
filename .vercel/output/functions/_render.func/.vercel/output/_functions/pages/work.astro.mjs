import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_viASAcBr.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bofl7UYO.mjs';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_DqVYVRX4.mjs';
import { $ as $$Grid } from '../chunks/Grid_kvKV1oVK.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "servicios | otunba bullerengue", "description": "servicios que ofrece otunba" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Servicios", "tagline": "Proximamente...", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li></li>`)}` })} </main> </div> ` })}`;
}, "C:/Users/Pau/otunba-portafolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/Pau/otunba-portafolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
