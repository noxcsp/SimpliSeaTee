# SimpliSeaTee 🌊👕

A modern, responsive e-commerce website for SimpliSeaTee - a fashion brand offering oversized tees with wave-inspired designs. Built with Vite + React.js frontend and Express.js backend with email integration.

## 🌟 Features

### Frontend

- **Modern React.js Application** built with Vite for lightning-fast development
- **Responsive Design** with Tailwind CSS and DaisyUI components
- **Interactive Product Carousel** using Embla Carousel with custom styling
- **Smooth Scrolling Navigation** with mobile-friendly dropdown menu
- **Newsletter Subscription** with real-time email integration
- **Product Showcase** with hover effects and modern card layouts
- **Custom Typography** with Mistrully font for brand identity

### Backend

- **Express.js Server** for handling API requests
- **Nodemailer Integration** for automated email marketing
- **CORS Support** for cross-origin requests
- **Environment Variable Management** for secure configuration
- **Professional Email Templates** with HTML styling and brand assets

## 🛠️ Tech Stack

### Frontend

- **Vite** - Build tool and development server
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Embla Carousel** - Touch-friendly carousel library
- **Axios** - HTTP client for API requests

### Backend

- **Express.js** - Web framework for Node.js
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
simpliseatee/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, fonts, and media files
│   │   ├── components/    # Reusable React components
│   │   │   ├── EmblaCarouselArrowButtons.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── css/          # Styling files
│   │   │   ├── embla.css
│   │   │   └── index.css
│   │   ├── fonts/        # Custom fonts
│   │   ├── sections/     # Page sections
│   │   │   ├── BestSellers.jsx
│   │   │   ├── ForYou.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── OurStory.jsx
│   │   │   └── ValueProposition.jsx
│   │   ├── utils/        # Utility functions
│   │   ├── App.jsx       # Main application component
│   │   └── main.jsx      # Application entry point
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Express application
│   ├── .env              # Environment variables (not tracked)
│   ├── server.js         # Express server with email functionality
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd simpliseatee
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `server` directory:

   ```env
   # Email Configuration
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password

   # Server Configuration
   PORT=3001
   ```

   **Note:** For Gmail, you'll need to:

   - Enable 2-Factor Authentication
   - Generate an App Password for Nodemailer
   - Use the App Password in the `EMAIL_PASS` field

### 🏃‍♂️ Running the Application

#### Development Mode

1. **Start the Backend Server**

   ```bash
   cd server
   node server.js
   ```

   Server will run on `http://localhost:3001`

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   Application will run on `http://localhost:5173`

#### Production Build

1. **Build the Frontend**

   ```bash
   cd client
   npm run build
   ```

2. **Preview the Production Build**
   ```bash
   npm run preview
   ```

## 📧 Email Integration

The application includes a sophisticated email system for newsletter subscriptions:

### Features

- **Professional HTML Templates** with brand styling
- **Welcome Email** with 10% discount code
- **Responsive Email Design** that works across email clients
- **Brand Asset Integration** with embedded logo
- **Error Handling** with detailed logging

### API Endpoint

```
POST /send-email
Content-Type: application/json

{
  "to": "customer@example.com"
}
```

### Email Template Includes

- Welcome message with brand styling
- Discount code: `WELCOME10`
- Call-to-action button
- Benefit highlights
- Professional footer

## 🎨 UI Components

### Navigation

- **Responsive Navbar** with brand logo
- **Mobile-friendly dropdown** menu with smooth animations
- **Smooth scrolling** to page sections

### Product Carousel

- **Touch-friendly carousel** with Embla Carousel
- **Product cards** with image hover effects
- **Navigation arrows** with custom styling
- **Responsive design** for all screen sizes

### Sections

- **Hero Section** with brand introduction
- **Value Proposition** highlighting product benefits
- **Best Sellers** showcase
- **For You** personalized recommendations
- **Our Story** brand narrative
- **Newsletter Subscription** with email integration

## 🔧 Scripts

### Frontend (client/)

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend (server/)

```bash
node server.js   # Start the server
```

## 🌐 Deployment

### Frontend Deployment

The frontend can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages

### Backend Deployment

The backend can be deployed to:

- Heroku
- Railway
- DigitalOcean
- AWS

### Environment Variables for Production

Ensure these environment variables are set in your production environment:

- `EMAIL_USER`
- `EMAIL_PASS`
- `PORT`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Clark Sean Payabyab** - _Initial work_ - [Clark Sean Payabyab](https://github.com/noxcsp)

## 🙏 Acknowledgments

- **Embla Carousel** for the smooth carousel functionality
- **Tailwind CSS** for the utility-first styling approach
- **DaisyUI** for beautiful pre-built components
- **Vite** for the fast development experience
- **Nodemailer** for reliable email delivery

## 📞 Support

For support, email support@simpliseatee.com or create an issue in the repository.

---

**Built with ❤️ for SimpliSeaTee**
