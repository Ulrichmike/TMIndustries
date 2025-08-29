import dotenv from "dotenv";
dotenv.config();

import express from "express";
import type { Request, Response } from "express"; // <-- importer Request, Response
import cors from "cors";
import { Resend } from "resend";
import ContactEmail from "../src/emails/ContactEmail"; // ajuste si ton email est ailleurs

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY!);

app.post("/api/emails", async (req: Request, res: Response) => {
  const { type, name, prename, email, phone, city, subject, message } =
    req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mikeweda10@gmail.com",
      subject: `Message de ${name}`,
      react: ContactEmail({
        type,
        name,
        prename,
        email,
        phone,
        city,
        subject,
        message,
      }),
    });

    console.log("✅ Email envoyé avec succès");
    res.json({ status: "success" });
  } catch (err) {
    console.error("❌ Erreur envoi email :", err);
    res.status(500).json({ error: "Erreur envoi email" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend démarré sur http://localhost:5000");
});
