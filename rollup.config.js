// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
//import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";
//import { nodeResolve } from "@rollup/plugin-node-resolve";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
    },
    {
      dir: "lib/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [styles({}), typescript({ useTsconfigDeclarationDir: true })],
};
