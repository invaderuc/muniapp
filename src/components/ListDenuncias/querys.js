import {gql} from '@apollo/client';

export const CHARACTER_QUERY_LIST_PAGINATOR = gql`
  query listPaginator($sort: String!,$order: String!,$page: Int!){
    listPaginator(sort: $sort,order: $order,page: $page){
      id
      title
      description
      status
      image_public_id
      image_url
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

export const CHARACTER_MUTATION_CREATE = gql`
mutation create(
  $title: String!,
  $description: String!,
  $status:String!,
  $image_url:String!, 
  $image_public_id:String!,
  $altitude:Float!,
  $latitude:Float!,
  $longitude:Float!,
  $speed:Float!){
    create(
    title: $title,
    description: $description,
    status:$status,
    image_url:$image_url, 
    image_public_id:$image_public_id,
    altitude:$altitude,
    latitude:$latitude,
    longitude:$longitude,
    speed:$speed
    )
}
`;