const express = require("express");
const cors = require("cors");
const commentRoute = require("./routes/commentsRouter.js");
const educationRoute = require("./routes/educationsRouter.js");
const authorRouter = require("./routes/authorRoutes.js");
const projectsRouter = require("./routes/projectRoutes.js");
const getRoutes = require("./utility/getRoutes.js")
const printTree = require("./utility/printTree.js")

require("dotenv").config();

const app = express();

const corsOptions = {
	origin: `${process.env.HOST}:${process.env.CORS_PORT}`,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

};

console.log(process.env.HOST);
console.log(process.env.CORS_PORT);

//middle wares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/comments", commentRoute);
app.use("/api/education", educationRoute);
app.use("/api/author", authorRouter);
app.use("/api/projects" , projectsRouter )
// Route to display all routes in a tree format with links
app.get("/", (req, res) => {
	// Get all routes including those under /api prefixes
	const routes = getRoutes.getRoutes(app)
	// Generate the tree string with links
	const treeString = printTree.printTree(routes);
	// Send as preformatted HTML text
	res.send(`<pre>${treeString}</pre>`);
});

// port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
	console.log("server is running on port " + PORT);
});
