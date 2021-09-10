import React, { useCallback, useRef, useState } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { NameContainer } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import getValidationErrors from "../../../utils/getValidationErrors";

interface NameFieldFormData {
  firstName: "string";
  lastName: "string";
}

const NameField: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async (data: NameFieldFormData) => {
    const { firstName, lastName } = data;
    localStorage.setItem("first", firstName);
    localStorage.setItem("last", lastName);
  }, []);
  return (
    <NameContainer>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input placeholder="Type your name" name="firstName" />
        <Input placeholder="Type your last name" name="lastName" />
        <Button>Save Name</Button>
      </Form>
    </NameContainer>
  );
};

export default NameField;
