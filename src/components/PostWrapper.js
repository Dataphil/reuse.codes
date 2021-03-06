/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 2em;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  background-color: #e8edf3;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: black;

  & > h1 {
    font-size: 1.1em;
    text-align: center;
  }

  @media (min-width: 38em) {
    max-height: min-content;
    & > h1 {
      font-size: 1em;
    }

    & > p {
      padding-top: 0.5em;
      font-size: 0.85em;
    }
  }
`;

const PostWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default PostWrapper;
