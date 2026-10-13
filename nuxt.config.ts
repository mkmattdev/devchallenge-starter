import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-07-20",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  components: [{ path: "~/components", pathPrefix: false }],
  css: ["~/assets/css/main.css"],
  typescript: {
    sharedTsConfig: {
      compilerOptions: { types: ["node"] },
      include: ["../tests/*.test.ts", "../tests/support/**/*.ts"],
    },
  },
  vite: { plugins: [tailwindcss()] },
  app: { head: { htmlAttrs: { lang: "pl" }, title: "DevChallenge" } },
  fonts: {
    families: [
      { name: "Sora", weights: [400, 600, 700, 800] },
      { name: "JetBrains Mono", weights: [400, 700] },
    ],
  },
});
