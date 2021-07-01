import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

//import Layout from '../components/layout';

const Motorcycle = ({ data }) => {
 const post = data.nodeMotorcycle;

 return (
//   <Layout>
     <h1>{post.title}</h1>
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
   }
 }
`;

export default Motorcycle;
