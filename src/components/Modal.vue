<template>
  <SlideYUpTransition :duration="animationDuration">
    <div
      class="modal fade"
      @click.self="closeModal"
      :class="[
        { 'show d-block': show },
        { 'd-none': !show },
        { 'modal-mini': type === 'mini' }
      ]"
      v-show="show"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
    >
      <div
        class="modal-dialog"
        :class="[{ 'modal-notice': type === 'notice' }, modalClasses]"
      >
        <div class="modal-content">
          <slot name="base-content">
            <div class="modal-header" :class="headerClasses">
              <slot name="close-button">
                <button
                  type="button"
                  v-if="showClose"
                  @click="closeModal"
                  class="close"
                  data-dismiss="modal"
                  :aria-hidden="!show"
                >
                  <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
              </slot>
              <slot name="header"></slot>
            </div>

            <div class="modal-body" :class="bodyClasses">
              <slot></slot>
            </div>

            <div class="modal-footer" :class="footerClasses">
              <slot name="footer"></slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </SlideYUpTransition>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions';

export default {
  name: 'modal',
  components: {
    SlideYUpTransition
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        let acceptedValues = ['', 'notice', 'mini'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    modalClasses: [Object, String],
    headerClasses: [Object, String],
    bodyClasses: [Object, String],
    footerClasses: [Object, String],
    animationDuration: {
      type: Number,
      default: 500
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
      this.$emit('close');
    }
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;
      if (val) {
        documentClasses.add('modal-open');
      } else {
        documentClasses.remove('modal-open');
      }
    }
  }
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
