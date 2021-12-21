<template>
  <div id="home" class="section main">
    <div class="login">
      <h1 class="title">Skate Shope</h1>

      <p>{{ action === 'login' ? 'Connectez vous' : 'Créer un compte' }}</p>
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Mot de passe">
      <button @click="submit">{{ action === 'login' ? 'Connection' : 'Créer le compte' }}</button><br>
      <button @click="switchAction">{{ action === 'login' ? "Vous n'avez pas de compte?" : 'Vous avez déjà un compte?' }}</button>
      <span>{{ error }}</span>
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
    text-align: left;
  }
  .main .login {
    position: absolute;
    left: 20px; top: 50%;
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
import Vue from 'vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      email: '',
      password: '',
      action: 'login',
      error: ''
    }
  },
  methods: {
    async submit() {
      if (this.action === 'login') {
        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          )
          console.log(this.$fire.auth.currentUser);
        } catch(e) {
          this.error = e.message;
        }

        return;
      }

      try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            this.email,
            this.password
          )
        } catch(e) {
          this.error = e.message;
        }
    },
    switchAction() {
      this.action = this.action === 'login' ? 'signup' : 'login';
    }
  }
});
</script>