# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Click **Connect Account** and authorize EmailJS
5. Copy the **Service ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Click **Save** and copy the **Template ID** (looks like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (looks like a long string)
3. Copy it

## Step 5: Update .env File
1. Open the `.env` file in your portfolio folder
2. Replace the placeholder values:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

## Step 6: Test the Form
1. Restart your dev server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email inbox (the one you connected to EmailJS)

## Important Notes
- Free tier allows **200 emails/month**
- Emails are sent to the email address you connected in Step 2
- Make sure to add `.env` to `.gitignore` (already done)
- For deployment, add these environment variables to your hosting platform (Vercel/Netlify)

## Troubleshooting
- If emails don't arrive, check your spam folder
- Verify all three IDs are correct in `.env`
- Check the browser console for errors
- Make sure you restarted the dev server after updating `.env`

## Deployment
When deploying to Vercel/Netlify:
1. Go to your project settings
2. Add the three environment variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
3. Redeploy your site

That's it! Your contact form will now send emails directly to your inbox. 📧
