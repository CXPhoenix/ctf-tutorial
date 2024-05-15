import path from "node:path";
import fs from "node:fs";
import container from "markdown-it-container";
import _ from "lodash";

/**
 * Default global components are store in ".vitepress/theme/components/global"
 * @returns {{install: Function}}
 */
const quick_global_register_plugin = () => {
  return {
    install: (app) => {
      const global_component_files = import.meta.glob(
        "../theme/components/global/*.vue",
        { eager: true },
      );
      Object.entries(global_component_files).forEach(([path, m]) => {
        const componentName = _.upperFirst(
          _.camelCase(
            path
              .split("/")
              .pop()
              .replace(/\.\w+$/, ""),
          ),
        );
        app.component(`${componentName}`, m.default);
      });
    },
  };
};

/**
 *
 * @param {String} global_components_folder_path
 * @returns {Function}
 */
const md_container_plugin =
  (
    global_components_folder_path = path.resolve(
      __dirname,
      "../theme/components/global",
    ),
  ) =>
  (md) => {
    if (fs.existsSync(global_components_folder_path)) {
      const global_component_files = fs.readdirSync(
        global_components_folder_path,
      );
      global_component_files.push("template"); // for named-slot used
      global_component_files.forEach((file) => {
        md.use(container, path.basename(file, path.extname(file)), {
          render: (tokens, idx) => {
            const token = tokens[idx];
            const attr = md.renderer.renderAttrs(token);
            return token.nesting === 1
              ? `<${path.basename(file, path.extname(file))} ${attr}>\n`
              : `</${path.basename(file, path.extname(file))}>\n`;
          },
        });
      });
    }
  };

export default {
  quick_global_register_plugin,
  md_container_plugin,
};
