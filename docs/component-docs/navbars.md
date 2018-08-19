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

Navbar with links

:::demo
```html
<template>
  <navbar type="primary" class="z-index-high">
   <a class="navbar-brand" href="#">Navbar</a>
    <template slot="navbar-menu">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </template>
  </navbar>
</template>

<script>
  export default {}
</script>
```
:::


You may also utilize dropdowns in your navbar nav.
Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for
`.nav-item` and `.nav-link` as shown below.

:::demo
```html
<template>
  <navbar type="primary" class="z-index-high">
   <a class="navbar-brand" href="#">Navbar</a>
    <template slot="navbar-menu">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <drop-down tag="li" class="nav-item" title="Dropdown Link">
       
       <a class="dropdown-item" href="#">Action</a>
       <a class="dropdown-item" href="#">Another action</a>
       <a class="dropdown-item" href="#">Something else here</a>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
  export default {}
</script>
```
:::


### Forms

Place various form controls and components within a navbar with .form-inline.

:::demo
```html
<template>
  <navbar type="primary" class="z-index-high">
   <a class="navbar-brand" href="#">Brand</a>
    <template slot="navbar-menu">
      <li class="nav-item active">
          <a href="#pablo" class="nav-link">link</a>
      </li>
      <li class="nav-item">
          <a href="#pablo" class="nav-link">link</a>
      </li>
    </template>
    <form slot="after-menu" class="form-inline ml-auto" data-background-color>
        <fg-input addon-left-icon="now-ui-icons ui-1_email-85" placeholder="Your Email..."></fg-input>
    </form>
  </navbar>
</template>

<script>
  export default {}
</script>
```
:::

### How to enable Burger Menu

We created for you a class named `.burger-menu` and once it is applied to the tag body it will transform 
the navbar like it appears on the responsive mode and when you will open it will come from the right side or left side.
To make open from left side please add the class `.menu-on-left` also on the body tag.

```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>
  <body class="burger-menu">
    ...
  </body>
</html>
```

### Colored navbars

:::demo
```html
<template>
  <navbar v-for="type in types" :key="type"
          :type="type"
          :transparent="false"
          menu-classes="ml-auto"
          position="relative">
       <a class="navbar-brand" href="#">{{type}}</a>
       <template slot="navbar-menu">
         <li class="nav-item active">
           <a class="nav-link" href="#pablo">
             <i class="now-ui-icons objects_globe"></i>
             <p>Discover</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#pablo">
             <i class="now-ui-icons users_circle-08"></i>
             <p>Profile</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#pablo">
             <i class="now-ui-icons ui-1_settings-gear-63"></i>
             <p>Settings</p>
           </a>
         </li>
        </template>
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

### Placement

Use our position utilities to place navbars in non-static positions.
Choose from fixed to the top, fixed to the bottom, or stickied to the top 
(scrolls with the page until it reaches the top, then stays there). 
Fixed navbars use `position: fixed`, meaning they’re pulled from the normal flow of 
the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that `.sticky-top` uses `position: sticky`, which 
[isn’t fully supported in every browser.](https://caniuse.com/#feat=css-sticky)


:::demo
```html
<template>
  <navbar type="primary" class="z-index-high">
   <a class="navbar-brand" href="#">Default</a>
  </navbar>
</template>

<script>
  export default {}
</script>
```
:::

:::demo
```html
<template>
    <div class="demo-container bd-example">
     <navbar type="primary" class="fixed-top">
       <a class="navbar-brand" href="#">Fixed Top</a>
      </navbar>
    </div>
</template>

<script>
  export default {}
</script>
```
:::

:::demo
```html
<template>
  <div class="demo-container bd-example">
   <navbar type="primary" class="fixed-bottom">
     <a class="navbar-brand" href="#">Fixed Bottom</a>
    </navbar>
  </div>
</template>

<script>
  export default {}
</script>
```
:::

:::demo
```html
<template>
  <div class="demo-container bd-example">
   <navbar type="primary" class="sticky-top">
     <a class="navbar-brand" href="#">Sticky Top</a>
    </navbar>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


### Responsive behaviors

Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and 
`.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button. 
In combination with other utilities, you can easily choose when to show or hide particular elements.
These classes can be also added with the help of `expand` prop.
E.g `expand="md"`

For navbars that never collapse, add the `.navbar-expand` class on the navbar. 
For navbars that always collapse, don’t add any `.navbar-expand` class.
Note that we already integrated a toggler button inside our `Navbar` component so you don't have to worry 
about adding it. It will simply appear on small screens.

### Navbar Props
<props-table component-name="navbar"/>

### Navbar Slots
| Name | Description |
|---------- |-------- |
|  default  | Navbar left side content (brand and toggle button )|
|  navbar-menu  | Content of the navbar (right on desktop, dropdown menu on mobile) |


### Navbar Toggle Button Props
<props-table component-name="navbar-toggle-button"/>
