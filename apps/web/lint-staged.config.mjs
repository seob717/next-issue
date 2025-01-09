export default {
    ...import("../../lint-staged.config.mjs"),
    // Type check TypeScript files
    "**/*.(ts|tsx)": function () {
        return "turbo run check-types";
    },
    // Lint then format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": (filenames) => [
        `pnpm eslint --fix ${filenames.join(" ")}`,
        `pnpm prettier --write ${filenames.join(" ")}`,
    ],
};