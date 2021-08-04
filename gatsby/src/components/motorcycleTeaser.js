import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  container,
  motorcyclename,
  list,
} from "../styles/motorcycleTeaser.module.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query TeaserQuery {
      allNodeMotorcycle(
        sort: {
          fields: [field_year, title],
          order: DESC
        }
      )
       {
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
                    gatsbyImageData(height: 100, formats: [AVIF, WEBP, AUTO], placeholder: TRACED_SVG)
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
        <Link to={node.path.alias} className={container} key={node.id}>
          <h3 className={motorcyclename}>{node.title}</h3>
          <GatsbyImage image={getImage(node.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt="node.field_images.alt" />
          <ul className={list}>
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
