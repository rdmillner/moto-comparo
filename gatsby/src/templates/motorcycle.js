import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Motorcycle = ({ data }) => {
 const post = data.nodeMotorcycle;

 return (
   <Layout pageTitle={post.title}>
     <GatsbyImage image={getImage(post.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt="post.field_images.alt" />
     <ul className="plainList">
       <li><strong>Weight: </strong>{Math.trunc(post.field_weight.number)}{post.field_weight.unit} ({post.field_weight_type})</li>
     </ul>
   </Layout>
 );
};

Motorcycle.propTypes = {
 data: PropTypes.object.isRequired,
};

export const query = graphql`
 query($MotorcycleId: String!) {
   nodeMotorcycle(id: { eq: $MotorcycleId }) {
     id
     title
     field_year
     field_weight_type
     field_weight {
       number
       unit
     }
     field_images {
       alt
     }
     relationships {
       field_category {
         name
       }
       field_images {
         localFile {
           childrenImageSharp {
             id
             gatsbyImageData(width: 300, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG)
           }
         }
       }
     }
   }
 }
`;

export default Motorcycle;
