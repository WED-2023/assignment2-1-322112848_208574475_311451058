<template>
  <div class="container mt-5 border rounded shadow-sm p-4">
    <LoginBox title="Please sign in"></LoginBox>
  </div>
</template>

<script>
import LoginBox from '../components/LoginBox.vue';
export default {
  name: "Login",
  components:{
    LoginBox
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
</style>
