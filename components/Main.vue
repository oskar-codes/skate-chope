<template>
  <div class="section main">
    <div class="login">
      <h1 class="title">Skate Shope</h1>
      <p>Marque vetements</p>
      <input type="text" placeholder="Email">
      <input type="password" placeholder="Mot de passe">
      <button>Submit</button>
    </div>
  </div>
</template>

<style scoped>
  .main {
    background-image: url(../static/pictures/principal.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    margin: 0 auto;
    height: calc(100vh - 100px);
    position: relative;
  }
  .main .login {
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%);
    color: #c9c9c9;
  }
  .main button, .main input {
    padding: 5px; 
    background: white;
    border: none;
    border-radius: 5px;
    margin: 5px;
  }
</style>

<script>
export default {
  name: 'Main'
}
</script>