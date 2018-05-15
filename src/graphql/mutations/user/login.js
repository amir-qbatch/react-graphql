import gql from "graphql-tag";

const USER_LOGIN = gql`
  mutation loginUser($token: String!, $email: String!, $password: String!) {
    loginUser(email: $email, password: $password, token: $token) {
      status
      msg
      user {
        email
        userName
      }
    }
  }
`;

export default USER_LOGIN;