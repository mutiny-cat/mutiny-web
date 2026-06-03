import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://mutiny.cat",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
      include: {
        "simple-icons": ["creativecommons"],
        heroicons: ["bars-3"],
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
