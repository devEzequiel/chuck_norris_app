import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 100px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  h2 {
    margin-bottom: 24px;
  }
`;

export const JokeContainer = styled.div`
  margin-left: 80px;

  > h3 {
    margin-bottom: 30px;
  }

  > span {
    margin-top: 24px;
  }
`;
