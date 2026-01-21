import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		semanticTokens: {
			colors: {
				primary: { value: {base: '{colors.teal.solid}', _dark: '{colors.teal.focusRing}'} },
			},
		},
		tokens: {
			fonts: {
				body: {
					value: `"Lexend Variable", system-ui, -apple-system, "Segoe UI", sans-serif`,
				},
				heading: {
					value: `"Lexend Variable", system-ui, -apple-system, "Segoe UI", sans-serif`,
				},
				mono: {
					value: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
				},
			},
		},
	},
	globalCss: {
		html: { fontFamily: 'body' },
	},
});

export default createSystem(defaultConfig, config);
