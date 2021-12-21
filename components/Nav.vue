<template>
  <div class="nav">
    <div class="left">
      <img src="pictures/icon.webp">
      <h1 class="title">Skate Shope</h1>
    </div>

    <div class="buttons">

      <button>Home</button>
      <button>About</button>
      <button>Notre Histoire</button>
      <button>Pre-order</button>
      <button>Pre-Contact</button>

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
  }

  .nav .buttons button {
    border: none;
    background: #333333;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  .nav .buttons button:hover {
    background: #111111;
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