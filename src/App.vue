<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle
        fixed="center"
        target="nav-text-collapse"
      ></b-navbar-toggle>
      <b-navbar-brand class="pr-5"
        >Top Stories
        <span class="subtitle">by New York Times</span></b-navbar-brand
      >
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <!--home click-->
          <b-nav-item
            to="/home"
            v-if="path == '/' || path == '/home'"
            @click="getAnotherSection('home')"
            active
          >
            Home
          </b-nav-item>
          <b-nav-item v-else to="/home" @click="getAnotherSection('home')">
            Home
          </b-nav-item>
          <!--end-->

          <!--bookmark click-->
          <b-nav-item v-if="path == '/bookmarks'" to="/bookmarks" active>
            Bookmarks
          </b-nav-item>
          <b-nav-item v-else @click="activeMenu('/bookmarks')" to="/bookmarks">
            Bookmarks
          </b-nav-item>
          <!--end-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      path: this.$route.path,
    };
  },
  methods: {
    ...mapActions({
      getHomeModel: "Home/getHomeModel",
    }),
    async getAnotherSection(urlQurey) {
      this.activeMenu("/home");
      this.$router.push({ path: "home", query: { section: urlQurey } });
      await this.getHomeModel();
    },
    activeMenu(path) {
      this.path = path;
    },
  },
};
</script>
 <style scoped>
.subtitle {
  font-size: 10px;
}
</style>
 