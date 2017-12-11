import gql from 'graphql-tag'

export const POST_QUERY = gql`
  query Post($slug: String!) {
    Post(slug: $slug) {
      id
      title
      content
      coverImage {
        url
        id
        width
        height
        createdAt
      }
    }
  }
`
