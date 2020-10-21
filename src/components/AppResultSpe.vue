<template>
  <div class="result">
    <p class="resultModel">{{ type }}</p>
    <a class="resultTitle" :href="'/comics/' + data.id">{{ data.title }}</a>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppResultSpe",
  props: {
    data: Object,
    type: String
  },
  methods: {
    hasDescription(desc){
      console.log(desc)
      if (desc === "" || desc === null) {
        desc = "Sorry, this search has no description.";
      }
      return desc;
    }
  }
};
</script>