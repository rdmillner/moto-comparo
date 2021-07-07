import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

//import Layout from '../components/layout';

const Motorcycle = ({ data }) => {
 const post = data.nodeMotorcycle;

 return (
//   <Layout>
     <h1>{post.title}</h1>
     //{post.field_weight_type}
//   </Layout>
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
   }
 }
`;

export default Motorcycle;
