<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-12">
      <b-row>
        <b-col class="col-md-4" v-for="(i, index) in model" :key="index">
          <BookmarkCard :model="i"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    BookmarkCard: () => import("@/components/BookmarkCard.vue"),
  },
  data() {
    return {
      isInBookmark: false,
    };
  },
  computed: {
    ...mapState({
      model: (state) => state.Bookmark.model,
    }),
  },
  created: function () {
    this.getBookMarks();
  },
  methods: {
    ...mapActions({
      getBookMarks: "Bookmark/getBookMarks",
    }),
  },
};
</script>