import { defineConfig } from "vite";
import preactRefresh from "@prefresh/vite";

export default defineConfig({
    base: "./",
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: "import { h, Fragment } from 'preact'",
    },
    plugins: [preactRefresh()],
});
