<template>
  <div>
  <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Welcome to Food Heaven</h1>
        <p>Discover delicious meals delivered to your door</p>
      </div>
    </section>
  <div class="wrapper border rounded shadow-sm h-md-250">
  <div class="container-fluid">
    <div class="row mb-2 no-gutters">
      <div class="col p-4 d-flex flex-column position-static overflow-hidden">
        <div class="d-flex flex-wrap justify-content-between">
          <h3>Random Recipes</h3>
          <RecipePreviewList class="RandomRecipes center" />
        </div>
      </div>
      <div class="col p-4 d-flex flex-column position-static overflow-hidden">
        <h3>Last viewed recipes</h3>
        <RecipePreviewList v-if="$root.store.username"
          :class="{
            RandomRecipes: true,
            center: true
          }"
          disabled
        ></RecipePreviewList>
        <LoginBox v-else title="Please sign in to see this content"></LoginBox>
      </div>
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</div>
</div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginBox from "../components/LoginBox";
export default {
  components: {
    RecipePreviewList,
    LoginBox
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
.section {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.hero {
      position: relative;
      height: 70vh;
      background: url('../assets/Images/main_pic.jpg') no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 100%;
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
      
</style>
