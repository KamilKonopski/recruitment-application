# 🧑‍💼 Aplikacja Rekrutacyjna

Prosty projekt frontendowy do zarządzania kandydatami w procesie rekrutacji. Kandydaci są sortowani w 3 kolumny: „Nowi”, „Zaproszeni”, „Odrzuceni”.

---

## 🚀 Technologie

- React + Vite
- TypeScript
- Styled Components
- SendGrid (backend – Node.js)

---

## ⚙️ Funkcje

- Dodawanie kandydatów do różnych kolumn
- Przenoszenie kandydatów między kolumnami
- Wysyłanie maila z backendu (np. „Dziękujemy za aplikację”)

---

## 🖥️ Uruchamianie aplikacji

### Frontend

```bash
cd frontend
npm install
npm run dev

```

### Backend

```bash
cd backend
npm install
npm run dev

```

✅ Backend dostępny domyślnie pod http://localhost:3000

📧 Konfiguracja SendGrid
Aby backend działał i wysyłał maile, potrzebujesz:

Konta na SendGrid

Wygenerowanego API Keya

Zweryfikowanego adresu e-mail, z którego będą wysyłane wiadomości

Adresu e-mail docelowego, który wpiszesz w body.to

🔐 Zmienna środowiskowa
W pliku .env w folderze backend dodaj:

SENDGRID_API_KEY=twój_api_key

EMAIL_FROM=twój_zarejestrowany_email@domena.com

📨 Przykładowe zapytanie z frontendu

body: JSON.stringify({

to: "kandydat@example.com", // <— wpisz tu swój adres e-mail

subject: "Dziękujemy za aplikację",

message: "Twoje zgłoszenie zostało odebrane.",

});


⚠️ Uwaga: nie wysyłamy maili do losowych adresów wprowadzonych przez użytkownika — to tylko symulacja! Podajesz swój e-mail, by nie spamować nieistniejących lub cudzych skrzynek.
