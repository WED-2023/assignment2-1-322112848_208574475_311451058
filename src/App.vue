<template>
  <div id="app" >
    <TopNav></TopNav>
    <router-view />
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue"
export default {
  name: "App",
  components: {
    TopNav
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.goto{
  color: #e2e0ff;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 2%;
  }

</style>
