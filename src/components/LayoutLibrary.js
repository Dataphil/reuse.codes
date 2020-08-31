/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import DefaultLayout from "./DefautLayout";
import Footer from "./Footer";
import { Link } from "gatsby";

const LayoutContainer = styled.div`
  @media (min-width: 48em) {
    max-width: 1132px;
    margin: 0 auto;
    width: 100%;
  }
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleSub = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;
`;

const TopHeader = styled.div`
  background: #111b29;
  color: white;
  height: 55px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1132px;
  margin: 0 auto;
  width: 100%;
`;

const MainContent = styled.div`
  height: 100%;
  flex: 1 0 auto;
  padding-bottom: 2em;
`;

const Title = styled.a`
  font-size: 21px;
  color: white;
`;

export const LayoutLibrary = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <DefaultLayout>
      <TopHeader>
        <Container>
          <FlexHeader>
            <Link to="/">
              <Title>Reuse</Title>
            </Link>
            <Link to="/">
              <TitleSub>Want to contribute?</TitleSub>
            </Link>
          </FlexHeader>
        </Container>
      </TopHeader>
      <LayoutContainer>
        <React.Fragment>
          <MainContent>
            <Header siteTitle={title} siteDescription={description} />
            {children}
          </MainContent>
        </React.Fragment>
      </LayoutContainer>
      <Footer />
    </DefaultLayout>
  );
};
