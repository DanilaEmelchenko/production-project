import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (!rule || typeof rule != "object" || Array.isArray(rule)) return rule;
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  if (
    config.resolve?.modules &&
    config.resolve.extensions &&
    config.module?.rules
  ) {
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push(buildCssLoader(true));
  }

  return config;
};
