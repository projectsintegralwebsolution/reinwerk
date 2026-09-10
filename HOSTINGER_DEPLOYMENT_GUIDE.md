# Hostinger Deployment Guide for reinwerk.co

This guide provides step-by-step instructions to push this website to Git and deploy it to Hostinger for the domain **reinwerk.co**.

---

## Step 1: Push Code to Your Git Repository (GitHub / GitLab)

1. Create a new repository on your GitHub account (e.g., `reinwerk-cleanroom` or `reinwerk.co`).
2. Open your terminal in this project directory:
   ```bash
   cd C:\Users\princ\.gemini\antigravity\scratch\reinwerk-cleanroom
   ```
3. Link this local repository to your remote GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```
4. Push the code to the `main` branch:
   ```bash
   git push -u origin main
   ```

*(Note: The `dist/` production build, assets, templates, and `app.js` entrypoint are already compiled and committed, so Hostinger can start immediately without compiling TypeScript on the server).*

---

## Step 2: Add the Domain `reinwerk.co` in Hostinger hPanel

1. Log in to your [Hostinger hPanel](https://hpanel.hostinger.com).
2. Go to **Websites** > **Add Website**.
3. Select your hosting plan and enter your domain name: `reinwerk.co`.
4. If your domain was purchased outside Hostinger, update its DNS:
   - Point nameservers to Hostinger (`ns1.dns-parking.com` and `ns2.dns-parking.com`), OR
   - Add an **A Record** pointing `@` to your Hostinger server IP address.

---

## Step 3: Deploy via Hostinger Git (Recommended)

1. In hPanel, select **reinwerk.co**.
2. Navigate to **Advanced** > **Git**.
3. Enter your repository details:
   - **Repository URL**: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git`
   - **Branch**: `main`
   - **Install path**: leave empty or select `/public_html`
4. Click **Create** and then **Deploy**.
5. Every time you push updates to GitHub, you can click **Deploy** in hPanel to update your live website in seconds.

---

## Step 4: Configure Node.js Application on Hostinger

1. In hPanel for **reinwerk.co**, navigate to **Advanced** > **Node.js** (or search "Node.js").
2. Set the configuration parameters:
   - **Node.js Version**: `20.x` or `22.x` (or `18.x+`)
   - **Application Root**: `/domains/reinwerk.co/public_html`
   - **Application Startup File**: `app.js` (or `dist/server.js`)
   - **Application Mode**: `Production`
3. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `465`
   - `SMTP_SECURE`: `true`
   - `SMTP_USER`: `integralwebsolution@gmail.com`
   - `SMTP_PASS`: `YOUR_16_CHAR_GMAIL_APP_PASSWORD`
   - `CONTACT_RECEIVER_EMAIL`: `integralwebsolution@gmail.com`
4. Click **Run NPM Install** (or upload `node_modules`).
5. Click **Start / Restart Application**.

---

## Step 5: How to Generate Your Gmail App Password

To allow contact form inquiries to be sent via `integralwebsolution@gmail.com`:

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Ensure **2-Step Verification** is turned ON.
3. Search for or navigate to **App Passwords** (`https://myaccount.google.com/apppasswords`).
4. Enter an app name (e.g. `Reinwerk Website`).
5. Google will generate a **16-character password** (e.g. `abcd efgh ijkl mnop`).
6. Paste this 16-character password into `.env` (`SMTP_PASS=...`) on your server.
