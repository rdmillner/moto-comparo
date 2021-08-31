import { graphql } from "gatsby"

export const query = graphql`
  fragment NonTeaserFields on node__motorcycle {
    field_engine_cooling
    field_final_drive
    field_fuel_capacity {
      number
      unit
    }
    field_gears
    field_spec_sheet {
      description
      display
    }
    field_wheelbase {
      number
      unit
    }
    relationships {
      field_engine_type {
        name
        id
      }
    }
  }
`
