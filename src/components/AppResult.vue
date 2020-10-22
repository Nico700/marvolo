<template>
  <div class="result">
    <p class="resultModel">{{ type }}</p>
    <router-link class="resultTitle" :to="{name: 'Character', params: {id:data.id }}">{{data.name}}</router-link>
    <p class="resultDesc">
      {{ hasDescription(data.description) }}

      <table>
        <tr>
          <td><router-link class="resultTitle" :to="{name: 'CharacterStories', params: {id:data.id }}">Stories</router-link></td>
          <td><router-link class="resultTitle" :to="{name: 'CharacterComics', params: {id:data.id }}">Comics</router-link></td>
        </tr>
        <tr>
          <!--<td><a class="resultTitle" :href="'characters/' + data.id + '/series/'">Series</a></td>-->
          <td><router-link class="resultTitle" :to="{name: 'CharacterSeries', params: {id:data.id }}">Séries</router-link></td>
          <td><router-link class="resultTitle" :to="{name: 'CharacterEvents', params: {id:data.id }}">Events</router-link></td>
        </tr>
      </table>
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
      console.log(this.type)
      if (desc === "") {
        desc = "Sorry, this search has no description.";
      }
      return desc;
    }
  }
};
</script>
