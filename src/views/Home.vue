<template>
  <div>
    <b-nav tabs align="center">
      <b-navbar-brand active>{{ model.section }}</b-navbar-brand>
      <b-nav-item @click="getAnotherSection('home')">home</b-nav-item>
      <b-nav-item @click="getAnotherSection('arts')">arts</b-nav-item>
      <b-nav-item @click="getAnotherSection('automobiles')"
        >automobiles</b-nav-item
      >
      <b-nav-item @click="getAnotherSection('books')">books</b-nav-item>
      <b-nav-item @click="getAnotherSection('business')"> business</b-nav-item>
      <b-nav-item @click="getAnotherSection('fashion')">fashion</b-nav-item>
      <b-nav-item @click="getAnotherSection('food')">food</b-nav-item>
      <b-nav-item @click="getAnotherSection('health')">health</b-nav-item>
      <b-nav-item @click="getAnotherSection('insider')">insider</b-nav-item>
      <b-nav-item @click="getAnotherSection('magazine')">magazine</b-nav-item>
      <b-nav-item @click="getAnotherSection('movies')"> movies</b-nav-item>
      <b-nav-item @click="getAnotherSection('obituaries')"
        >obituaries</b-nav-item
      >
      <b-nav-item-dropdown text="more" right>
        <b-dropdown-item @click="getAnotherSection('obituaries')"
          >obituaries</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('opinion')"
          >opinion</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('politics')"
          >politics</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('realestate')"
          >realestate</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('science')"
          >science</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('sports')"
          >sports</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('sundayreview')"
          >sundayreview</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('technology')"
          >technology</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('theater')"
          >theater</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('travel')"
          >travel</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('upshot')"
          >upshot</b-dropdown-item
        >
        <b-dropdown-item @click="getAnotherSection('us')">us</b-dropdown-item>
        <b-dropdown-item @click="getAnotherSection('world')"
          >world</b-dropdown-item
        >
      </b-nav-item-dropdown>
    </b-nav>
    <br />
    <div align="center">
      <NewsCard
        v-for="(i, index) in model.results"
        :key="index"
        :model="i"
        align="center"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    NewsCard: () => import("@/components/NewsCard.vue"),
  },
  computed: {
    ...mapState({
      model: (state) => state.Home.homeModel,
    }),
    imageUrl: function () {
      return "active";
    },
  },
  created: function () {
    this.getHomeModel();
  },
  methods: {
    ...mapActions({
      getHomeModel: "Home/getHomeModel",
    }),
    async getAnotherSection(urlQurey) {
      this.$router.push({ path: "home", query: { section: urlQurey } });
      await this.getHomeModel(urlQurey + ".json");
    },
  },
};
</script>

 