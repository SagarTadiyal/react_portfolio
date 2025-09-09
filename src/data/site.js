export const SITE = {
  name: 'Sagar Tadiyal',
  role: 'Aspiring Data Analyst & Web Developer',
  tagline: 'I turn data into decisions and ideas into fast, friendly web apps.',
  email: 'sagarrawat2231@gmail.com',
  location: 'Dehradun, India',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'FaLinkedin' },
    { name: 'GitHub', url: 'https://github.com/', icon: 'FaGithub' },
    { name: 'X', url: 'https://x.com/', icon: 'FaXTwitter' }
  ],
  skills: {
    technical: ['Python','Pandas','NumPy','Matplotlib','React','Vite','Node.js','MongoDB','Tailwind CSS','Git & GitHub','REST APIs'],
    soft: ['Problem Solving','Communication','Teamwork','Time Management','Adaptability','Growth Mindset']
  },
  projects: [
    { title:'IPL Insights Dashboard', img:'/src/assets/ipl_dashboard.avif', tags:['Python','Pandas','Matplotlib'], demo:'#', desc:'Exploratory analysis of IPL seasons with interactive charts.'},
    { title:'Movie Recommender', img:'/src/assets/movie.jpg', tags:['Python','scikit-learn'], demo:'#', desc:'Content-based recommendations using cosine similarity.'},
    { title:'Personal Budget Tracker', img:'/src/assets/personal_budget.webp', tags:['React','LocalStorage'], demo:'#', desc:'A simple PWA to track expenses with charts.'},
    { title:'WeatherNow', img:'/src/assets/weather.webp', tags:['React','API'], demo:'#', desc:'Minimal weather app hitting a public API with caching.'},
    // { title:'Portfolio Template', img:'/src/assets/p5.svg', tags:['Vite','Tailwind'], demo:'#', desc:'The very site you are seeing – fast and responsive.'},
    // { title:'Node Auth Starter', img:'/src/assets/p6.svg', tags:['Node','Express','JWT'], demo:'#', desc:'Auth template with protected routes and role-based access.'}
  ]
}
