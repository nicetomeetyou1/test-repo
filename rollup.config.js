// rollup.config.js
import postcss from 'rollup-plugin-postcss';

export default {
  // ...other Rollup config
  plugins: [
    postcss({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      inject: true, // This will inject your CSS into your JS file
      extract: false,
    }),
    // ...other plugins
  ],
};