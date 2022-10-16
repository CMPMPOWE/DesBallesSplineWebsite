import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="Spline"
        scene="https://prod.spline.design/q5EdDlzuscHULcab/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">Developer</a>
          </li>
          <li>
            <a href="Tester.html">Tester</a>
          </li>
          <li>
            <a href="ProductOwner.html">Download</a>
          </li>
        </Menu>
        <h1>
          <center>Des Balles</center>{" "}
        </h1>
        <p>balls translate to DesBalles in french</p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 16px;
  color: white;

  position: relative;

  .Spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-weight: bold;
    font-size: 100px;
    margin: 0;
    max-width: 50px;
  }
  p {
    font-weight: bold;
    font-size: 15px;
    margin: 4;
    max-width: 144px;
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0px 30px 0px 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }
`;
