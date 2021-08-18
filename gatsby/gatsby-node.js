const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
 const { createPage } = actions;

 return graphql(`
   {
    motorcycleData: allNodeMotorcycle {
      edges {
        node {
          title
          id
          path {
            alias
          }
        }
      }
    }
    manufacturerData: allTaxonomyTermManufacturer {
      edges {
        node {
          id
          name
        }
      }
    }
}
 `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.motorcycleData.edges.forEach(({ node }) => {
			createPage({
				path: node.path.alias,
				component: path.resolve(`src/templates/motorcycle.js`),
        context: {
          MotorcycleId: node.id,
        },
			});
		});
		// Create blog pages
		result.data.manufacturerData.edges.forEach(({ node }) => {
			createPage({
				path: node.name.toLowerCase(),
				component: path.resolve(`src/templates/manufacturer.js`),
        context: {
          ManufacturerId: node.id,
          ManufacturerName: node.name,
        },
			});
		});
	});
};
