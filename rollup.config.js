import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
//import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "lib",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "../",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    styles(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
