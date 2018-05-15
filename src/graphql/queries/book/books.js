import gql from "graphql-tag";

const books = gql`
  {
    getBbooks {
      id
      title
      author
    }
  }
`;

export default books;
