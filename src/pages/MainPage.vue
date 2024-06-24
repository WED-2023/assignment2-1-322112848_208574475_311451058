<template>
  <div>
  <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Welcome to Food Heaven</h1>
        <p>Discover delicious meals delivered to your door</p>
      </div>
    </section>
  <div class="container">
    <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    {{ !$root.store.username }}
    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.hero {
      position: relative;
      height: 70vh;
      background: url('../assets/main_pic.jpg') no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 100vw;
      overflow: hidden;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .hero-content h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    .hero-content p {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .hero-content .btn {
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
      
</style>
