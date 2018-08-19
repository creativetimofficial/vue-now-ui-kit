# Slider

<hr>
We used nouislider Sliders and restyled them
To use it, import it from components

```js
import {Slider} from 'src/components'
```

Global usage

```js
Vue.use(Slider.name, Slider)
```

For local usage

```js
export default {
  components: {
    [Slider.name]: Slider
  }
}
```

### Simple slider with v-model
:::tip
You can add one of select-`default|primary|info|danger|warning` classes to customize the color
of the slider.
:::

:::demo
```html
<template>
  <slider class="slider-success"
             v-model="simple">
  </slider>
</template>
<script>
  export default {
    data() {
      return {
      simple: 30,
      }
    }
  }
</script>
```
:::

### Range slider

:::demo
```html
<template>
 <slider class="slider-info"
         v-model="rangeSlider"
         :connect="true"
         type="primary">
 </slider>
</template>

<script>
  export default {
    data() {
      return {
        rangeSlider: [20, 50]
       }
    }
  }
</script>
```
:::


### Slider Props
<props-table component-name="slider"/>


<script>
  module.exports = {
     data () {
      return {
        rangeSlider: [20, 50],
        simple: 30,
      }
    }
  }
</script>
