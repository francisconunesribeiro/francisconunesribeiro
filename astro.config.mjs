import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: 'https://francisconunesribeiro.com',
	integrations: [mdx(), sitemap(), tailwind()],
	output: "server",
	adapter: cloudflare({ mode: 'directory' }),
	experimental: {
		viewTransitions: true
	}
});