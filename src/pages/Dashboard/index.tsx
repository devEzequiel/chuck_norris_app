import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, FormContainer } from "./styles";
import NameField from "./NameField";
import Input from "../../components/Input";

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(() => {}, []);
  return (
    <Container>
      <NameField />
      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h4>Search Jokes</h4>
          <Input placeholder="Search" name="search" type="text" />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Dashboard;
