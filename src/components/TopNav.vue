<template>
    <div class="nav-bar">
        <b-navbar toggleable="lg" type="light" variant="success" fixed="top">
        <b-navbar-brand><router-link :to="{ name: 'main' }" class="goto"><b>Vue Recipes</b></router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>
                <router-link :to="{ name: 'search' }" class="goto">Search</router-link>
            </b-nav-item>
        </b-navbar-nav>
        
        <b-navbar-nav>
            <b-nav-item>
                <router-link :to="{ name: 'about' }" class="goto">About</router-link>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
            <b-nav-item>
                <router-link :to="{ name: 'NewRecipe' }" class="goto" v-if="$root.store.username">New Recipe</router-link>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item-dropdown text="Personal" right v-if="$root.store.username" >
                <b-dropdown-item><router-link class="dropDown" :to="{ name: 'My Recipes' }">My Recipes</router-link> </b-dropdown-item>
                <b-dropdown-item><router-link class="dropDown" :to="{ name: 'Family Recipes' }" >Family Recipes</router-link></b-dropdown-item>
                <b-dropdown-item><router-link class="dropDown" :to="{ name: 'Favorite Recipes' }" >Favorite Recipes</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>

        <!-- Right aligned nav items -->
        
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Hello Guest" right v-if="!$root.store.username" >
                <b-dropdown-item><router-link class="dropDown" :to="{ name: 'register' }">Register</router-link> </b-dropdown-item>
                <b-dropdown-item><router-link class="dropDown" :to="{ name: 'login' }" >Login</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown :text="$root.store.username" right v-else variant="outline-danger">
                 <b-dropdown-item class="dropDown" @click="Logout" >Logout</b-dropdown-item>
            </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "TopNav",
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

<style>
    .dropDown{
        color: #1d7238
    }
    .nav-bar{
        position: relative;
    }

</style>

<!-- dropdown example
    <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->