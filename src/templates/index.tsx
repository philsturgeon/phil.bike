import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { css } from '@emotion/core';

import { Seo } from '../components/Seo';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import Pagination from '../components/Pagination';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/shared';
import config from '../website-config';
import { PageContext } from './post';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const { width, height } = props.data.header.childImageSharp.fixed;
  const featuredPosts = props.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.featured);
  const allPosts = props.data.allMarkdownRemark.edges.filter(edge => !edge.node.frontmatter.featured);

  return (
    <IndexLayout>
      <Seo
        width={width}
        height={height}
        description={config.description}
        title={config.title}
        path={props.path}
        image={`${props.data.header.childImageSharp.fixed.src}`}
      />
      <Wrapper>
        <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fixed.src}')`,
          }}
        >
          <div css={inner}>
            <SiteNav isHome />
            <SiteHeaderContent className="site-header-content">
              <SiteTitle className="site-title">
                {config.title}
              </SiteTitle>
              <h2>{config.description}</h2>
            </SiteHeaderContent>
          </div>
        </div>
        <main id="site-main" css={[SiteMain, outer]}>
        <div css={[inner, Posts]}>
            {featuredPosts.length > 0 && <h3 css={HomeSubtitles}>Featured Posts</h3>}
            <div css={[PostFeed]}>
              {featuredPosts.map(post => {
                return (<PostCard key={post.node.fields.slug} post={post.node} large />)
              })}
            </div>
            <h3 css={HomeSubtitles}>All Posts</h3>
            <div css={[PostFeed]}>
              {allPosts.map(post => {
                return(<PostCard key={post.node.fields.slug} post={post.node} />)
              })}
            </div>
          </div>
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: {eq: "post"} } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            featured
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
                    fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;

const HomeSubtitles = css`
  font-weight: 600;
`;

export default IndexPage;
