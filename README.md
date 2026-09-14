# MK Photography

Premium Express + Pug photography website with MongoDB authentication.

## Includes
- Home, About, Portfolio, Gallery, Services, Contact
- Signup, Login, Logout
- bcrypt password hashing
- MongoDB user/session storage
- Protected client dashboard
- Enquiry persistence
- WhatsApp integration
- Gallery filters/lightbox
- Responsive premium UI
- Basic SEO metadata

## Run
npm install
cp .env.example .env
# add MONGODB_URI and SESSION_SECRET
npm start

## Render
Build: npm install
Start: npm start
Environment variables: MONGODB_URI, SESSION_SECRET, NODE_ENV=production
Then add your custom domain in Render.

Replace the demo WhatsApp number/email/images before production.
