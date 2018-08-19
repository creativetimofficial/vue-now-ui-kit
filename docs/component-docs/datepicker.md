# Date Pickers

<hr>

We have created a date picker starting from the element-ui date picker. We have changed the colours, typography and buttons, so it can look like the rest of the dashboard.

Please check out date-picker docs for detailed info as well as ExtendedForms.vue page to see some examples. Below is a very simple example
```js
import {DatePicker} from 'element-ui'
```
Global usage
```js
Vue.use(DatePicker)
```

For local usage
```js
export default {
  components: {
    [DatePicker.name]: DatePicker
  }
}
```

### Date picker with shortcuts

:::tip
Wrap the date-picker in a `fg-input` component in order to have an input similar to the ones in the dashboard
:::
:::demo
```html
<template>
  <fg-input>
  <el-date-picker v-model="datePicker"
                    type="date"
                    placeholder="Pick a day"
                    :picker-options="pickerOptions1">
    </el-date-picker>
</fg-input>
</template>

<script>
  export default {
    data() {
      return {
          pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        datePicker: ''
       }
    }
  }
</script>
```
:::

### Now UI styled date picker

:::demo
```html
<template>
  <fg-input>
  <el-date-picker v-model="datePicker"
                   popper-class="date-picker-primary"
                    type="date"
                    placeholder="Select date">
    </el-date-picker>
</fg-input>
</template>

<script>
  export default {
    data() {
      return {
        datePicker: ''
       }
    }
  }
</script>
```
:::


For props, slots & events, please check [element ui docs](http://element.eleme.io/#/en-US/component/date-picker)

<script>
module.exports = {
  data(){
    return {
      dateTimePicker: '',
      datePicker: '',
      timePicker: '',
      pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
    }
  }
}
</script>
