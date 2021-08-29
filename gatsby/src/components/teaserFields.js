import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  container,
  motorcyclename,
  list,
  teaserImage
} from "../styles/teaser.module.scss"

export default class Teaser extends React.Component {
  render() {
    return (
      <>
      <div>
      {this.props.motorcycles.map((motorcycle) =>
        <Link to={motorcycle.path.alias} className={container} key={motorcycle.id} title={'Learn more about the ' + motorcycle.title + '.'}>
          <h3 className={motorcyclename}>{motorcycle.title}</h3>
          <GatsbyImage image={getImage(motorcycle.relationships.field_images['0'].localFile.childrenImageSharp['0'])} alt={motorcycle.field_images['0'].alt} className={teaserImage} />
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
      </>
    );
  }
}
