import DefaultTheme from "vitepress/theme";
import "./style.css";
import customPlugins from "../plugins/customPlugins";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(customPlugins.quick_global_register_plugin());
    app.component(FontAwesomeIcon, "font-awesome-icon");
  },
};
