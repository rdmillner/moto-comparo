import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Teaser from "../components/teaserFields"

const Manufacturer = ({ data }) => {
 const term = data.taxonomyTermManufacturer;
 const motorcycles = data.taxonomyTermManufacturer.relationships.node__motorcycle;
 return (
   <Layout pageTitle={term.name}>
     <Teaser motorcycles={motorcycles} />
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
         ...TeaserFields
       }
     }
   }
 }
`;

export default Manufacturer;
