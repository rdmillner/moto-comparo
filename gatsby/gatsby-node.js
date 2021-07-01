const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
 const { createPage } = actions;

 const motorcycles = await graphql(`
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

 motorcycles.data.allNodeMotorcycle.nodes.map(motorcycleData =>
   createPage({
     path: motorcycleData.path.alias,
     component: path.resolve(`src/templates/motorcycle.js`),
     context: {
       MotorcycleId: motorcycleData.id,
     },
   })
 );
}
