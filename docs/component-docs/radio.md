# Radio buttons

<hr>
To use the custom radio buttons you need to import the custom made component:

```js
import {Radio} from 'src/components'
```

Global usage

```js
Vue.component(Radio.name, Radio)
```

For local usage
```js
export default {
  components: {
    [Radio.name]: Radio
  }
}
```

## Custom radio buttons

:::demo
```html
<template>
  <div>
     <n-radio v-model="enabledRadio" label="1">Radio is off</n-radio>
     <n-radio v-model="enabledRadio" label="2">Radio is on</n-radio>

     <n-radio disabled v-model="disabledRadio" label="1">Disabled radio is off</n-radio>
     <n-radio disabled v-model="disabledRadio" label="2">Disabled radio is on</n-radio>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           enabledRadio: '2',
           disabledRadio: '2',
        }
      }
  }
</script>
```
:::

### Radio Props
<props-table component-name="n-radio"/>

### Radio Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |

<script>
  module.exports = {
     data () {
      return {
        enabledRadio: '2',
        disabledRadio: '2',
      }
    }
  }
</script>
