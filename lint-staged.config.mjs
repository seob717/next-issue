export default {
    // Format MarkDown and JSON
    "**/*.(md|json)": function (filenames) {
        return "pnpm prettier --write " + filenames.join(" ");
    },
};