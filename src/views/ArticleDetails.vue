<template>
  <div align="center">
    <br />
    <a :href="articaleModel.short_url"
      ><h4 style="max-width: 50rem">{{ articaleModel.title }}</h4></a
    >

    <b-card
      class="col-8"
      style="max-width: 50rem"
      :img-src="articaleModel.multimedia[0].url"
      img-alt="Image"
    >
      <b-card-text>{{ articaleModel.abstract }} </b-card-text>
      <template #footer>
        <small class="text-muted" style="margin: 10px"
          >Published date :
          {{ articaleModel.published_date | formatDate }}</small
        >
        <small class="text-muted" style="margin: 10px"
          >Created date : {{ articaleModel.published_date | formatDate }}</small
        >
        <small class="text-muted" style="margin: 10px"
          >Updated date : {{ articaleModel.updated_date | formatDate }}</small
        >
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
  },

  created: function () {
    if (Object.keys(this.articaleModel).length == 0) {
      this.$router.go(-1);
    }
  },
};
</script>