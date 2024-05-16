import path from "node:path";
import fs from "node:fs";

import { defineConfig } from "vitepress";

import customPlugins from "./plugins/customPlugins.js";

import yaml from "yaml";

const navi_file = path.resolve(__dirname, "navi.yaml");
const navi_config = yaml.parse(fs.readFileSync(navi_file, "utf8"));

export default defineConfig({
  title: "CTF Tutor",
  description: "A ctf tutor program",
  head: [["link", { rel: "icon", href: "/CTFTutroialLogobyDesigner.png" }]],
  themeConfig: {
    logo: "/CTFTutroialLogobyDesigner.png",
    nav: navi_config.nav,
    sidebar: navi_config.sidebar,
    socialLinks: navi_config.socialLinks,
    search: {
      provider: "local",
    },
  },
  markdown: {
    config: (md) => {
      md.use(customPlugins.md_container_plugin());
    },
  },
});
