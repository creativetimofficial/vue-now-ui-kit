<template>
  <div class="section section-pagination">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Progress Bars</h4>
          <n-progress :value="25" label="Default" show-value> </n-progress>
          <n-progress type="primary" :value="60" label="Default" show-value>
          </n-progress>
          <h4>Navigation Pills</h4>
          <tabs pills tab-nav-classes="nav-pills-just-icons" type="primary">
            <tab-pane>
              <i slot="label" class="far fa-gem"></i>
            </tab-pane>
            <tab-pane>
              <i slot="label" class="fa fa-thermometer-full"></i>
            </tab-pane>
            <tab-pane>
              <i slot="label" class="fa fa-suitcase"></i>
            </tab-pane>
            <tab-pane disabled>
              <i slot="label" class="fa fa-exclamation"></i>
            </tab-pane>
          </tabs>
        </div>
        <div class="col-md-6">
          <h4>Pagination</h4>
          <n-pagination
            type="primary"
            :page-count="10"
            v-model="pagination.simple"
          >
          </n-pagination>

          <n-pagination
            type="default"
            :page-count="10"
            v-model="pagination.default"
          >
          </n-pagination>

          <br />
          <h4>Labels</h4>
          <badge type="default">Default</badge>
          <badge type="primary">Primary</badge>
          <badge type="success">Success</badge>
          <badge type="info">Info</badge>
          <badge type="warning">Warning</badge>
          <badge type="danger">Danger</badge>
          <badge type="neutral">Neutral</badge>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress, Pagination, Badge, Tabs, TabPane } from '@/components';

export default {
  components: {
    [Progress.name]: Progress,
    [Pagination.name]: Pagination,
    Badge,
    Tabs,
    TabPane
  },
  data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3
      }
    };
  }
};
</script>
<style></style>
