<template>
  <div class="account">
    <Nav/>

    <main>
      <p v-if="loading">Chargement...</p>
      <div v-if="cart.length > 0">
        <table>
          <thead>
            <tr>
              <td>Article</td>
              <td>Couleur</td>
              <td>Taille</td>
              <td>Quantité</td>
              <td>Prix total</td>
              <td>Supprimer</td>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="(article, index) in cart" :key="index">
              <td>{{ products[article.id].name }}</td>
              <td>{{ article.color }}</td>
              <td>{{ article.size }}</td>
              <td>{{ article.amount }}</td>
              <td>€{{ (products[article.id].price * article.amount).toFixed(2) }}</td>
              <td><button @click="removeArticle(index)">╳</button></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total: </td>
              <td>€{{ totalPrice }}</td>
            </tr>
          </tbody>
        </table>

        <button>Passer la commande</button>
      </div>

      <div v-else-if="!loading">
        <h1>Votre panier est vide</h1>
        <NuxtLink to="/#shop" class="button">Aller à la boutique</NuxtLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
  table {
    margin: 20px auto;
    width: 80%;
    box-sizing: border-box;
    border-collapse: collapse;
  }
  td {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }
  thead {
    font-weight: bold;
  }
  main {
    padding: 20px 0;
    height: calc(100vh - 100px);
    background: #eee;
    overflow-x: hidden;
  }
  td button {
    width: 35px; height: 35px;
    font-size: 10px;
    padding: 0;
  }
  @media only screen and (max-width:700px) {
    /*table, thead, tbody, th, td, tr {
      display: block;
    }
    thead {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    td {
      position: relative;
      width: fit-content;
      display: inline;
      border: none;
      width: 100%;
    }*/
  }
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Account',
  data() {
    return {
      cart: [],
      products: [],
      loading: true
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((acc,e) => {
        return acc + this.products[e.id].price * e.amount
      }, 0).toFixed(2);
    },
    user() {
      return this.$fire.auth.currentUser;
    }
  },
  mounted() {
    this.$fire.auth.onAuthStateChanged(async user => {

      this.loading = true;

      if (!user) {
        this.redirect();
        return;
      }

      if (user.uid !== this.$route.params.user) {
        this.redirect();
        return;
      }

      const products = await fetch('https://skate-chope-d6d23-default-rtdb.firebaseio.com/products.json');
      this.products = await products.json();

      const data = await this.$fire.database.ref(`/users/${user.uid}`).once('value');
      const userData = data.val();

      this.loading = false;

      if (!userData) {
        this.redirect();
        return;
      }

      if (!userData.cart) {
        this.cart = [];
        return;
      }

      this.cart = userData.cart;
    });
  },
  methods: {
    redirect() {
      this.$router.push('/');
    },
    async removeArticle(index) {
      this.cart.splice(index, 1);
      await this.$fire.database.ref(`/users/${this.user.uid}/cart`).set(this.cart);
    }
  }
});
</script>