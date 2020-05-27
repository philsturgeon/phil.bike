// import { format } from 'date-fns';
// import { Link } from 'gatsby';
// import Img from 'gatsby-image';
// import _ from 'lodash';
// import { lighten } from 'polished';
// import React from 'react';

// import { css } from '@emotion/core';
// import styled from '@emotion/styled';

// import { colors } from '../styles/colors';
// import { PageContext } from '../templates/post';
// import { MetaContent } from '../components/MetaContent';

// export interface PostCardProps {
//   post: PageContext;
//   large?: boolean;
// }

// export const PostCard: React.FC<PostCardProps> = ({ post, large = false }) => {
//   const date = new Date(post.frontmatter.date);
//   // 2018-08-20
//   const datetime = format(date, 'yyyy-MM-dd');
//   // 20 Aug 2018
//   const displayDatetime = format(date, 'dd LLL yyyy');

//   return (
//     <article
//       className={`post-card ${post.frontmatter.image ? '' : 'no-image'} ${
//         large ? 'post-card-large' : ''
//       }`}
//       css={[PostCardStyles, large && PostCardLarge]}
//     >
//       {post.frontmatter.image && large && (
//         <Link className="post-card-image-link" css={PostCardImageLink} to={post.fields.slug}>
//           <PostCardImage className="post-card-image">
//             {post.frontmatter?.image?.childImageSharp?.fluid && (
//               <Img
//                 alt={`${post.frontmatter.title} cover image`}
//                 style={{ height: '100%' }}
//                 fluid={post.frontmatter.image.childImageSharp.fluid}
//               />
//             )}
//           </PostCardImage>
//         </Link>
//       )}
//       <PostCardContent className="post-card-content">
//         <Link className="post-card-content-link" css={PostCardContentLink} to={post.fields.slug}>
//           <PostCardHeader className="post-card-header">
//             <PostCardTitle className="post-card-title">{post.frontmatter.title}</PostCardTitle>
//           </PostCardHeader>
//           <PostCardExcerpt className="post-card-excerpt">
//             <p>{post.frontmatter.excerpt || post.excerpt}</p>
//           </PostCardExcerpt>
//         </Link>
//         <PostCardMeta className="post-card-meta">
//           <MetaContent
//             datetime={datetime}
//             displayDatetime={displayDatetime}
//             // on home page we only want to show first tag
//             tags={post.frontmatter.tags && post.frontmatter.tags.length > 0? post.frontmatter.tags.slice(0,1): []}
//             timeToRead={post.timeToRead}
//           />
//         </PostCardMeta>
//       </PostCardContent>
//     </article>
//   );
// };

// const PostCardStyles = css`
//   position: relative;
//   flex: 1 1 501px;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   padding: 10px 20px 30px;
//   border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
//   background-size: cover;

//   &:last-of-type, &:nth-last-of-type(2) {
//     border-bottom: none;
//   }

//   p {
//     font-size: 1.8rem;
//   }

//   @media (prefers-color-scheme: dark) {
//     border-bottom-color: ${lighten('0.08', colors.darkmode)};
//   }
// `;

// const PostCardLarge = css`
//   border-bottom: none;
//   padding: 10px 20px 20px;

//   @media (min-width: 795px) {
//     flex: 1 1 100%;
//     flex-direction: row;
//     border-top: 0;

//     :not(.no-image) .post-card-header {
//       margin-top: 0;
//     }

//     .post-card-image-link {
//       position: relative;
//       flex: 1 1 auto;
//       margin-bottom: 0;
//     }

//     .post-card-image {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//     }

//     .post-card-content {
//       flex: 0 1 451px;
//       justify-content: center;
//     }

//     .post-card-title {
//       margin-top: 0;
//       font-size: 3.2rem;
//     }

//     .post-card-content-link {
//       padding: 0 0 0 40px;
//     }

//     .post-card-meta {
//       padding: 0 0 0 40px;
//     }

//     .post-card-excerpt p {
//       margin-bottom: 1.5em;
//       line-height: 1.5em;
//     }
//   }
// `;

// const PostCardImageLink = css`
//   position: relative;
//   display: block;
//   overflow: hidden;
//   border-radius: 2px;
// `;

