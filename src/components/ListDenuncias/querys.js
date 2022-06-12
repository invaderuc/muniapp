import {gql} from '@apollo/client';

export const CHARACTER_QUERY_LIST_PAGINATOR = gql`
  query listPaginator($sort: String!,$order: String!,$page: Int!){
    listPaginator(sort: $sort,order: $order,page: $page){
      id
      title
      description
      status
      images
      altitude
      latitude
      longitude
    }
  }
`;

export const CHARACTER_MUTATION_LIST = gql`
  mutation list($sort: String!,$order: String!,$page: Int!) {
    list( input: { sort: $sort,order: $order,page: $page }){
        id
        title
      }
  }
`;
