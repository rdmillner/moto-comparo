import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const MakesPage = ({ data }) => {

  return (
    <Layout pageTitle="Categories">
      <div className="flexRow spacearound">
        {data.allTaxonomyTermCategory.edges.map(({ node }) => (
          <Link to={"/" + node.name.toLowerCase()} key={node.id}>
            {node.name}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allTaxonomyTermCategory {
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