// const PostCardImage = styled.div`
//   width: auto;
//   background: ${colors.lightgrey} no-repeat center center;
//   background-size: cover;
// `;

// const PostCardContent = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const PostCardContentLink = css`
//   position: relative;
//   display: block;
//   color: ${colors.darkgrey};

//   :hover {
//     text-decoration: none;
//   }
// `;

// const PostCardTitle = styled.h2`
//   margin: 0 0 0.4em;
//   line-height: 1.4em;
//   transition: color 0.2s ease-in-out;

//   @media (prefers-color-scheme: dark) {
//     color: rgba(255, 255, 255, 0.85);
//   }
// `;

// const PostCardExcerpt = styled.section`

//   @media (prefers-color-scheme: dark) {
//     color: ${lighten('0.1', colors.midgrey)} !important;
//   }
// `;

// const PostCardMeta = styled.footer`
//   display: flex;
//   align-items: flex-start;
//   // padding: 0;
// `;

// const PostCardHeader = styled.header`
//   margin: 15px 0 0;
// `;
  
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import { lighten } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { format } from 'date-fns';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';
import { MetaContent } from '../components/MetaContent';

const PostCardStyles = css`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
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

const PostCardTags = styled.span`
  display: block;
  margin-bottom: 4px;
  color: ${colors.midgrey};
  font-size: 1.2rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  margin-top: 0;
`;

const PostCardExcerpt = styled.section`
  font-family: Georgia, serif;
`;

const PostCardMeta = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px 25px;
`;

const AuthorList = styled.ul`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const AuthorListItem = styled.li`
  position: relative;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  :nth-of-type(1) {
    z-index: 10;
  }
  :nth-of-type(2) {
    z-index: 9;
  }
  :nth-of-type(3) {
    z-index: 8;
  }
  :nth-of-type(4) {
    z-index: 7;
  }
  :nth-of-type(5) {
    z-index: 6;
  }
  :nth-of-type(6) {
    z-index: 5;
  }
  :nth-of-type(7) {
    z-index: 4;
  }
  :nth-of-type(8) {
    z-index: 3;
  }
  :nth-of-type(9) {
    z-index: 2;
  }
  :nth-of-type(10) {
    z-index: 1;
  }
  :hover .author-name-tooltip {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AuthorNameTooltip = styled.div`
  position: absolute;
  bottom: 105%;
  z-index: 999;
  display: block;
  padding: 2px 8px;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  white-space: nowrap;
  background: ${colors.darkgrey};
  border-radius: 3px;
  box-shadow: rgba(39, 44, 49, 0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: translateY(6px);
  pointer-events: none;
  @media (max-width: 650px) {
    display: none;
  }
`;

const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 -5px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;
`;

const AuthorProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten('0.1', colors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;
`;

const ReadingTime = styled.span`
  flex-shrink: 0;
  margin-left: 20px;
  color: ${colors.midgrey};
  font-size: 1.2rem;
  line-height: 33px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export interface PostCardProps {
  post: PageContext;
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({ post }) => {
  console.log("POST: ", post);
  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 Aug 2018
  const displayDatetime = format(date, 'dd LLL yyyy');
  

  return (
    <article
      className={`post-card ${post.frontmatter.image ? '' : 'no-image'}`}
      css={PostCardStyles}
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
            {post.frontmatter.tags && <PostCardTags>{post.frontmatter.tags[0]}</PostCardTags>}
            <PostCardTitle>{post.frontmatter.title}</PostCardTitle>
          </header>
          <PostCardExcerpt>
            <p>{post.excerpt}</p>
          </PostCardExcerpt>
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
        {/* <PostCardMeta className="post-card-meta">
          <AuthorList>
            <AuthorListItem>
              <AuthorNameTooltip className="author-name-tooltip">
                {post.frontmatter.author.id}
              </AuthorNameTooltip>
              <Link css={StaticAvatar} to={`/author/${_.kebabCase(post.frontmatter.author.id)}/`}>
                <AuthorProfileImage
                  src={post.frontmatter.author.avatar.children[0].fixed.src}
                  alt={post.frontmatter.author.id}
                />
              </Link>
            </AuthorListItem>
          </AuthorList>
          <ReadingTime>{post.timeToRead} min read</ReadingTime>
        </PostCardMeta> */}
      </PostCardContent>
    </article>
  );
};