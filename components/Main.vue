<template>
  <div id="home" class="section main"
    :style="`background-position-y: ${yPos}px`">
    <div class="login">
      <h1 class="title">Skate Chope</h1>

      <div v-if="loading">Chargement...</div>
      <div v-else>
        <div v-if="isSignedIn">
          <p>Bienvenue {{ user.email }}</p>
          <NuxtLink :to="`users/${user.uid}`" class="button">Votre Panier</NuxtLink>
          <button @click="logOut">Déconnection</button>
        </div>
        <button v-else @click="$emit('togglePopup')">Connectez vous</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    background-image: url(../static/pictures/principal.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0 auto;
    height: calc(100vh - 100px);
    position: relative;
    text-align: left;
  }
  .main .login {
    position: absolute;
    left: 20px; top: 50%;
    transform: translateY(-50%);
    color: #c9c9c9;
    width: 80%;
  }

  @media only screen and (max-width:700px) {
    .main .login {
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      isSignedIn: false,
      yPos: -100,
      loading: true
    }
  },
  methods: {
    logOut() {
      this.$fire.auth.signOut();
    },
    handleScroll() {
      if (window.innerWidth <= 700) return this.yPos = 0;
      this.yPos = window.scrollY * 0.7 - 100;
    }
  },
  computed: {
    user() {
      return this.$fire.auth.currentUser;
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged(async user => {
      this.loading = true;
      if (user) {
        await this.$fire.database.ref(`/users/${user.uid}/email`).set(user.email);
        this.loading = false;
        this.isSignedIn = true;
      } else {
        this.loading = false;
        this.isSignedIn = false;
      }
    });

    if (process.browser) {
      if (window.innerWidth <= 700) {
        this.yPos = 0;
      }
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('touchmove', this.handleScroll);
    }
  }
});
</script>