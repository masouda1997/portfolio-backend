const express = require("express");
const cors = require("cors");
const commentRoute = require("./routes/commentsRouter.js");
const educationRoute = require("./routes/educationsRouter.js");
const authorRouter = require("./routes/authorRoutes.js");

require("dotenv").config();

const app = express();

const corOptions = {
	origin: `http://localhost:${process.env.PORT}`,
};

//middle wares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/comments", commentRoute);
app.use("/api/education", educationRoute);
app.use("/api/author", authorRouter);

function getRoutes(app) {
   const routes = [];

   // Iterate through the app's stack to find routers
   app._router.stack.forEach((middleware) => {
       if (middleware.route) {
           // Directly registered routes
           const path = middleware.route.path;
           const methods = Object.keys(middleware.route.methods).map(method => method.toUpperCase());
           routes.push({ path, methods });
       } else if (middleware.name === 'router' && middleware.handle.stack) {
           // Handle routes registered through routers
           const routerPath = middleware.regexp.source
               .replace('^\\', '')  // Remove leading ^\
               .replace('\\/?(?=\\/|$)', '') // Remove trailing routing-specific regex
               .replace(/\\\//g, '/'); // Replace escaped slashes

           middleware.handle.stack.forEach((handler) => {
               if (handler.route) {
                   const path = handler.route.path;
                   const methods = Object.keys(handler.route.methods).map(method => method.toUpperCase());
                   routes.push({ path: routerPath + path, methods });
               }
           });
       }
   });
   return routes;
}

// Helper function to print routes in a tree format with links
function printTree(routes) {
   // Root node
   const root = { name: '/api', children: [] };

   // Build the tree structure
   routes.forEach(route => {
       const segments = route.path.split('/').filter(Boolean);
       let currentLevel = root;

       segments.forEach((segment, index) => {
           let node = currentLevel.children.find(node => node.name === segment);
           if (!node) {
               node = { name: segment, children: [] };
               currentLevel.children.push(node);
           }
           if (index === segments.length - 1) {
               node.methods = route.methods;
               node.fullPath = route.path; // Store full path for link generation
           }
           currentLevel = node;
       });
   });

   // Function to generate a string representation of the tree with links
   function generateTreeString(node, depth = 0) {
       const indentation = '  '.repeat(depth);
       let result = `${indentation}- `;
       
       if (node.fullPath) {
           // Create a link to the full path
           result += `<a href="${node.fullPath}">${node.name}</a>`;
           if (node.methods) {
               result += ` (${node.methods.join(', ')})`;
           }
       } else {
           result += `${node.name}`;
       }

       result += '\n';

       for (const child of node.children) {
           result += generateTreeString(child, depth + 1);
       }
       return result;
   }

   return generateTreeString(root);
}

// Route to display all routes in a tree format with links
app.get('/', (req, res) => {
   // Get all routes including those under /api prefixes
   const routes = getRoutes(app);

   // Generate the tree string with links
   const treeString = printTree(routes);

   // Send as preformatted HTML text
   res.send(`<pre>${treeString}</pre>`);
});

// port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
	console.log("server is running on port " + PORT);
});
