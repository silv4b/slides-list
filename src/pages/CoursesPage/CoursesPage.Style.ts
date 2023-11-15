import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
`;

const MyContainer = styled.div`
  display: flex;
  max-width: 1600px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export { Container, Title, MyContainer };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const MyContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: left;
//   align-items: flex-start;
// `;

// export { Container, MyContainer };
