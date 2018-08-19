# Pagination

We took the Bootstrap pagination elements and customised them to fit the overall theme.
Besides the classic look, we also added the colour classes to offer more customisation.

<hr>
To use the custom radio buttons you need to import the custom made component:

```js
import {Pagination} from 'src/components'
```

Global usage

```js
Vue.component(Pagination.name, Pagination)
```

For local usage

```js
export default {
  components: {
    [Pagination.name]: Pagination
  }
}
```

## Simple pagination with v-model

:::demo
```html
<template>
   <n-pagination :page-count="10" v-model="defaultPagination"></n-pagination>
</template>

<script>
  export default {
    data () {
        return {
          defaultPagination: 1
        }
      }
  }
</script>
```
:::

## Colors

:::demo
```html
<template>
<div>
  <n-pagination type="danger" :page-count="10" v-model="defaultPagination"></n-pagination>
  <n-pagination type="success" :page-count="10" v-model="defaultPagination"></n-pagination>
  <n-pagination type="info" :page-count="10" v-model="defaultPagination"></n-pagination>
  <n-pagination type="warning" :page-count="10" v-model="defaultPagination"></n-pagination>
</div>
</template>

<script>
  export default {
    data () {
        return {
          defaultPagination: 1
        }
      }
  }
</script>
```
:::

### Pagination Props
<props-table component-name="n-pagination"/>

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes (default for v-model) | the updated value |

<script>
  module.exports = {
     data () {
      return {
        defaultPagination: 1
      }
    }
  }
</script>
