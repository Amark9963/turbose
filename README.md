# Turbose AI Labs Enterprise — Website

Built with Next.js 16, Tailwind CSS v4, Framer Motion, shadcn/ui.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the root:

```
RESEND_API_KEY=your_resend_api_key
```

> The contact form uses [Resend](https://resend.com) to send emails to `amar@turbose.com` from `noreply@turbose.com`. Domain is verified in the Resend dashboard.

---

## Production Server

- **Provider:** Hetzner
- **IP:** `46.62.139.120`
- **User:** `amar`
- **App directory:** `/var/www/turbose`
- **Port:** `3002`
- **Process manager:** PM2 (`turbose`)
- **Web server:** nginx → `/etc/nginx/sites-available/turbose-new`
- **SSL:** Let's Encrypt — auto-renews via certbot

---

## Deploy Updates

```bash
# Local — push changes
cd C:\Users\amark\turbose
git add . && git commit -m "Update" && git push

# Server — pull and restart
ssh amar@46.62.139.120
cd /var/www/turbose && git pull && npm run build && pm2 restart turbose
```

---

## First-Time Server Setup (for reference)

```bash
# Clone repo
git clone https://github.com/Amark9963/turbose.git /var/www/turbose
cd /var/www/turbose

# Environment variable
echo "RESEND_API_KEY=your_key" > .env.local

# Install, build, start
npm install
npm run build
PORT=3002 pm2 start npm --name "turbose" -- start
pm2 save
pm2 startup
```

nginx config at `/etc/nginx/sites-available/turbose-new`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name turbose.com www.turbose.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name turbose.com www.turbose.com;

    ssl_certificate /etc/letsencrypt/live/turbose.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/turbose.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Components | shadcn/ui |
| Fonts | Space Grotesk (display), DM Sans (body) |
| Email | Resend |
| Hosting | Hetzner VPS |
| SSL | Let's Encrypt (certbot) |