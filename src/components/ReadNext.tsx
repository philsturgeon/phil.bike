import React from 'react';

import styled from '@emotion/styled';

import { inner, outer } from '../styles/shared';
import { PageContext } from '../templates/post';
import { PostCard } from './PostCard';
import { ReadNextCard } from './ReadNextCard';

interface ReadNextProps {
  tags: string[];
  relatedPosts: {
    totalCount: number;
    edges: Array<{
      node: {
        timeToRead: number;
        frontmatter: {
          date: string;
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }>;
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}

export const ReadNext: React.FC<ReadNextProps> = props => {
  const showRelatedPosts = props.relatedPosts.totalCount > 1;

  return (
    <aside className="read-next" css={outer}>
      <div css={inner}>
        <ReadNextFeed>
          {showRelatedPosts && (
            <ReadNextCard tags={props.tags} relatedPosts={props.relatedPosts} />
          )}
          {props.pageContext.prev && <PostCard post={props.pageContext.prev} />}
          {props.pageContext.next && <PostCard post={props.pageContext.next} />}
        </ReadNextFeed>
      </div>
    </aside>
  );
};

const ReadNextFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  .post-card {
    flex: 1 1 300px;
  }
`;
