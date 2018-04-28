import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Section from '../components/Section';

import { rhythm, scale } from '../utils/typography';

const BlogTemplate = ({
  // this prop will be injected by the GraphQL query below.
  data: { markdownRemark: { frontmatter, html } },
}) => (
  <Section.Root>
    <div style={{ height: '75px' }} />
    <Section.Section id="about" header={frontmatter.title}>
      <h2>{frontmatter.date}</h2>
      <Section.Text>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Section.Text>
    </Section.Section>
  </Section.Root>
);

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
