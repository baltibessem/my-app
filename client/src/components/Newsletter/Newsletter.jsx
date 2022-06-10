import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>GET timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="type your email for news" />
        <Button>Send</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
