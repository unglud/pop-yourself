import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: ["src/content.ts", "src/background.ts"],
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: "inline",
  },
  watch: { clearScreen: true },
  plugins: [
    copy({
      copyOnce: true,
      targets: [
        { src: "public/manifest.json", dest: "dist" },
        { src: "public/options.html", dest: "dist" },
        { src: "public/popup.html", dest: "dist" },
        { src: "public/icon*", dest: "dist" },
        { src: "src/popper.ts", dest: "dist/src" },
        { src: "src/content.ts", dest: "dist/src" },
      ],
    }),
    sass({ insert: true }),
    typescript({
      include: ["./src/content.ts", "./src/popper.ts", "src/background.ts"],
    }),
  ],
};

export default config;
