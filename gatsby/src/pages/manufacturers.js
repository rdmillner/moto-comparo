import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const MakesPage = ({ data }) => {

  return (
    <Layout pageTitle="Manufacturers">
      <div class="flexRow spacearound">
        {data.allTaxonomyTermManufacturer.edges.map(({ node }) => (
          <Link href={node.name.toLowerCase()}>
            {node.name}
          </Link>
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
