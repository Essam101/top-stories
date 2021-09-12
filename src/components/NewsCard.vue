<template>
  <b-card v-if="model" tag="article" style="max-width: 50rem" class="mb-3">
    <b-card-img
      @click="atricaleDetails()"
      :src="imageUrl"
      style="max-width: 50rem"
      class="mb-3"
      height="400"
    ></b-card-img>

    <h4 @click="atricaleDetails()">{{ model.title }}</h4>

    <template #footer>
      <span>Published date : {{ model.created_date | formatDate }}</span>
      <span v-if="isInBookmark"
        ><b-icon
          icon="bookmark-heart-fill"
          style="margin-left: 100px"
          @click="removeFromBookmark()"
        ></b-icon
      ></span>
      <span v-else>
        <b-icon
          icon="bookmark-heart"
          @click="addToBookmark()"
          style="margin-left: 100px"
        ></b-icon>
      </span>
    </template>
  </b-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isInBookmark: false,
      bookMarks: {},
      cats: [],
      newCat: null,
    };
  },
  computed: {
    imageUrl: function () {
      if (this.model.multimedia != null)
        if (this.model.multimedia.length > 0)
          return this.model.multimedia[0].url;
      return "";
    },
  },
  props: {
    model: {
      type: Object,
    },
  },
  created: function () {
    this.getBookMarks();
    this.isInBookmarks(this.model.uri).then((val) => (this.isInBookmark = val));
  },
  mounted() {
    if (localStorage.getItem("bookmarks")) {
      try {
        this.bookMarks = JSON.parse(localStorage.getItem("bookmarks"));
      } catch (e) {
        localStorage.removeItem("bookmarks");
      }
    }
  },
  methods: {
    ...mapActions({
      isInBookmarks: "Bookmark/isInBookmarks",
      addArtical: "Bookmark/addArtical",
      removeAtrical: "Bookmark/removeAtrical",
      getBookMarks: "Bookmark/getBookMarks",
      articaleDetails: "Home/articaleDetails",
    }),
    addToBookmark() {
      this.addArtical(this.model);
      this.checkIfInBookmark();
    },
    removeFromBookmark() {
      this.removeAtrical(this.model);
      this.checkIfInBookmark();
    },
    checkIfInBookmark() {
      this.getBookMarks();
      this.isInBookmarks(this.model.uri).then(
        (val) => (this.isInBookmark = val)
      );
    },
    atricaleDetails() {
      this.$router.push({
        path: `articleDetails`,
      });
      this.articaleDetails(this.model);
    },
  },
};
</script>
 