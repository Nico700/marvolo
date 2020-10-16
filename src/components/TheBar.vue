<template>
  <div class="thebar">
    <form action="/search" @submit="submit" method="get">
      <input type="text" name="q" />
      <button type="submit" class="ico_loupe">🔍</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheBar"
};
</script>