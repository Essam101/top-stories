<template>
  <div>
    <b-nav tabs align="center">
      <div v-for="(i, index) in sections" :key="index">
        <b-nav-item v-if="i == query" active>{{ i }}</b-nav-item>
        <b-nav-item v-else @click="getAnotherSection(i)">{{ i }}</b-nav-item>
      </div>
      <b-nav-item-dropdown text="more" right>
        <div
          v-for="(i, index) in dropDownSections"
          :key="index"
          @click="getAnotherSection(i)"
        >
          <b-dropdown-item v-if="i == query" active>{{ i }}</b-dropdown-item>
          <b-dropdown-item v-else @click="getAnotherSection(i)">{{
            i
          }}</b-dropdown-item>
        </div>
      </b-nav-item-dropdown>
    </b-nav>
    <br />

    <div align="center">
      <b-spinner variant="primary" v-if="isLoading"> </b-spinner>
      <NewsCard
        v-else
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
  data() {
    return { query: this.$route.query["section"] };
  },
  name: "App",
  components: {
    NewsCard: () => import("@/components/NewsCard.vue"),
  },
  computed: {
    ...mapState({
      model: (state) => state.Home.homeModel,
      isLoading: (state) => state.Home.isLoading,
      sections: (state) => state.Home.sections,
      dropDownSections: (state) => state.Home.dropDownSections,
    }),
  },
  created: function () {
    this.getHomeModel();
  },
  methods: {
    ...mapActions({
      getHomeModel: "Home/getHomeModel",
      getBookmarks: "Bookmark/getBookmarks",
    }),
    async getAnotherSection(urlQurey) {
      if (!this.isLoading) {
        this.query = urlQurey;
        this.$router.push({ path: "home", query: { section: urlQurey } });
        await this.getHomeModel();
      }
    },
  },
};
</script>

 