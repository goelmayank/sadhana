import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { PostTile, Button, Loading } from '../../components';

export const POST_TILE_DATA = gql`
          fragment PostTile on Post {
            userId
            id
            title
            body
            image
          }
       `;

export const GET_POSTS = gql`
  query GetPostList($after: String) {
    posts(after: $after) {
      cursor
      hasMore
      posts {
        ...PostTile
      }
    }
  }
  ${POST_TILE_DATA}
`;

const Posts = () => {
  const { 
    data, 
    loading, 
    error, 
    fetchMore 
  } = useQuery(GET_POSTS,{variables:{after:"10"}});

  if (loading) return <Loading />;
  if (error || !data) return <p>ERROR</p>;

  return (
    <Fragment>
      
      {data.posts &&
        data.posts.posts &&
        data.posts.posts.map((post) => (
          <PostTile key={post.id} post={post} />
        ))}
      {data.posts &&
        data.posts.hasMore && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.posts.cursor,
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...fetchMoreResult,
                    posts: {
                      ...fetchMoreResult.posts,
                      posts: [
                        ...prev.posts.posts,
                        ...fetchMoreResult.posts.posts,
                      ],
                    },
                  };
                },
              })
            }
          >
            Load More
          </Button>
        )}
    </Fragment>
  );
}

export default Posts;
