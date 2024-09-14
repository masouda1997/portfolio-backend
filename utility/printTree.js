// Helper function to print routes in a tree format with links
function printTree(routes) {
	// Root node
	const root = { name: "/api", children: [] };

	// Build the tree structure
	routes.forEach((route) => {
		const segments = route.path.split("/").filter(Boolean);
      
		let currentLevel = root;

		segments.forEach((segment, index) => {
			let node = currentLevel.children.find((node) => node.name === segment);
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
		const indentation = "  ".repeat(depth);
		let result = `${indentation}- `;

		if (node.fullPath) {
			// Create a link to the full path
			result += `<a href="${node.fullPath}">${node.name}</a>`;
			if (node.methods) {
				result += ` (${node.methods.join(", ")})`;
			}
		} else {
			result += `${node.name}`;
		}

		result += "\n";

		for (const child of node.children) {
			result += generateTreeString(child, depth + 1);
		}
		return result;
	}

	return generateTreeString(root);
}


module.exports = {printTree}