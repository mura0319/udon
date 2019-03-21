import gql from 'graphql-tag'

export const UDON = gql`
    query {
        articles {
            title
            location
            id
        }
    }
`
