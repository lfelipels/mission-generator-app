<template>
  <v-app id="inspire">
    <v-app-bar app color="#f72585" class="white--text">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "LayoutMaster",
  props: ["title"],
};
</script>
<style>
main {
  background-color: #ededed;
}
</style>
