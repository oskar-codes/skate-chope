<template>
  <div class="section shop">
    <h1>Boutique</h1>

    <button class="arrow left" @click="incrementProduct(-1)">&lt;</button>
    <button class="arrow right" @click="incrementProduct(1)">&gt;</button>

    <div class="item">
      <div class="image-container">
        <img src="pictures/_DSC0888.JPG">
      </div>
      <div class="details">
        <h3>{{ currentProduct.name }}</h3>
        <p>€{{ displayPrice }}</p>
        <p>
          {{ currentProduct.description }}
        </p>

        <div class="parameter">
          <span>Taille</span>
          <select>
            <option v-for="size in currentProduct.sizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>

        <hr>
        <div class="parameter">
          <span>Couleur</span>
          <select>
            <option v-for="color in currentProduct.colors" :key="color" :value="color">{{ color }}</option>
          </select>
        </div>

        <hr>

        <div class="parameter">
          <span>Quantité</span>
          
          <div>
            <button @click="incrementAmount(-1)">-</button>
            <span>{{ amount }}</span>
            <button @click="incrementAmount(1)">+</button>
          </div>

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
    position: relative;
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

  .item .details > button {
    float: right;
  }

  .item img {
    height: 500px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    padding: 20px;
    border-radius: 50%;
    width: 75px; height: 75px;
  }

  .left { left: 20px; }
  .right { right: 20px; }

  .parameter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<script>

export default {
  name: 'Shop',
  data() {
    return {
      amount: 1,
      products: [],
      productIndex: 0
    }
  },
  async fetch() {
    const data = await fetch('https://skate-shope-default-rtdb.firebaseio.com/products.json');
    this.products = await data.json();
  },
  computed: {
    price() {
      return this.currentProduct.price * this.amount;
    },
    displayPrice() {
      return this.price.toFixed(2);
    },
    currentProduct() {
      return this.products[this.productIndex];
    }
  },
  methods: {
    incrementAmount(val) {
      this.amount += val;
      if (this.amount < 1 || this.amount > 10) {
        this.amount -= val;
      }
    },
    incrementProduct(val) {
      this.productIndex += val;
      this.productIndex = mod(this.productIndex, this.products.length);
      this.amount = 1;
    }
  }
}

function mod(x, y) {
  return (x % y + y) % y;
}
</script>