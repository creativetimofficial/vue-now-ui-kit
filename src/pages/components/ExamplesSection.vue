<template>
  <div class="section section-examples" data-background-color="black">
    <div class="space-50"></div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <router-link to="/landing" target="_blank">
            <img src="img/landing.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link
            to="/landing"
            class="btn btn-simple btn-primary btn-round"
            >View Landing Page
          </router-link>
        </div>
        <div class="col">
          <router-link to="/profile" target="_blank">
            <img src="img/profile.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link
            to="/profile"
            class="btn btn-simple btn-primary btn-round"
            >View Profile Page</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
