import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        name="Model S"
        backgroundImage="model-3.jpg"
        description="Order Online for Touchless Delivery!"
      />
      <Section
        name="Model Y"
        backgroundImage="model-y.jpg"
        description="Order Online for Touchless Delivery!"
      />
      <Section
        name="Model S"
        backgroundImage="model-s.jpg"
        description="Order Online for Touchless Delivery!"
      />
      <Section
        name="Model X"
        backgroundImage="model-x.jpg"
        description="Order Online for Touchless Delivery!"
      />
      <Section
        name="Solar-Panel"
        backgroundImage="solar-panel.jpg"
        description="Lowest Cost Solar Panels in America!"
      />
      <Section
        name="Solar-Roof"
        backgroundImage="solar-roof.jpg"
        description="Produce Clean Energy From Your Roof"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
