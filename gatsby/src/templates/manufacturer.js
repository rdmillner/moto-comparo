import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  container,
  motorcyclename,
  list,
} from "../styles/allMotorcycleTeasers.module.scss"

import Layout from "../components/layout"

const Manufacturer = ({ data }) => {
 const term = data.taxonomyTermManufacturer;
 const motorcycles = data.taxonomyTermManufacturer.relationships.node__motorcycle;

 return (
   <Layout pageTitle={term.name}>
     <div className="flexRow">
       {motorcycles.map((motorcycle) =>
         <Link to={motorcycle.path.alias} className={container} key={motorcycle.id} title={motorcycle.title} title={'Learn more about the ' + motorcycle.title + '.'}>
           <h3 className={motorcyclename}>{motorcycle.title}</h3>
           <GatsbyImage image={getImage(motorcycle.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt={motorcycle.field_images['0'].alt} />
           {motorcycle.field_images.alt}
           <ul className={list}>
             <li><span>Displacement: </span>{Math.trunc(motorcycle.field_displacement.number)}{motorcycle.field_displacement.unit}</li>
             <li><span>Weight: </span>{Math.trunc(motorcycle.field_weight.number)}{motorcycle.field_weight.unit} ({motorcycle.field_weight_type})</li>
             <li><span>Seat Height: </span>{Math.trunc(motorcycle.field_seat_height.number)}{motorcycle.field_seat_height.unit}</li>
             <li><span>ABS: </span>{motorcycle.field_abs}</li>
             <li><span>Category: </span>{JSON.parse(JSON.stringify(motorcycle.relationships.field_category['0'].name))}</li>
             <li><span>Engine: </span>{JSON.parse(JSON.stringify(motorcycle.relationships.field_engine_type.name))}</li>
           </ul>
         </Link>
       )}
     </div>
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
         ...TeaserFragment
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
