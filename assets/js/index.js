require("../css/index.scss");
require("typeface-source-sans-pro");
const hljs = require("highlight.js");
require("highlight.js/styles/atom-one-dark.css");

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(
		"#copyright"
	).innerHTML = `Copyright ${new Date().getFullYear()}`;

	document.querySelectorAll("pre code").forEach((el) => {
		console.log(el);
		hljs.highlightElement(el);
	});
});
