// rollup.config.js
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'dist/cjs/index.js',
  plugins: [
    postcss({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      inject: true, // This will inject your CSS into your JS file
      extract: true,
    }),
    // ...other plugins
  ],
};