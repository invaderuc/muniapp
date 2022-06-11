import {gql} from '@apollo/client';

export const CHARACTER_QUERY = gql`
  mutation list($sort: String!,$order: String!,$page: Int!) {
    list( input: { sort: $sort,order: $order,page: $page }){
        id
        title
      }
  }
`;
