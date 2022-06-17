import walk from "../lib/walk";

walk("../../src").then(({ files }) => {
	console.log(files.filter((f) => f.endsWith(".ts")));
});
