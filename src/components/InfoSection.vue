<template>
    <div class="info" :class="`info-${direction}`">
        <div class="icon" :class="[`icon-${type}`, iconClasses]" v-if="$slots.icon || icon">
            <slot name="icon">
                <i :class="icon"></i>
            </slot>
        </div>
        <div class="description" v-if="$slots.default || title">
            <slot>
                <h4 class="info-title">{{title}}</h4>
                <p class="description">{{description}}</p>
            </slot>
        </div>
        <slot name="raw-content"></slot>
    </div>
</template>
<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal'
      },
      type: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconClasses: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
</script>
