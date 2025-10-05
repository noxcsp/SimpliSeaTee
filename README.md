# SimpliSeaTee 🌊👕

A modern e-commerce website for SimpliSeaTee - oversized tees with wave-inspired designs. Built with Vite + React.js and EmailJS integration.

## 🌟 Features

- Modern React.js with Vite
- Responsive design with Tailwind CSS + DaisyUI
- Interactive product carousel
- Newsletter subscription with EmailJS
- Smooth scrolling navigation

## 🛠️ Tech Stack

- **Vite 7.1.6** + **React 19.1.1**
- **Tailwind CSS 4.1.13** + **DaisyUI 5.1.13**
- **Embla Carousel 8.6.0**
- **EmailJS Browser 4.4.1**

## 📁 Project Structure

```
simpliseatee/
├── client/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── sections/      # Page sections
│   │   └── utils/         # Utilities
│   ├── .env              # Environment variables
│   └── package.json
└── README.md
```

## 🚀 Getting Started

1. **Clone and install**

   ```bash
   git clone <https://github.com/noxcsp/SimpliSeaTee.git>
   cd simpliseatee/client
   npm install
   ```

2. **Environment setup**
   Create `.env` in `client` directory:

   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_USER_ID=your_user_id
   VITE_SHOP_URL=https://your-domain.com
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Set up email service and template
3. Add credentials to `.env` file

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Run ESLint
```

## 👥 Author

**Clark Sean Payabyab** - [noxcsp](https://github.com/noxcsp)

---