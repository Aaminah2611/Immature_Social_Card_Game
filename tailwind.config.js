module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
        colors: {
          'teal-blue': '#10e7dc',
          'deep-blue': '#0074e1',
          'sea-blue': '#1b9ce5',
          'pale-blue': '#6cdaee',
          'new-orange': '#f79e02',
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }