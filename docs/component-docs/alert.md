# Alert

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

<hr>

```js
import {Alert} from 'src/components'
```

Global usage

```js
Vue.component(Alert)
```

For local usage
```js
export default {
  components: {
    Alert
  }
}
```

## Sample alerts

Alerts are available for any length of text, as well as an optional dismiss button.
For proper styling, use one of the eight required contextual type props (e.g., `type="success"`).

:::demo
```html
<template>
  <div>
    <alert type="primary">This is a primary alert—check it out!</alert>
    <alert type="success">This is a success alert—check it out!</alert>
    <alert type="info">This is a info alert—check it out!</alert>
    <alert type="warning">This is a warning alert—check it out!</alert>
    <alert type="danger">This is a danger alert—check it out!</alert>
  </div>
</template>

<script>
  export default {}
</script>
```
:::

## Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

:::demo
```html
<template>
  <div>
    <alert type="primary">This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</alert>
    <alert type="success">This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</alert>
    <alert type="info">This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</alert>
    <alert type="warning">This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</alert>
    <alert type="danger">This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</alert>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Dismissing

You can dismiss alerts, by providing a `dismissible` prop. When clicking the `X` icon, the alert will disappear.

:::demo
```html
<template>
  <div>
      <alert type="success" dismissible>
        <div class="alert-icon">
              <i class="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> You successfully read this important alert message.
      </alert>
  </div>
</template>

<script>
  export default {}
</script>
```
:::

<props-table component-name="alert"/>

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for the alert |
|  dismiss-icon  | Content to replace default dismiss icon |
