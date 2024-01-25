/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '460px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'about': "url('/assets/img/banner_images/about_img.jpg')",
        'ourteams':"url('/assets/img/banner_images/teams_img.png')",
        'service':"url('/assets/img/banner_images/services_img.jpg')",
        'carrers':"url('/assets/img/banner_images/careers_img.jpg')",
        'contact':"url('/assets/img/banner_images/contact_img.jpg')",
        'blog':"url('/assets/img/banner_images/blog_img.jpg')",
      },
      colors:{
        'primary' : "#6fb72f",
        'secondary' : "#1c542a",
        'aliceblue':"#f0f8ff",
      }
    },
  },
  plugins: [],
}
