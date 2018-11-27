import { LOGIN_USER } from '../users.graphql';
import client from '../apollo.config';

async function loginUser(email,password) {
    const {data} = await client.query({
      query: LOGIN_USER,
      variables: { email,password }
    });
    return data;
  }


export default loginUser;