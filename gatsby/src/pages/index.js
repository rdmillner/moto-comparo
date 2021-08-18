import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AllMotorcycleTeasers from "../components/allMotorcycleTeasers"

const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="Home">
      <p>There are <strong>{data.allNodeMotorcycle.totalCount}</strong> motorcycles in the database.</p>
      <AllMotorcycleTeasers />
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeMotorcycle {
      totalCount
    }
  }
`

export default IndexPage
