import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Teaser from "../components/teaserFields"

const Category = ({ data }) => {
 const term = data.taxonomyTermCategory;
 const motorcycles = data.taxonomyTermCategory.relationships.node__motorcycle;

 return (
   <Layout pageTitle={term.name}>
    <Teaser motorcycles={motorcycles} />
   </Layout>
 );
};

export const query = graphql`
 query($CategoryId: String!) {
   taxonomyTermCategory(id: { eq: $CategoryId }) {
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

export default Category;
