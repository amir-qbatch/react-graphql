import gql from "graphql-tag";

const getUsers = gql`
  query {
    getUsers {
      name
      age
      userName
      email
    }
  }
`;

export default getUsers;