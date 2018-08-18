<template>
  <component :is="tag"
             :type="nativeType"
             class="btn"
             :class="classes">
    <span class="btn-label" v-if="$slots.label">
      <slot name="label"></slot>
    </span>
    <slot></slot>
    <span class="btn-label btn-label-right" v-if="$slots.labelRight">
      <slot name="labelRight"></slot>
    </span>
  </component>
</template>
<script>
  export default {
    name: 'n-button',
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'default'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      round: Boolean,
      simple: Boolean,
      block: Boolean,
      social: Boolean,
      link: Boolean,
      icon: Boolean,
      wide: Boolean,
      size: String
    },
    computed: {
      classes() {
        let btnClasses = [
          {'btn-simple': this.simple},
          {'btn-icon': this.icon},
          {'btn-round': this.round},
          {'btn-block': this.block},
          {'btn-social': this.social},
          {'btn-link': this.link},
          {'btn-wd': this.wide},
          `btn-${this.type}`
        ];
        if (this.size) {
          btnClasses.push(`btn-${this.size}`)
        }
        return btnClasses
      }
    }
  }
</script>
<style>
</style>
