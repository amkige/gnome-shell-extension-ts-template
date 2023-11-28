import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy"

export default {
	input: "src/extension.ts",
	output: {
		dir: "out/dist",
		format: "es",
		preserveModules: true,
		preserveModulesRoot: "src",
		entryFileNames: (chunkInfo) => {
			if (chunkInfo.name.includes("node_modules")) {
				const path = chunkInfo.name.replace(/node_modules.+node_modules\//, "")
				return `modules/${path}.js`
			}

			return "[name].js"
		},
	},
	plugins: [
		typescript(),
		copy({
			targets: [
				{
					src: ["src/**/*", "!src/**/*.ts"],
					dest: "out/dist",
					expandDirectories: true,
					onlyFiles: true,
				},
			],
			flatten: false,
		}),
		resolve({
			resolveOnly: (module) => !["gi:", "resource:"].includes(module),
		}),
	],
}
