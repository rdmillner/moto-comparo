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
    query {
      allNodeMotorcycle(
        sort: {
          fields: [field_year, title],
          order: DESC
        }
      )
       {
        edges {
          node {
            ...TeaserFragment
          }
        }
      }
    }
  `)
  return (
    <div className="flexRow">
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
    </div>
  )
}
