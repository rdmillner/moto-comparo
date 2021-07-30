import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import Layout from '../components/layout'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="Home">
      <p><strong>{data.allNodeMotorcycle.totalCount}</strong> motorcycles in the database.</p>
      <p>All motorcycles:</p>
      <div>
        {data.allNodeMotorcycle.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.title}</h3>
            <GatsbyImage image={getImage(node.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt="node.field_images.alt" />
            <p><strong>Displacement: </strong>{Math.trunc(node.field_displacement.number)}{node.field_displacement.unit}</p>
            <p><strong>Weight: </strong>{Math.trunc(node.field_weight.number)}{node.field_weight.unit} ({node.field_weight_type})</p>
            <p><strong>ABS: </strong>{node.field_abs}</p>
            <p><strong>Category: </strong>{JSON.parse(JSON.stringify(node.relationships.field_category['0'].name))}</p>
            {/* console.log(JSON.parse(JSON.stringify(node.relationships.field_images['0'].localFile))) */}
            {/* console.log(getImage(node.relationships.field_images['0'].localFile.childrenImageSharp['0']))  */}
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeMotorcycle(sort: {fields: [field_year, title], order: ASC}) {
      totalCount
      edges {
        node {
          title
          id
          path {
            alias
          }
          field_year
          field_weight_type
          field_weight {
            number
            unit
          }
          field_displacement {
            number
            unit
          }
          field_abs
          field_seat_height {
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
                  gatsbyImageData(width: 200, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
