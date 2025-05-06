import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

app.use(cors());
app.use(express.json());

interface EmailRequestBody {
  to: string;
  subject: string;
  message: string;
}

app.post("/send-email", async (req: Request, res: Response) => {
  const { to, subject, message } = req.body as EmailRequestBody;

  const msg = {
    to,
    from: process.env.FROM_Email as string,
    subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email wysłany" });
  } catch (error: any) {
    console.error("Błąd wysyłki: ", error?.response?.body || error);
    res.status(500).json({ error: "Nie udało się wysłać e-maila." });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
