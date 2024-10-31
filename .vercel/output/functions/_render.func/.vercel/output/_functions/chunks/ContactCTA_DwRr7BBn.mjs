import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderSlot, d as createAstro, e as renderComponent } from './astro/server_viASAcBr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { b as $$Icon } from './BaseLayout_DqVYVRX4.mjs';

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/Pau/otunba-portafolio/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:me@example.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Escuchala en Youtube
${renderComponent($$result2, "Icon", $$Icon, { "icon": "youtube-logo", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/Pau/otunba-portafolio/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
