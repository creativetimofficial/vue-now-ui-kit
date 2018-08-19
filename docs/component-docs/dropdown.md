# Dropdown

<hr>
To use the custom dropdown you need to import the custom made component:

```js
import {DropDown} from 'src/components'
```

Global usage
```js
Vue.component(DropDown)
```

For local usage
```js
export default {
  components: {
    DropDown
  }
}
```
:::warning
 **Note** Drop-down uses a click outside directive internally. You will get a warning if the directive is not imported.
You can find the declaration of this directive in `src/globalDirectives.js`
:::

### Simple

:::tip
You can specify the tag that the dropdown will be rendered with through the `tag` prop
:::


:::demo
```html
<template>
<drop-down tag="div" title="Simple">
  <a class="dropdown-item">Notification 1</a>
  <a class="dropdown-item">Notification 2</a>
  <a class="dropdown-item">Notification 3</a>
  <a class="dropdown-item">Notification 4</a>
  <a class="dropdown-item">Another notification</a>
</drop-down>
</template>

<script>
  export default {}
</script>
```
:::

### As button

:::demo
```html
<template>
<div>
  <div class="col-5">
    <drop-down>
      <n-button slot="title" type="primary" 
                class="dropdown-toggle" 
                data-toggle="dropdown"
                block round>
        Dropdown
      </n-button>
      <h6 class="dropdown-header">Dropdown header</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </drop-down>
  </div>
</div>
</template>

<script>
  export default {}
</script>
```
:::

### Split button dropdowns

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns,
but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.

:::demo
```html
<template>
  <div class="row">
    <div class="col-5">
      <drop-down class="btn-group">
        <template slot="title">
         <button type="button" class="btn btn-danger">Action</button>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
        </template>
        <h6 class="dropdown-header">Header</h6>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </drop-down>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


### DropDown Props
<props-table component-name="drop-down"/>

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the dropdown is opened/closed | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | content for dropdown menu |
|  title  | content for dropdown title|
