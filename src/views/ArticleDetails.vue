<template>
  <div align="center" style="margin: 15px">
    <a :href="articaleModel.short_url"
      ><h4 style="max-width: 40rem">{{ articaleModel.title }}</h4></a
    >

    <b-card
      class="col-md-6"
      img-height="600"
      :img-src="imageUrl"
      img-alt="Image"
    >
      <b-card-text>{{ articaleModel.abstract }} </b-card-text>
      <template #footer class="row">
        <div class="row">
          <span class="col-md-4"
            >Published date :
            {{ articaleModel.published_date | formatDate }}</span
          >
          <span class="col-md-4"
            >Created date :
            {{ articaleModel.published_date | formatDate }}</span
          >
          <span class="col-md-4"
            >Updated date : {{ articaleModel.updated_date | formatDate }}</span
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
      articaleModel: (state) => state.Home.articaleModel,
    }),
    imageUrl: function () {
      if (this.articaleModel.multimedia != null)
        if (this.articaleModel.multimedia.length > 0)
          return this.articaleModel.multimedia[0].url;
      return "";
    },
  },
  created: function () {
    if (Object.keys(this.articaleModel).length == 0) {
      this.$router.go(-1);
    }
  },
};
</script>