import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import MotorcycleTeaser from "../components/motorcycleTeaser"

const Manufacturer = ({ data }) => {
 const term = data.taxonomyTermManufacturer;
 const motorcycles = data.taxonomyTermManufacturer.relationships.node__motorcycle;

 return (
   <Layout pageTitle={term.name}>
   {motorcycles.map((motorcycle) =>
     <Link to={motorcycle.path.alias}>{motorcycle.title}</Link>
   )}
   </Layout>
 );
};

export const query = graphql`
 query($ManufacturerId: String!) {
   taxonomyTermManufacturer(id: { eq: $ManufacturerId }) {
     id
     name
     relationships {
       node__motorcycle {
         id
         title
         path {
           alias
         }
         relationships {
           field_manufacturer {
             id
             name
           }
         }
       }
     }
   }
 }
`;

export default Manufacturer;
