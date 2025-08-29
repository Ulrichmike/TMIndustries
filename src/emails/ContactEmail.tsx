import * as React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

interface ContactEmailProps {
  type: string;
  name: string;
  prename: string;
  email: string;
  phone?: string;
  city?: string;
  subject?: string;
  message: string;
}

export default function ContactEmail({
  type,
  name,
  prename,
  email,
  phone,
  city,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body
        style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}
      >
        <Container
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <Heading style={{ color: "#333" }}>
            <strong>Objet :</strong> {subject}
          </Heading>
          <Text>
            <strong>Type de Personne: {type} </strong>
          </Text>
          <Text>{message}</Text>
          <Text>
            <strong>Cordialement, </strong>
          </Text>
          <Text>
            {prename} {name}
          </Text>
          {phone && <Text>{phone}</Text>}
          {city && <Text>{city}</Text>}
          {subject && <Text>{subject}</Text>}
          <Text>{email}</Text>

          <Button
            style={{
              backgroundColor: "#4f46e5",
              color: "#fff",
              borderRadius: "4px",
              padding: "8px 12px", // remplace pX/pY
              textDecoration: "none",
              display: "inline-block",
            }}
            href="mailto:ton_email@domain.com"
          >
            Répondre
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
