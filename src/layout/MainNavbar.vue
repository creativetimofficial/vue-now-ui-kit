<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/">
        <b-img :src="$root.$data.app_logo" rounded :alt="$root.$data.app_name"></b-img>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link btn btn-primary" to="/account/signin" style="font-weight: 600;padding: 8px 20px;">
          <p>Sign In</p>
        </router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
