// import * as React from "react";

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
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ color: "#333", marginBottom: "20px" }}>
            <strong>Objet :</strong> {subject || "Sans objet"}
          </h1>

          <p>
            <strong>Type de personne:</strong> {type}
          </p>
          <p>
            <strong>Prénom:</strong> {prename}
          </p>
          <p>
            <strong>Nom:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          {phone && (
            <p>
              <strong>Téléphone:</strong> {phone}
            </p>
          )}
          {city && (
            <p>
              <strong>Ville:</strong> {city}
            </p>
          )}

          <div
            style={{
              margin: "20px 0",
              padding: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
            }}
          >
            <strong>Message:</strong>
            <p style={{ whiteSpace: "pre-wrap", margin: "10px 0 0 0" }}>
              {message}
            </p>
          </div>

          <p>
            <strong>Cordialement,</strong>
          </p>
          <p>
            {prename} {name}
          </p>

          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              backgroundColor: "#4f46e5",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            Répondre à {prename}
          </a>
        </div>
      </body>
    </html>
  );
}
