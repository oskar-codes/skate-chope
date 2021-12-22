<template>
  <div>
    <div class="popup">
      <button @click="$emit('togglePopup')" class="cancel">╳</button>
      <h1>{{ 
        isLogin ? 
        'Connectez vous' :
        'Créez un compte' }}</h1>
      <form action="" method="get" class="form-example">

        <input type="email" name="email" placeholder="Email" v-model="email" required>
        <input type="password" name="password" placeholder="Mot de passe" v-model="password" required>
        <input type="password" name="password-check" placeholder="Répétez votre mot de passe" v-model="passwordRepeat" v-if="!isLogin" required>
        
        <p style="color: red;">{{ error }}</p>

        <input class="button" type="submit" @click="submit" :value="isLogin ? 'Connection' : 'Créer le compte'">
        
        <p class="link" @click="toggleAction">{{ 
          isLogin ? 
          `Vous n'avez pas de compte?` :
          'Vous avez déjà un compte?'}}</p>

      </form>
    </div>
    <div class="background" @click="$emit('togglePopup')"></div>
  </div>
</template>

<style scoped>
  .popup {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background: #eee;
    padding: 20px;
    border-radius: 10px;
    z-index: 1;
  }
  .background {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7)
  }
  input {
    width: 100%;
    margin: 10px 0;
  }
  .link {
    cursor: pointer;
  }
  .link:hover {
    text-decoration: underline;
  }
  .cancel {
    position: absolute;
    right: 20px;
    width: 58px; height: 58px;
  }
  @media only screen and (max-width:700px) {
    .popup {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
</style>

<script>
export default {
  name: 'LoginPopup',
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      error: '',
      isLogin: true
    }
  },
  methods: {
    async submit(event) {
      this.error = '';

      event.preventDefault();

      if (this.isLogin) {
        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );
          this.$emit('togglePopup');
        } catch(e) {
          this.error = e.message;
        }
        return;
      }

      if (this.password !== this.passwordRepeat) {
        this.error = 'Les mots de passe ne sont pas identiques.'
        return;
      }
      
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$emit('togglePopup');
      } catch(e) {
        this.error = e.message;
      }
    },
    toggleAction() {
      this.isLogin = !this.isLogin;
    }
  }
}
</script>