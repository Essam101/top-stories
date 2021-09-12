<template>
  <div>
    <b-card
      :title="model.title"
      img-top
      tag="article"
      class="mb-5"
      img-height="200"
      :img-src="imageUrl"
    >
      <b-card-text>{{ model.abstract }} </b-card-text>

      <template #footer>
        <small class="text-muted">
          <b-card-body>
            <b-icon icon="arrow-right" @click="atricaleDetails()"></b-icon
            ><b-icon
              icon="bookmark-heart-fill"
              style="margin-left: 100px"
              @click="removeFromBookmark()"
            ></b-icon> </b-card-body
        ></small>
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
    this.getBookMarks();
  },

  computed: {
    imageUrl: function () {
      if (this.model.multimedia.length > 0) return this.model.multimedia[0].url;
      return "";
    },
  },
  methods: {
    ...mapActions({
      removeAtrical: "Bookmark/removeAtrical",
      getBookMarks: "Bookmark/getBookMarks",
      articaleDetails: "Home/articaleDetails",
    }),
    removeFromBookmark() {
      this.removeAtrical(this.model);
      this.getBookMarks();
    },
    atricaleDetails() {
      console.log(this.model.title.trim());
      this.$router.push({
        path: `articleDetails`,
      });
      this.articaleDetails(this.model);
    },
  },
};
</script>
 