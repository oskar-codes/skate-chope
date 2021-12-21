<template>
  <div class="nav">
    <div class="left">
      <img src="pictures/icon.webp">
      <h1 class="title">Skate Shope</h1>
    </div>

    <div class="buttons">

      <a href="#home">Home</a>
      <!-- <a href="#about">About</a> -->
      <a href="#story">Notre Histoire</a>
      <a href="#shop">Pre-order</a>
      <a href="#contact">Pre-Contact</a>

    </div>
  </div>
</template>

<style scoped>
  .nav {
    display: flex;
    background-color: #333333;
    height: 100px;
    width: 80%;
    margin: 0 auto;
    color: white;
    justify-content: space-between;
  }

  .nav .left {
    display: flex;
    align-items: center;
  }

  .nav .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav .buttons a {
    border: none;
    background: #333333;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }

  .nav .buttons a:hover {
    text-decoration: underline;
  }

  .nav .left img {
    height: 100%;
  }
</style>

<script>
export default {
  name: 'Nav',
}
</script>