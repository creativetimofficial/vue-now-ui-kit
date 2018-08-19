### Vue CLI 3

**Vue Now UI Kit** is based on [Vue CLI 3](https://github.com/vuejs/vue-cli)
which is the easiest tool to get started with Vue.js.

### Adding plugins

You can add new Vue CLI plugins such as testing, pwa, graphql and more.

1. Make sure you have Vue CLI 3 installed `npm i -g @vue/cli`
2. Add a plugin in the project e.g `vue add @vue/pwa`
3. The plugin should automatically scaffold changes and add necessary dependencies.

You can also use Vue CLI UI

### Change brand colors

You will find all the branding colors inside `assets/sass/now-ui-kit/_variables.scss`
You can change them with a HEX value or with other predefined variables from `assets/sass/now-ui-kit/_variables.scss.`

### Adding new components

1. Go to `src/components` folder.
2. Add your `.vue` file. For styles, you can either add a new `.scss` file or simply declare the styles in your component.
We do have a special config inside `vue.config.js` which imports scss variables and mixins in every `.vue` or `.scss` file
automatically so you don't have to import it every time.
3. Import it and export it inside `src/components/index.js` file
4. You can now use it easily across the project by importing it `import {MyComponent} from '@/components'
