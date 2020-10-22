<template>
  <div class="thebar">
    <form action="/search" @submit="submit" method="get">
      <input type="text" name="q" />
      <input type="hidden" name="q_type" :value="type">
      <button type="submit" class="ico_loupe">🔍</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheBar",
  data() {
    return {
      type: "characters"
    };
  },
  mounted() {
    if (this.$route.query.q_type !== undefined) {
      this.type = this.$route.query.q_type;
    };
  },
};
</script>
