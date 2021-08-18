import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Motorcycle = ({ data }) => {
 const post = data.nodeMotorcycle;

 return (
   <Layout pageTitle={post.title}>
     <GatsbyImage image={getImage(post.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt="post.field_images.alt" />
     <ul>
       <li><strong>Displacement: </strong>{Math.trunc(post.field_displacement.number)}{post.field_displacement.unit}</li>
       <li><strong>Weight: </strong>{Math.trunc(post.field_weight.number)}{post.field_weight.unit} ({post.field_weight_type})</li>
       <li><strong>ABS: </strong>{post.field_abs}</li>
       <li><strong>Category: </strong>{JSON.parse(JSON.stringify(post.relationships.field_category['0'].name))}</li>
     </ul>
   </Layout>
 );
};

export const query = graphql`
 query($MotorcycleId: String!) {
   nodeMotorcycle(id: { eq: $MotorcycleId }) {
     ...TeaserFragment
   }
 }
`;

export default Motorcycle;
