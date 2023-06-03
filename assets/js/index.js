require("../css/index.scss");
require("typeface-source-sans-pro");
const hljs = require("highlight.js");
require("highlight.js/styles/atom-one-dark.css");
import "photoswipe/style.css";
import PhotoSwipe from "photoswipe";

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(
		"#copyright"
	).innerHTML = `Copyright ${new Date().getFullYear()}`;

	document.querySelectorAll("pre code").forEach((el) => {
		console.log(el);
		hljs.highlightElement(el);
	});

	document.querySelectorAll(".kg-gallery-container").forEach((el) => {
		const items = [];

		el.querySelectorAll("img").forEach((img, index) => {
			items.push({
				srcset: img.srcset,
				src: img.src,
				width: img.getAttribute("width"),
				height: img.getAttribute("height"),
			});
			img.addEventListener("click", () => {
				const pswp = new PhotoSwipe({
					dataSource: items,
					index: index,
				});
				pswp.init();
			});
		});
	});
});
