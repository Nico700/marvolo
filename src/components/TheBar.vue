<template>
  <div class="thebar">
    <form action="search" method="post" @submit="submit">
      <input type="text" v-model='value' name="valeur_search"/>
      <button type="submit" class="ico_loupe">🔍</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheBar",
  data: function() {
    return {
      value: null
    }
  },
  methods:{
    submit: function(e){
      e.preventDefault()
      this.$router.push({
        name: 'Search',
        props:{
          search: this.value
        }
      })
    }
  }
};
</script>