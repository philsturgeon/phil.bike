import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './colors';
import { lighten, darken } from 'polished';

export const outer = css`
  position: relative;
  padding: 0 5vw;
`;

// Centered content container blocks
export const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: ${lighten('-0.05', colors.darkgrey)};
`;

export const SiteMain = css`
  z-index: 10;
  flex-grow: 1;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

export const SiteTitle = styled.h1`
  z-index: 10;
  margin: 0 0px 0 -2px;
  padding: 0;
  font-size: 5rem;
  line-height: 1em;
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 500px) {
    font-size: 4.2rem;
  }
`;

export const SiteDescription = styled.h2`
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

export const Posts = css`
  overflow-x: hidden;
`;

export const PostFeed = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  background: #fff;

  /* Special Template Styles */
  padding: 0px 0 1vw;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

export const PostFeedRaise = css`
  @media (min-width: 900px) {
    margin-top: 20px;
    padding-top: 0;
  }
`;

export const SocialLink = css`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
    text-decoration: none;
  }

  &.emoji { 
    color: transparent; 
    text-shadow: 0 0 0 #fff;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }
`;


export const SiteHeader = css``;

export const SiteHeaderContent = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  max-height: 340px;

  h2 {
    font-size: 2rem;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 3px;
  }
`;

export const SiteHeaderStyles = css`
  position: relative;
  color: #fff;
  background: ${lighten('-0.05', colors.darkgrey)} no-repeat center center;
  background-size: cover;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 140px;
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  }

  @media (prefers-color-scheme: dark) {
    :before {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const AuthorProfileImage = css`
  display: block;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten('0.1', colors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;
  margin-right: 15px;
  width: 60px;
  height: 60px;
`;

export const SiteHeaderAuthor = css`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: ${darken('0.05', colors.darkgrey)} no-repeat center center;
  background-size: cover;
`