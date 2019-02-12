<template>
  <ul class="pagination" :class="paginationClass">
    <li
      class="page-item prev-page"
      :class="[{ disabled: value === 1 }, prevItemClasses]"
    >
      <a class="page-link" aria-label="Previous" @click="prevPage">
        <slot name="prev">»</slot>
      </a>
    </li>
    <li
      class="page-item"
      v-for="item in range(minPage, maxPage)"
      :key="item"
      :class="[{ active: value === item }, itemClasses]"
    >
      <a class="page-link" @click="changePage(item)">{{ item }}</a>
    </li>
    <li
      class="page-item page-pre next-page"
      :class="[{ disabled: value === totalPages }, nextItemClasses]"
    >
      <a class="page-link" aria-label="Next" @click="nextPage">
        <slot name="next">»</slot>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'n-pagination',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: value => {
        return [
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value);
      }
    },
    pageCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    },
    prevItemClasses: [String, Object],
    itemClasses: [String, Object],
    nextItemClasses: [String, Object]
  },
  computed: {
    paginationClass() {
      return `pagination-${this.type}`;
    },
    totalPages() {
      if (this.pageCount > 0) return this.pageCount;
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }
      return 1;
    },
    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }
      return this.defaultPagesToDisplay;
    },
    minPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }
        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;
        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }
  },
  data() {
    return {
      defaultPagesToDisplay: 5
    };
  },
  methods: {
    range(min, max) {
      let arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
    changePage(item) {
      this.$emit('input', item);
    },
    nextPage() {
      if (this.value < this.totalPages) {
        this.$emit('input', this.value + 1);
      }
    },
    prevPage() {
      if (this.value > 1) {
        this.$emit('input', this.value - 1);
      }
    }
  },
  watch: {
    perPage() {
      this.$emit('input', 1);
    },
    total() {
      this.$emit('input', 1);
    }
  }
};
</script>
