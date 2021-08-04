import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const MakesPage = ({ data }) => {

  return (
    <Layout pageTitle="Manufacturers">
      <div class="flexRow">
        {data.allTaxonomyTermManufacturer.edges.map(({ node }) => (
          <div key={node.id}>
            {node.name}
          </div>
        ))}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allTaxonomyTermManufacturer {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default MakesPage
