<template>
  <div align="center" style="margin: 15px">
    <a :href="articleModel.short_url"
      ><h4 style="max-width: 40rem">{{ articleModel.title }}</h4></a
    >

    <b-card
      class="col-md-6"
      img-height="600"
      :img-src="imageUrl"
      img-alt="Image"
    >
      <b-card-text>{{ articleModel.abstract }} </b-card-text>
      <template #footer class="row">
        <div class="row">
          <span class="col-md-4"
            >Published date :
            {{ articleModel.published_date | formatDate }}</span
          >
          <span class="col-md-4"
            >Created date :
            {{ articleModel.published_date | formatDate }}</span
          >
          <span class="col-md-4"
            >Updated date : {{ articleModel.updated_date | formatDate }}</span
          >
        </div>
      </template>
    </b-card>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      articleModel: (state) => state.Home.articleModel,
    }),
    imageUrl: function () {
      if (this.articleModel.multimedia != null)
        if (this.articleModel.multimedia.length > 0)
          return this.articleModel.multimedia[0].url;
      return "";
    },
  },
  created: function () {
    if (Object.keys(this.articleModel).length == 0) {
      this.$router.go(-1);
    }
  },
};
</script>