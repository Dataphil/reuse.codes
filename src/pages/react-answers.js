/** @jsx jsx */
import { jsx } from "../context";
import { graphql } from "gatsby";
import { LayoutLibrary } from "../components/LayoutLibrary";
import AnswersIndexWrapper from "../components/AnswersIndexWrapper";
import SEO from "gatsby-theme-seo/src/components/seo";
import { useSearchBar } from "../useSearchBar";
import SearchBar from "../components/SearchBar";
import PageTransition from "gatsby-plugin-page-transitions";

const SEODescription = `
  Reusable code snippets for web developers and designers.
`;

const SEOKeywords = [
  "Web Developer",
  "Frontend Developer",
  "React",
  "Gatsby",
  "GIT",
  "JavaScript",
  "CSS",
  "HTML",
];
export default ({ data }) => {
  const { answers, handleSearchQuery } = useSearchBar(data);
  return (
    <LayoutLibrary>
      <SEO
        title="React Answers"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <PageTransition>
        <SearchBar category="react" handleSearchQuery={handleSearchQuery} />
        {/* <AnswersHeader category="react" /> */}
        <AnswersIndexWrapper answers={answers} />
      </PageTransition>
    </LayoutLibrary>
  );
};

export const query = graphql`
  query REACT_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "react" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
          author
        }
        fields {
          slug
        }
      }
    }
  }
`;
