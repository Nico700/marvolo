<template>
  <div class="result">
    <p class="resultModel">{{ this.type }}</p>
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
    data: Object,
    type: String
  },
  methods: {
    hasDescription(desc){
      if (desc === "") {
        desc = "Sorry, this search has no description.";
      }
      return desc;
    }
  }
};
</script>