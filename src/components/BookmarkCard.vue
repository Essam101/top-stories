<template>
  <div align="center">
    <b-card tag="article" class="mb-5">
      <b-card-img
        @click="openArticle()"
        :src="imageUrl"
        class="mb-5"
        height="200"
      ></b-card-img>
      <h5 @click="openArticle()">{{ title }} ......</h5>

      <template #footer>
        <span class="col-sm-4">
          <b-icon icon="arrow-right" @click="openArticle()"></b-icon
        ></span>
        <span class="col-sm-4">
          <b-icon
            icon="bookmark-heart-fill"
            style="margin-left: 100px"
            @click="removeFromBookmark()"
          ></b-icon>
        </span>
      </template>
    </b-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    model: {
      type: Object,
    },
  },
  created: function () {
    this.getBookmarks();
  },

  computed: {
    imageUrl: function () {
      if (this.model.multimedia.length > 0) return this.model.multimedia[0].url;
      return "";
    },
    title: function () {
      if (this.model.title.length > 30)
        return this.model.title.substring(0, 30);
      return this.model.title;
    },
  },
  methods: {
    ...mapActions({
      removeArticle: "Bookmark/removeArticle",
      getBookmarks: "Bookmark/getBookmarks",
      articleDetails: "Home/articleDetails",
    }),
    removeFromBookmark() {
      this.removeArticle(this.model);
      this.getBookmarks();
    },
    openArticle() {
      console.log(this.model.title.trim());
      this.$router.push({
        path: `articleDetails`,
      });
      this.articleDetails(this.model);
    },
  },
};
</script>
 