<template>
  <div class="result">
    <p class="resultModel">{{ type }}</p>
    <!--<a class="resultTitle" :href="'/characters/' + data.id" >{{ data.name }}</a>-->
    <router-link class="resultTitle" :to="{name: 'Character', params: {id:data.id }}">{{ data.name}}</router-link>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}

      <table>
        <tr>
          <td><a class="resultTitle" :href="'characters/' + data.id + '/stories'">Stories</a></td>
          <td><a class="resultTitle" :href="'characters/' + data.id + '/comics/'">Comics</a></td>
        </tr>
        <tr>
          <td><a class="resultTitle" :href="'characters/' + data.id + '/series/'">Series</a></td>
          <td><a class="resultTitle" :href="'characters/' + data.id + '/events/'">Events</a></td>
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
