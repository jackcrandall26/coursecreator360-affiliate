# CourseCreator360 Affiliate Landing Page - React Version

A modern, responsive React application for promoting CourseCreator360, converted from a static HTML landing page to a fully interactive React app.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Interactive Components**: Smooth scrolling, hover effects, and animated statistics
- **Affiliate Link Tracking**: Built-in analytics tracking for affiliate conversions
- **Performance Optimized**: Fast loading times with code splitting and optimization

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with animations and responsive design
- **Font Awesome**: Icon library for beautiful UI elements
- **Inter Font**: Modern typography from Google Fonts

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd coursecreator360-affiliate-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header with scroll effects
│   ├── Hero.jsx        # Hero section with animated stats
│   ├── Problem.jsx     # Problem statement section
│   ├── Features.jsx    # Features showcase
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Pricing.jsx     # Pricing plans
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer with links
├── styles/             # CSS styles
│   ├── index.css       # Base styles
│   ├── styles.css      # Component styles
│   └── App.css         # App-specific styles
├── App.jsx             # Main App component
└── main.jsx            # React entry point
```

## 🎨 Key Features

### Interactive Components
- **Smooth Scrolling Navigation**: Click navigation links for smooth section transitions
- **Animated Statistics**: Numbers animate when the hero section comes into view
- **Hover Effects**: Cards lift and scale on hover for better UX
- **Scroll-based Header**: Header background changes on scroll

### Affiliate Tracking
- **Link Tracking**: All affiliate links include tracking parameters
- **Analytics Integration**: Ready for Google Analytics event tracking
- **Console Logging**: Development-friendly click logging

### Performance
- **Code Splitting**: Optimized bundle sizes with Vite
- **Modern JavaScript**: ES6+ features with proper browser support
- **CSS Optimization**: Minified and optimized styles in production

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy the built files
- **AWS S3**: Upload the `dist/` contents to an S3 bucket

## 🔧 Customization

### Updating Affiliate Links
All affiliate links are centralized in each component. Search for `coursecreator360.com?ref=affiliate` to update the affiliate parameter.

### Styling
The app uses traditional CSS with modern features. Styles are organized by component and can be easily modified in the `src/styles/` directory.

### Content Updates
All content is defined as JavaScript objects within each component, making it easy to update text, testimonials, pricing, and features.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original design converted from static HTML to React
- Font Awesome for icons
- Google Fonts for typography
- React community for excellent documentation and tools