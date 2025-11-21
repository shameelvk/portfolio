# Mohammed Shameel VK - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my professional experience, skills, and projects as a Front End and Mobile App Developer.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Elegant black theme with crimson red accents
- **Smooth Animations**: Engaging animations and transitions
- **Interactive Sections**:
  - Hero section with typing animation
  - About section with professional summary
  - Work experience timeline
  - Categorized skills showcase
  - Project portfolio with filtering
  - Education and awards
  - Contact form with Google Apps Script integration

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Poppins, Playfair Display)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shameelvk/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       └── img/          # Images and icons
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Data files
│   │   ├── projects.js
│   │   └── data.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: '#dc143c',  // Crimson red
  dark: '#000000',     // Black
  'dark-gray': '#1a1a1a',
  'light-gray': '#999999',
}
```

### Content
Update your information in the data files:
- `src/data/data.js` - Skills, experience, education, awards
- `src/data/projects.js` - Project portfolio

## 📧 Contact Form

The contact form uses Google Apps Script for form submissions. Update the script URL in `src/components/Contact.jsx` if needed.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mohammed Shameel VK**
- GitHub: [@shameelvk](https://github.com/shameelvk)
- LinkedIn: [Mohammed Shameel VK](https://www.linkedin.com/in/mohammed-shameel-vk-848816265)
- Email: vkshameel1@gmail.com

---

Built with ❤️ using React & Tailwind CSS
