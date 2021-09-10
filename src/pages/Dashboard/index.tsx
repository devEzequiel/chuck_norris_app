import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, FormContainer, JokeContainer } from "./styles";
import NameField from "./NameField";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(() => {}, []);
  return (
    <Container>
      <div>
        <FormContainer>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h4>Search Jokes</h4>
            <Input placeholder="Search" name="search" type="text" />
            <Button>Search</Button>
          </Form>
        </FormContainer>
        <NameField />
      </div>
      <JokeContainer>
        <h1>Here is The Joke</h1>
      </JokeContainer>
    </Container>
  );
};

export default Dashboard;
