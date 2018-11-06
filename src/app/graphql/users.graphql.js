import gql from "graphql-tag";

const GET_ALL_USERS_QUERY = gql`
query AllUsersQuery {
    getAllUsers {
      id,
      username,
      email,
    }
  }
`;

const CREATE_USER_MUTATION = gql `
mutation CreateUser($email: String!, $username: String!, $password: String!) {
    createUser(
        email: $email,
        username: $username,
        password: $password
    ){
        id,
        email,
        username
    }

}
`;

export {
    GET_ALL_USERS_QUERY,
    CREATE_USER_MUTATION
};