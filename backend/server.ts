const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
import { Resend } from "resend";
import { render } from "@react-email/render";
import * as path from "path";
import * as fs from "fs";

// Chargement des variables d'environnement
dotenv.config();

// Vérification clé API
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY non défini dans le fichier .env");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour charger dynamiquement le composant email
async function loadContactEmail() {
  try {
    // Chemin vers le fichier compilé
    const emailPath = path.join(__dirname, "../src/emails/ContactEmail.js");

    // Vérifie si le fichier existe
    if (!fs.existsSync(emailPath)) {
      throw new Error(`Fichier ContactEmail introuvable: ${emailPath}`);
    }

    // Import dynamique
    const module = await import(emailPath);
    return module.default;
  } catch (error) {
    console.error("❌ Erreur chargement ContactEmail:", error);

    // Fallback: fonction de template simple
    return function ContactEmailFallback(props: any) {
      return `
        <html>
          <body>
            <h1>Nouveau message de contact</h1>
            <p><strong>Nom:</strong> ${props.name}</p>
            <p><strong>Email:</strong> ${props.email}</p>
            <p><strong>Message:</strong> ${props.message}</p>
          </body>
        </html>
      `;
    };
  }
}

interface EmailRequest {
  type?: string;
  name: string;
  prename?: string;
  email: string;
  phone?: string;
  city?: string;
  subject?: string;
  message: string;
}

app.post("/api/emails", async (req: any, res: any) => {
  try {
    const {
      type,
      name,
      prename,
      email,
      phone,
      city,
      subject,
      message,
    }: EmailRequest = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    // Charge le composant email
    const ContactEmail = await loadContactEmail();

    const emailHtml = await render(
      ContactEmail({
        type: type || "Client",
        name,
        prename: prename || "",
        email,
        phone: phone || "",
        city: city || "",
        subject: subject || "Sans objet",
        message,
      })
    );

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mikeweda10@gmail.com",
      subject: `Message de ${name}${subject ? ` - ${subject}` : ""}`,
      html: emailHtml,
    });

    if (error) {
      console.error("❌ Erreur Resend:", error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'email" });
    }

    console.log("✅ Email envoyé avec succès");
    res.json({ status: "success", data });
  } catch (err) {
    console.error("❌ Erreur envoi email :", err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

// Route de santé
app.get("/api/health", (res: any) => {
  res.json({ status: "OK", message: "Serveur en fonctionnement" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend démarré sur http://localhost:${PORT}`);
});
