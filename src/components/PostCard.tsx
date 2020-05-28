import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { format } from 'date-fns';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';
import { MetaContent } from '../components/MetaContent';

export interface PostCardProps {
  post: PageContext;
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({ post, large = false }) => {
  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 Aug 2018
  const displayDatetime = format(date, 'dd LLL yyyy');

  return (
    <article
      className={`post-card ${post.frontmatter.image ? '' : 'no-image'}`}
      css={[PostCardStyles, large && PostCardLarge]}
    >
      {post.frontmatter.image && (
        <Link className="post-card-image-link" css={PostCardImageLink} to={post.fields.slug}>
          <PostCardImage className="post-card-image">
            {post.frontmatter.image &&
              post.frontmatter.image.childImageSharp &&
              post.frontmatter.image.childImageSharp.fluid && (
              <Img
                alt={`${post.frontmatter.title} cover image`}
                style={{ height: '100%' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </Link>
      )}
      <PostCardContent className="post-card-content">
        <Link className="post-card-content-link" css={PostCardContentLink} to={post.fields.slug}>
          <header className="post-card-header">
            <PostCardTitle>{post.frontmatter.title}</PostCardTitle>
          </header>
          <p>{post.excerpt}</p>
        </Link>
        <PostCardMeta className="post-card-meta">
          <MetaContent
            datetime={datetime}
            displayDatetime={displayDatetime}
            // on home page we only want to show first tag
            tags={post.frontmatter.tags && post.frontmatter.tags.length > 0? post.frontmatter.tags.slice(0,1): []}
            timeToRead={post.timeToRead}
          />
        </PostCardMeta>
      </PostCardContent>
    </article>
  );
};

const PostCardStyles = css`
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  // transition: all 0.5s ease;
  // :hover {
  //   box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
  //   transition: all 0.4s ease;
  //   transform: translate3D(0, -1px, 0) scale(1.02);
  // }
`;

const PostCardLarge = css`
  border-bottom: none;
  margin: 0 20px 0px;

  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 501px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCardContentLink = css`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: ${colors.darkgrey};
  :hover {
    text-decoration: none;
  }
`;

const PostCardTitle = styled.h2`
  margin-top: 0;
`;

const PostCardMeta = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px 25px;
`;