# Tasty Grill Parkgate - Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features online ordering, user authentication, and payment processing.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Online Ordering**: Full cart functionality with item management
- **User Authentication**: Secure sign-up and sign-in with Supabase
- **Payment Processing**: Integrated PayPal payment system
- **Mobile Optimized**: Perfect mobile experience with touch-friendly interface
- **Real-time Database**: Powered by Supabase for real-time data
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Payment**: PayPal SDK
- **Build Tool**: Vite
- **Deployment**: GitHub Pages / Netlify / Vercel

## 📱 Mobile Features

- Touch-optimized interface
- Smooth animations and transitions
- Responsive design for all screen sizes
- iOS safe area support
- Scroll-to-top functionality
- Performance optimized for mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Supabase account
- PayPal developer account (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tasty-grill-restaurant.git
cd tasty-grill-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

5. Start the development server:
```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

## 📦 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Add environment variables in Vercel dashboard

## 🗄️ Database Schema

The application uses the following main tables:
- `users` - User profiles and authentication
- `menu_categories` - Food categories
- `menu_items` - Menu items with pricing
- `orders` - Customer orders
- `order_items` - Individual items in orders

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` and CSS variables in `src/index.css`.

### Animations
Modify animations in `src/index.css` or add new ones using Tailwind classes.

### Layout
Components are modular and can be easily customized in the `src/components/` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support, email info@tastygrill.co.uk or call 01489 880123.

## 🙏 Acknowledgments

- React team for the amazing framework
- Supabase for the backend infrastructure
- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icons