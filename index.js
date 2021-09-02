const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// For now storing data here
let mockData = [];

function listening() {
	console.log("backend working");
	console.log("Node server started at PORT: " + PORT);
}

app.get("/", (req, res) => {
	res.send(
		"Server is up and running and still needs work to receive request but can be done"
	);
});

app.get("/mocklink", (req, res) => {
	console.log(mockData);

	res.send(mockData);
});

app.put("/mocklink", (req, res) => {
	const data = req.body;
	// console.log(data);
	mockData = data;
	// console.log(mockData);
	res.send({ data: "ok" });
});

app.listen(PORT, listening);
