import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        primary: { value: "{colors.green.focusRing}" },
      },
    },
  },
})


export default createSystem(defaultConfig, config)