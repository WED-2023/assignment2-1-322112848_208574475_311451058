<template>
  <div id="app" >
    <TopNav></TopNav>
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue"
export default {
  name: "App",
  components: {
    TopNav,
    // Footer
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
  min-height: 100vh;
  position: relative;
  padding-top: 35px;
}

.goto{
  color: #e2e0ff;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 5%;
  }
html,body{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
