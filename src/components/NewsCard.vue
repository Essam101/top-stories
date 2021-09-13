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
      <span v-if="isInBookmarks()"
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isInBookmark: false,
    };
  },
  computed: {
    imageUrl: function () {
      if (this.model.multimedia != null)
        if (this.model.multimedia.length > 0)
          return this.model.multimedia[0].url;
      return "";
    },
    ...mapState({
      bookmarkModel: (state) => state.Bookmark.model,
    }),
  },
  props: {
    model: {
      type: Object,
    },
  },
  created: function () {
    this.getBookMarks();
  },
  methods: {
    ...mapActions({
      addArtical: "Bookmark/addArtical",
      removeAtrical: "Bookmark/removeAtrical",
      getBookMarks: "Bookmark/getBookMarks",
      articleDetails: "Home/articleDetails",
    }),
    addToBookmark() {
      this.addArtical(this.model);
      this.isInBookmarks();
    },
    removeFromBookmark() {
      this.removeAtrical(this.model);
      this.isInBookmarks();
    },
    atricaleDetails() {
      this.$router.push({
        path: `articleDetails`,
      });
      this.articleDetails(this.model);
    },

    // here I get the object from the local storage so I can check if this article is in the bookmark object or not
    isInBookmarks() {
      return this.bookmarkModel[this.model.uri] != null;
    },
  },
};
</script>
 