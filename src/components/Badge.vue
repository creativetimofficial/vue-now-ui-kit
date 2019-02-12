<template>
  <component
    :is="componentTag"
    class="badge"
    :class="`badge-${type}`"
    :href="href"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'badge',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    href: String,
    type: {
      type: String,
      default: 'default',
      validator: value => {
        let acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'default',
          'neutral'
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    componentTag() {
      return this.href ? 'a' : this.tag;
    }
  }
};
</script>
<style></style>
