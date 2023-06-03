const path = require("path");
const prod = process.env.NODE_ENV === "production";

module.exports = {
	entry: "./assets/js/index.js",
	mode: prod ? "production" : "development",

	output: {
		path: path.resolve(__dirname, "assets/built"),
		filename: "darkfox.js",
		assetModuleFilename: "[hash][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.(otf|woff2|woff)/,
				type: "asset/resource",
			},
			{
				test: /\.png/,
				type: "asset/resource",
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
