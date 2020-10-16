<template>
  <div class="result">
    <p class="resultModel">{{ type }}</p>
    <!--<a class="resultTitle" :href="'/characters/' + data.id" >{{ data.name }}</a>-->
    <router-link class="resultTitle" :to="{name: 'Character', params: {id:data.id }}">{{ data.name}}</router-link>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}

      <table>
        <tr>
          <td><a class="resultTitle" :href="'/stories/' + data.id">Stories</a></td>
          <td><a class="resultTitle" :href="'/comics/' + data.id">Comics</a></td>
        </tr>
        <tr>
          <td><a class="resultTitle" :href="'/series/' + data.id">Series</a></td>
          <td><a class="resultTitle" :href="'/events/' + data.id">Events</a></td>
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
