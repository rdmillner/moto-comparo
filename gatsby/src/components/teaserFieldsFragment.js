import { graphql } from "gatsby"

export const query = graphql`
  fragment TeaserFields on node__motorcycle {
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
        id
        name
      }
      field_manufacturer {
        id
        name
      }
      field_engine_type {
        id
        name
      }
      field_images {
        localFile {
          childrenImageSharp {
            id
            gatsbyImageData(height: 100, formats: [AUTO, WEBP, AVIF ], placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`
