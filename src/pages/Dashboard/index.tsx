import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import api from "../../services/api";
import { Container, JokeContainer } from "./styles";
import NameField from "./NameField";

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function fecthJoke() {
      const firstName = localStorage.getItem("first");
      const lastName = localStorage.getItem("last");

      if (firstName && lastName) {
        const response = await api.post(
          `jokes/random?firstName=${firstName}&lastName=${lastName}`
        );
        setJoke(response.data.value.joke);
      } else {
        const response = await api.post("jokes/random");
        setJoke(response.data.value.joke);
      }
    }
    fecthJoke();
  }, []);

  const handleSubmit = useCallback(async (data) => {
    const response = await api.post("jokes/random");
    setJoke(response.data.value.joke);
  }, []);

  return (
    <Container>
      <div>
        <NameField />
      </div>
      <JokeContainer>
        <h2>Here is The Joke</h2>
        {joke && <span>{joke}</span>}
      </JokeContainer>
    </Container>
  );
};

export default Dashboard;
