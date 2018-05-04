import React from 'react';

import Section from '../components/Section';

const BlogTemplate = ({
  // This prop will be injected by the GraphQL query below.
  data: { markdownRemark: { frontmatter, html } },
}) => (
  <Section.Root>
    <div style={{ height: '75px' }} />
    <Section.Section id="about" header={frontmatter.title}>
      <Section.Header4>{frontmatter.date}</Section.Header4>
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
