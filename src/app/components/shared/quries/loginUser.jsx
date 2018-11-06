import { LOGIN_USER } from '../../../graphql/users.graphql';
import client from '../../../graphql/apollo.config';

async function loginUser(email,password) {
    const {data} = await client.query({
      query: LOGIN_USER,
      variables: { email,password }
    });
    return data;
  }


export default loginUser;