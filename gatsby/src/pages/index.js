import React from 'react'
import { graphql, Link } from 'gatsby'

const MotorcyclePage = ({data}) => {
  return (
      data.allNodeMotorcycle.edges.map((edge) =>
        <div key={edge.node.id}>
          <div className='teaser wrapper'>
            <h2>{edge.node.title}</h2>
              <p>Weight:
                {(JSON.parse(JSON.stringify(edge.node.field_weight.number)))}
                {JSON.parse(JSON.stringify(edge.node.field_weight.unit))}
                ({JSON.parse(JSON.stringify(edge.node.field_weight_type))})
              </p>
              <Link to="https://google.com">Learn more...</Link>
            </div>
        </div>
      )
  )
}

export const query = graphql`
  query MotorcyclePage {
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
        }
      }
      totalCount
    }
  }
`
export default MotorcyclePage
