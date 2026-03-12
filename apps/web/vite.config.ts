import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";

const preset = process.env.VERCEL ? "vercel" : "node-server";

export default defineConfig({
  plugins: [
    solidStart({
      server: {
        preset,
      },
    }),
    nitro(),
  ],
});
