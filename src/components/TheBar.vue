<template>
  <div class="thebar">
    <form action="/search" method="post">
      <input type="text" name="valeur_search"/>
      <button type="submit" class="ico_loupe">🔍</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheBar"
};
</script>