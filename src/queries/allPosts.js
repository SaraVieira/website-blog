import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query AllPosts {
    allPosts {
      id
      title
      intro
      slug
      coverImage {
        url
        id
      }
    }
  }
`
