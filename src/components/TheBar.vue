<template>
  <div class="thebar">
    <form action="/search" @submit="submit" method="post">
      <input type="text" name="valeur_search" />
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