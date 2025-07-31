```
client/
├── public/
│   └── index.html
├── src/
│   ├── assets/                # All images, icons, logos
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── BookingForm.jsx
│   │   └── AdminSidebar.jsx
│   ├── pages/                 # Full pages for routes
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Booking.jsx
│   │   ├── Confirmation.jsx
│   │   ├── Login.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── AddService.jsx
│   ├── layouts/               # Layout wrapper (if any)
│   │   └── MainLayout.jsx
│   ├── routes/                # All route setup
│   │   └── AppRoutes.jsx
│   ├── utils/                 # API calls, helpers, constants
│   │   ├── api.js
│   │   └── constants.js
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # ReactDOM entry point
│   ├── index.css              # Tailwind + custom styles
│   └── .env                   # Frontend environment variables (API URL etc.)
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```