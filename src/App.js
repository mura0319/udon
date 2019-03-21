import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client'
import { UDON } from './graphql'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello, GraphQL </div>
        
        <Query query={UDON}>
          {
            ({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`

              return <div>{data.title}</div>
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
