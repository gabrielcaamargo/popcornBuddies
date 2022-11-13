const express = require("express");

const app = express();
const { resolve } = require("path");


app.use("/", 
	express.static(
		resolve(
			__dirname,
			"./dist"
		)
	)
);

app.listen(process.env.PORT || 3000, error => error ? console.log(error) : console.log("All working"));