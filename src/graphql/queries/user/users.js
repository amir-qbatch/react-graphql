import gql from "graphql-tag";

const getUsers = gql`
  {
    getUsers {
      name
      age
    }
  }
`;

export default getUsers;