<template>
  <div class="button d-flex align-items-center">
    <router-link class="pt-2" :to="'/?q_type=' + label">{{
      capitalize(label)
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    label: String
  },
  methods: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
.btn {
  background-color: #008cba;
}
</style>
