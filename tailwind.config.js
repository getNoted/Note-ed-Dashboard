module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'trans-col' : 'rgba(255, 255, 255, 0.6)' ,
        'new-green': '#C5F1FA',
        'new-blue': "rgb(176, 201, 252)",
        'light-green' : '#EBFCFF'
      },
    },
  },
 
  plugins: [
    require('flowbite/plugin')
  ]
}