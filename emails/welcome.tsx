import React from "react";
import {
  Html,
  Container,
  Body,
  Preview,
  Text,
  Link,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://google.com">click here</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
