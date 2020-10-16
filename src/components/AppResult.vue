<template>
  <div class="result">
    <p class="resultModel">Héros</p>
    <a class="resultTitle" href="/heros/">{{ data.name }}</a>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppResult",
  props: {
    data: Object
  },
  methods: {
    hasDescription(desc){
      if (desc === "") {
        desc = "Désolé, cette recherche ne possède aucune description.";
      }
      return desc;
    }
  }
};
</script>