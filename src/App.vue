<template>
  <div id="app">
    <Layout title="Gerador de Missões">
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout.vue";
export default {
  components: {
    Layout,
  },
};
</script>
