<template>
  <div class="nav" :class="{ 'nav-open': navOpen }">
    <div class="left">
      <NuxtLink to="/">
        <img src="/pictures/icon.webp">
      </NuxtLink>

      <NuxtLink to="/">
        <h1 class="title">Skate Shope</h1>
      </NuxtLink>
      
      <div class="burger" @click="toggleNav();">≡</div>
    </div>


    <div class="buttons" :class="{ 'nav-open': navOpen }">

      <!-- <a href="#about">About</a> -->
      <!-- <NuxtLink to="/#home">Home</NuxtLink> -->
      <NuxtLink to="/#story">Notre Histoire</NuxtLink>
      <NuxtLink to="/#shop">Pre-order</NuxtLink>
      <NuxtLink to="/#contact">Pre-Contact</NuxtLink>

    </div>
  </div>
</template>

<style scoped>
  .nav {
    display: flex;
    background-color: #333333;
    height: 100px;
    width: 100%;
    margin: 0 auto;
    color: white;
    justify-content: space-between;
  }

  .nav h1 {
    margin: auto 20px;
  }

  .nav .left {
    display: flex;
    align-items: center;
  }

  .nav .left a {
    height: 100%;
    display: flex;
  }

  .nav .buttons {
    display: flex;
    align-items: center;
  }

  .nav .buttons a {
    border: none;
    background: #333333;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    margin: auto 20px;
  }

  .nav .buttons a:hover {
    text-decoration: underline;
  }

  .nav .left img {
    height: 100%;
  }

  .burger { display: none; }

  @media only screen and (max-width: 700px) {
    .nav {
      display: block;
      transition: margin 0.1s ease;
    }
    .nav.nav-open {
      margin-bottom: 132px;
    }
    .nav .left {
      height: 100%;
    }
    .nav .left img {
      display: none;
    }
    .burger {
      display: block;
      position: absolute;
      right: 30px;
      font-size: 50px;
      cursor: pointer;
    }
    .buttons {
      width: 100%;
      height: 0px;
      overflow: hidden;
      flex-direction: column;
      transition: height 0.1s ease;
    }
    .nav .buttons a {
      margin: 0;
      padding: 10px 0;
      background: #222;
      width: 100%;
    }
    .buttons.nav-open {
      height: 132px;
    }
  }
</style>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
}
</script>