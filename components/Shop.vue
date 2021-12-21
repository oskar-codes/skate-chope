<template>
  <div class="section shop">
    <h1>Boutique</h1>
    <div class="item">
      <div class="image-container">
        <img src="pictures/_DSC0888.JPG">
      </div>
      <div class="details">
        <h3>T-SHIRT "le classique"</h3>
        <p>€{{ price }}</p>
        <p>
          Ici vous est présenté le nouveau tee-shirt "le classique". Optez pour un T-shirt basique en coton avec une coupe large. Il est disponible en blanc, et des tailles allant du XS au XXL. Pour commander tout produit nous vous proposons de répondre au formulaire disponible en description du compte et en storie en nous renvoyant une capture d'écran par message ou le formulaire en main propre, avec dans les deux cas une validation du paiement quel que soit le moyen choisi.
        </p>

        <select>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <hr>

        <select>
          <option value="white">Blanc</option>
          <option value="black">Noir</option>
          <option value="red">Rouge</option>
        </select>

        <hr>

        <div class="amount">
          <span>Quantité</span>
          <button @click="increment(-1)">-</button>
          <span>{{ amount }}</span>
          <button @click="increment(1)">+</button>
        </div>

        <hr>

        <button>Passer la commande</button>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .shop {
    background-color: #eee;
  }

  .item {
    display: flex;
    text-align: justify;
    justify-content: center;
    gap: 20px;
  }

  .item .img-container {
    width: 50%;
  }

  .item .details {
    width: 50%;
  }

  .item img {
    height: 500px;
  }
</style>

<script>

export default {
  name: 'Shop',
  data() {
    return {
      amount: 1
    }
  },
  computed: {
    price() {
      return (15 * this.amount).toFixed(2);
    }
  },
  methods: {
    increment(val) {
      this.amount += val;
      if (this.amount < 1 || this.amount > 10) {
        this.amount -= val;
      }
    }
  }
}
</script>