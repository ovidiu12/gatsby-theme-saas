import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
const Home = props => {
  let page = props.data.allHome.nodes[0];
  return (
    <Layout>
      <SEO title={page.title} pathname={"/"} />
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allHome {
      nodes {
        title
      }
    }
  }
`;
