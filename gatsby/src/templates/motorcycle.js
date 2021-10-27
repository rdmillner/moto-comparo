import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Motorcycle = ({ data }) => {
 const post = data.nodeMotorcycle;

 return (
   <Layout pageTitle={post.title}>
    <nav aria-label="breadcrumb">
      <Link to={"/" + post.relationships.field_manufacturer.name.toLowerCase()} title={"See all "+ post.relationships.field_manufacturer.name + " motorcycles"}>
        Return to {post.relationships.field_manufacturer.name}'s manufacturer page.
      </Link>
    </nav>
     <GatsbyImage image={getImage(post.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt={post.field_images['0'].alt} />
     <ul className="plainList">
       <li><strong>Displacement: </strong>{Math.trunc(post.field_displacement.number)}{post.field_displacement.unit}</li>
       <li><strong>Weight: </strong>{Math.trunc(post.field_weight.number)}{post.field_weight.unit} ({post.field_weight_type})</li>
       <li><strong>ABS: </strong>{post.field_abs}</li>
       <li><strong>Category: </strong>{JSON.parse(JSON.stringify(post.relationships.field_category['0'].name))}</li>
       <li><strong>Engine Cooling: </strong>{post.field_engine_cooling}</li>
       <li><strong>Final Drive: </strong>{post.field_final_drive}</li>
       <li><strong>Fuel Capacity: </strong>{
         !post.field_wheelbase ? "" : Math.trunc(post.field_fuel_capacity.number) + post.field_fuel_capacity.unit}</li>
       <li><strong># of Gears: </strong>{post.field_gears}</li>
       <li><strong>Wheelbase: </strong>{
         !post.field_wheelbase ? "" : Math.trunc(post.field_wheelbase.number) + post.field_wheelbase.unit}</li>
       <li><strong>Engine Type: </strong>{post.relationships.field_engine_type.name}</li>
     </ul>
   </Layout>
 );
};

export const query = graphql`
 query($MotorcycleId: String!) {
   nodeMotorcycle(id: { eq: $MotorcycleId }) {
     ...TeaserFields
     ...NonTeaserFields
   }
 }
`;

export default Motorcycle;
