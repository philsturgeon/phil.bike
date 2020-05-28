import { graphql } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  AuthorProfileImage,
  SiteHeaderAuthor,
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteHeaderContent,
  SiteTitle,
  SiteMain,
  SocialLink,
} from '../styles/shared';
import { PageContext } from './post';
import config from '../website-config';
import Twitter from '../components/icons/twitter';
import { Seo } from '../components/Seo';

const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorMeta = styled.div`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  font-family: Georgia, serif;
  font-style: italic;
`;

const AuthorBio = styled.h3`
  z-index: 10;
  flex-shrink: 0;
  margin: 5px 0 10px 0;
  max-width: 600px;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

const Bull = styled.span`
  display: inline-block;
  margin: 0 12px;
  opacity: 0.5;
`;

const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: 0 0 20px 0;
  width: 100px;
  height: 100px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
`;

interface AuthorTemplateProps {
  pathContext: {
    slug: string;
  };
  pageContext: {
    author: string;
  };
  data: {
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: PageContext;
      }[];
    };
    authorYaml: {
      id: string;
      website?: string;
      twitter?: string;
      location?: string;
      // eslint-disable-next-line @typescript-eslint/camelcase
      profile_image?: {
        childImageSharp: {
          fluid: any;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

const Author: React.FunctionComponent<AuthorTemplateProps> = props => {
  const author = props.data.authorYaml;

  const edges = props.data.allMarkdownRemark.edges.filter(
    edge => {
      return edge.node.frontmatter.author && edge.node.frontmatter.author.id === author.id;
    }
  );
  const totalCount = edges.length;

  return (
    <IndexLayout>
      <Seo
        title={`${author.id} - ${config.title}`}
        description={author.bio}
        path={props.path}
      />
      <Wrapper>
        <header
          className="no-cover"
          css={[outer, SiteHeaderAuthor]}
          style={{
            // eslint-disable-next-line @typescript-eslint/camelcase
            backgroundImage: author.profile_image ?
              `url(${author.profile_image.childImageSharp.fluid.src})` :
              '',
          }}
        >
          <div css={inner}>
            <SiteNav isHome={false} />
            <SiteHeaderContent>
              <img
                css={[AuthorProfileImage, AuthorProfileBioImage]}
                src={props.data.authorYaml.avatar.childImageSharp.fluid.src}
                alt={author.id}
              />
              <SiteTitle>{author.id}</SiteTitle>
              {author.bio && <AuthorBio>{author.bio}</AuthorBio>}
              <AuthorMeta>
                {author.location && (
                  <div css={HiddenMobile}>
                    {author.location} <Bull>&bull;</Bull>
                  </div>
                )}
                <div css={HiddenMobile}>
                  {totalCount > 1 && `${totalCount} posts`}
                  {totalCount === 1 && '1 post'}
                  {totalCount === 0 && 'No posts'} <Bull>•</Bull>
                </div>
                {author.twitter && (
                  <a
                    className="social-link-tw"
                    css={SocialLink}
                    href={`https://twitter.com/${author.twitter}`}
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                )}
              </AuthorMeta>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>
              {edges.map(({ node }) => {
                return <PostCard key={node.fields.slug} post={node} />;
              })}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Author;

export const pageQuery = graphql`
  query($author: String) {
    authorYaml(id: { eq: $author }) {
      id
      website
      twitter
      bio
      location
      profile_image {
        childImageSharp {
          fluid(maxWidth: 3720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 2000,
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
