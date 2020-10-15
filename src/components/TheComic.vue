<template>
  <div class="container-fluid single-result">
    <div class="row">
      <div class="col-6">
        <img class="rounded-circle" :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="John" style="width:25%" />
        <h1 class="my-3">{{ comic.title }}</h1>
        <p>{{ comic.prices[0].price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FakeComic from "../../comic.json";
export default {
  name: "TheComic",
  data: function() {
    return {
      comic: FakeComic.data.results[0]
    };
  }
};
</script>
