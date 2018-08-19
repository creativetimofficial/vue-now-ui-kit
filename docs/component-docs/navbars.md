# Navbars

Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

Here’s what you need to know before getting started with the navbar:

<ul>
  <li>Navbars require a wrapping <code class="highlighter-rouge">.navbar</code> with <code class="highlighter-rouge">.navbar-expand{-sm|-md|-lg|-xl}</code> for responsive collapsing and <a href="#color-schemes">color scheme</a> classes.</li>
  <li>Navbars and their contents are fluid by default. Use <a href="#containers">optional containers</a> to limit their horizontal width.</li>
  <li>Use our <a href="/docs/1.0/utilities/spacing/">spacing</a> and <a href="/docs/1.0/utilities/flex/">flex</a> utility classes for controlling spacing and alignment within navbars.</li>
  <li>Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.</li>
  <li>Navbars are hidden by default when printing. Force them to be printed by adding <code class="highlighter-rouge">.d-print</code> to the <code class="highlighter-rouge">.navbar</code>. See the <a href="/docs/1.0/utilities/display/">display</a> utility class.</li>
  <li>Ensure accessibility by using a <code class="highlighter-rouge">&lt;nav&gt;</code> element or, if using a more generic element such as a <code class="highlighter-rouge">&lt;div&gt;</code>, add a <code class="highlighter-rouge">role="navigation"</code> to every navbar to explicitly identify it as a landmark region for users of assistive technologies.</li>
  <li>You need a `sidebar-collapse` class on document body in order to make the navbars work properly on mobile</li>
</ul>

You don't have to worry about most of the points above because we created a custom Navbar component
that is simple to use. It's good to know all the details, just in case you want to customize this component.

<script>
module.exports = {
  data() {
    return {
      types: ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info']
    }
  },
  methods: {
    toggleNavbar() {
      // applies on mobile only
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    }
  },
  mounted() {
    document.body.classList.add('sidebar-collapse')
  }
}
</script>

<hr>
To use the navbar, first import it:

```js
import {Navbar} from 'src/components'
```

Global usage

```js
Vue.component(Navbar)
```

Local usage

```js
export default {
 components: {
   Navbar
 }
}
```

### Primary navbar

:::tip
 `showMenu` property applies only on small viewport (mobile). Shrink the browser to see that in action
:::

:::demo
```html
<template>
  <navbar type="primary" menu-classes="ml-auto" class="z-index-high">
    <template slot-scope="{toggle, isToggled}">
      <div class="navbar-translate">
        <a href="#">Navbar</a>
      </div>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="#pablo"><i class="now-ui-icons ui-1_send"
          aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pablo"><i class="now-ui-icons users_single-02"
          aria-hidden="true"></i></a>
      </li>
    </template>
  </navbar>
</template>

<script>
  export default {}
</script>
```
:::

:::tip
 You can change navbar color with the `type` prop.
:::
## Colored navbars

:::demo
```html
<template>
  <navbar v-for="type in types" :key="type"
          :type="type"
          :transparent="false"
          position="relative">
       <a class="navbar-brand" href="#">{{type}}</a>
   </navbar>
</template>

<script>
  export default {
    data(){
      return {
        types: ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info']
      }
    }
  }
</script>
```
:::


### Navbar Props
<props-table component-name="navbar"/>

### Navbar Slots
| Name | Description |
|---------- |-------- |
|  default  | Navbar left side content (brand and toggle button )|
|  navbar-menu  | Content of the navbar (right on desktop, dropdown menu on mobile) |


### Navbar Toggle Button Props
<props-table component-name="navbar-toggle-button"/>
