import ApolloClient from "apollo-boost";
import {enviroment} from '../../enviroments/enviroment'

const client = new ApolloClient({
  uri: enviroment.backendURL
});

export default client;