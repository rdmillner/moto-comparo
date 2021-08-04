const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
 const { createPage } = actions;

 const motorcyclePages = await graphql(`
   {
     allNodeMotorcycle {
       nodes {
         id
         title
         path {
           alias
         }
       }
     }
   }
 `);

 motorcyclePages.data.allNodeMotorcycle.nodes.map(motorcycleData =>
   createPage({
     path: motorcycleData.path.alias,
     component: path.resolve(`src/templates/motorcycle.js`),
     context: {
       MotorcycleId: motorcycleData.id,
     },
   })
 );
}
