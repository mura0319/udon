import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = "https://api-apeast.graphcms.com/v1/cjsw130fibko101bs7pse2dzm/master"

export default new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})