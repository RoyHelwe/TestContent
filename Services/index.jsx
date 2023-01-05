import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
  query Posts {
    posts {
      content {
        raw
      }
    }
  }  
    `
  const result = await request(graphqlAPI, query)
  return result.posts
}