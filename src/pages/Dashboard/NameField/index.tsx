import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { NameContainer } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const NameField: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(() => {}, []);
  return (
    <NameContainer>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input placeholder="Type your name" name="first-name" />
        <Input placeholder="Type your last name" name="last-name" />
        <Button>Salvar Nome</Button>
      </Form>
    </NameContainer>
  );
};

export default NameField;
