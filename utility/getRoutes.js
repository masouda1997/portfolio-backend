function getRoutes(app) {
	const routes = [];
	// Iterate through the app's stack to find routers
	app._router.stack.forEach((middleware) => {
		if (middleware.route) {
			// Directly registered routes
			const path = middleware.route.path;
			const methods = Object.keys(middleware.route.methods).map((method) =>
				method.toUpperCase()
			);
			routes.push({ path, methods });
		} else if (middleware.name === "router" && middleware.handle.stack) {
			// Handle routes registered through routers
			const routerPath = middleware.regexp.source
				.replace("^\\", "") // Remove leading ^\
				.replace("\\/?(?=\\/|$)", "") // Remove trailing routing-specific regex
				.replace(/\\\//g, "/"); // Replace escaped slashes
			middleware.handle.stack.forEach((handler) => {
				if (handler.route) {
					const path = handler.route.path;
					const methods = Object.keys(handler.route.methods).map(
						(method) => method.toUpperCase()
					);
					routes.push({ path: routerPath + path, methods });
				}
			});
		}
	});
	return routes;
}

module.exports = {getRoutes}