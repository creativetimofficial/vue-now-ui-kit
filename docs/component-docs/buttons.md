# Button

<component-status component-name="Button"/>

<hr>

To use the custom button you need to import the custom made component:

```js
import {Button} from 'src/components'
```

Global usage

```js
Vue.component(Button.name, Button)
```

For local usage
```js
export default {
  components: {
    [Button.name]: Button
  }
}
```

## Colors

Paper Dashboard PRO has changed the predefined button styles from Bootstrap, each serving its own semantic purpose, with a few extras thrown in for more control.
:::demo
```html

<template>
  <div>
    <n-button type="default">Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="danger">Danger</n-button>
    <n-button type="neutral">Neutral</n-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Style buttons
:::demo
```html

<template>
  <div style="display: flex">
   <n-button type="primary">Default</n-button>
   <n-button type="primary" round>Round</n-button>
   <n-button type="primary" icon round>
     <i class="fa fa-heart"></i>
   </n-button>
   <n-button type="primary" outline round>
     <i class="fa fa-heart"></i> with icon
   </n-button>

   <n-button type="primary" link>
     link
   </n-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Sizes

Fancy larger or smaller buttons? Add `size="lg"` or `size="sm"` for additional sizes.

:::demo
```html

<desc>
</desc>
<template>
  <div>
    <n-button type="primary" size="lg">Large</n-button>
    <n-button type="primary" >Normal</n-button>
    <n-button type="primary" size="sm">Small</n-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Extra mile
We added extra classes mapped directly to props that can help you better customise the look. You can use regular buttons, filled buttons, right-pulled buttons, buttons that span over the entire given space or plain simple link like buttons. Let's see some examples:

:::demo
```html

<template>
  <div>
    <n-button type="primary" simple>Simple</n-button>
    <n-button type="primary" wide>Wide</n-button>
    <n-button type="success" block>Block</n-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::



 <props-table component-name="n-button"/>
