declare module "astro:actions" {
	type Actions = typeof import("/Users/mattglbrt/Documents/dev/valtiare/src/actions")["server"];

	export const actions: Actions;
}