import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MotorcycleTeaser from "../components/motorcycleTeaser"

const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="Home">
      <p>There are <strong>{data.allNodeMotorcycle.totalCount}</strong> motorcycles in the database.</p>
      <MotorcycleTeaser />
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
