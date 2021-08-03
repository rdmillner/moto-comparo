import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../styles/motorcycleTeaser.module.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query TeaserQuery {
      allNodeMotorcycle {
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
                    gatsbyImageData(width: 300, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allNodeMotorcycle.edges.map(({ node }) => (
        <Link to={node.path.alias} class="teaser" key={node.id}>
          <h3>{node.title}</h3>
          <GatsbyImage image={getImage(node.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt="node.field_images.alt" />
          <ul class="plainList">
            <li><strong>Displacement: </strong>{Math.trunc(node.field_displacement.number)}{node.field_displacement.unit}</li>
            <li><strong>Weight: </strong>{Math.trunc(node.field_weight.number)}{node.field_weight.unit} ({node.field_weight_type})</li>
            <li><strong>ABS: </strong>{node.field_abs}</li>
            <li><strong>Category: </strong>{JSON.parse(JSON.stringify(node.relationships.field_category['0'].name))}</li>
          </ul>
        </Link>
      ))}
    </>
  )
}
