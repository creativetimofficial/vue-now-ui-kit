<template>
    <navbar menu-classes="ml-auto" type="primary" class="main-nav">
        <template slot-scope="{toggle, isToggled}">
            <router-link v-popover:popover1 class="navbar-brand" to="/presentation">
                Vue Now Ui Kit
            </router-link>
            <el-popover
                    ref="popover1"
                    popper-class="popover"
                    placement="bottom"
                    width="200"
                    trigger="hover">
                <div class="popover-body">Designed by Invision. Coded by Creative Tim</div>
            </el-popover>
            <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a class="nav-link active" href="/"><i class="now-ui-icons text_align-left"></i> Documentation</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/vue-now-ui-kit"><i class="now-ui-icons tech_tv"></i> Live Preview</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/creativetimofficial/ct-vue-now-ui-kit/issues" target="_blank" rel="noopener"><i class="now-ui-icons ui-2_settings-90"></i> Report Issue</a>
            </li>
            <SearchBox v-if="$site.themeConfig.search !== false"/>
        </template>
    </navbar>
</template>
<script>
  import SearchBox from '../../node_modules/vuepress/lib/default-theme/SearchBox.vue';
  import SidebarButton from '../../node_modules/vuepress/lib/default-theme/SidebarButton.vue';

  export default {
    components: {
      SearchBox,
      SidebarButton
    },
    mounted() {
      document.body.classList.add('sidebar-collapse')
    }
  }
</script>
<style lang="scss">
    nav.main-nav {
      z-index: 50;
        &.navbar {
            position: fixed;
            .container {
                max-width: 100%;
                width: 100%;
            }
        }

        &.navbar .search-box .suggestion a {
            color: inherit;
        }
    }
</style>
