import { defineConfig } from "vitepress";

import customPlugins from "./plugins/customPlugins.js";

export default defineConfig({
  title: "CTF Tutor",
  description: "A ctf tutor program",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(customPlugins.md_container_plugin());
    },
  },
});
