import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MotorcycleTeaser from "../components/motorcycleTeaser"

const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="Home">
      <p><strong>{data.allNodeMotorcycle.totalCount}</strong> motorcycles in the database.</p>
      <p>All motorcycles:</p>
      <div class="flexRow">
        <MotorcycleTeaser />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeMotorcycle(sort: {fields: [field_year, title], order: ASC}) {
      totalCount
    }
  }
`

export default IndexPage
