<template>
  <div class="result">
    <p class="resultModel">Héros</p>
    <a class="resultTitle" href="/heros/">{{ data.name }}</a>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}*

      <table>
        <tr>
          <td><a class="resultTitle" href="">Stories</a></td>
          <td><a class="resultTitle" href="">Comics</a></td>
        </tr>
        <tr>
          <td><a class="resultTitle" href="">Series</a></td>
          <td><a class="resultTitle" href="">Event</a></td>
        </tr>
      </table>
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
        desc = "Sorry, this search has no description.";
      }
      return desc;
    }
  }
};
</script>