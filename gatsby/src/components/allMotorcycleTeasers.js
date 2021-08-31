import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  container,
  motorcyclename,
  list,
  teaserImage
} from "../styles/teaser.module.scss"

export default function Teaser() {

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
            ...TeaserFields
          }
        }
      }
    }
  `)

  return (
    <div className="flexRow">
      {data.allNodeMotorcycle.edges.map(({ node }) => (
        <Link to={node.path.alias} className={container} key={node.id} title={'Learn more about the ' + node.title + '.'}>
          <h3 className={motorcyclename}>{node.title}</h3>
          <GatsbyImage image={getImage(node.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt={node.field_images['0'].alt} className={teaserImage} />
          {node.field_images.alt}
          <ul className={list}>
            <li><span>Displacement: </span>{Math.trunc(node.field_displacement.number)}{node.field_displacement.unit}</li>
            <li><span>Weight: </span>{Math.trunc(node.field_weight.number)}{node.field_weight.unit} ({node.field_weight_type})</li>
            <li><span>Seat Height: </span>{Math.trunc(node.field_seat_height.number)}{node.field_seat_height.unit}</li>
            <li><span>ABS: </span>{node.field_abs}</li>
            <li><span>Category: </span>{JSON.parse(JSON.stringify(node.relationships.field_category['0'].name))}</li>
            <li><span>Engine: </span>{JSON.parse(JSON.stringify(node.relationships.field_engine_type.name))}</li>
          </ul>
        </Link>
      ))}
    </div>
  )
}
