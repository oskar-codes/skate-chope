<template>
  <div id="shop" class="section shop">
    <h1>Boutique</h1>

    <div class="item">
      <div class="image-container">

        <transition name="fade">
          <img :key="imageSrc" 
               :src="imageSrc"
               @click="changePicture()">
        </transition>

      </div>
  
      <div class="details">
        <h3>{{ currentProduct.name }}</h3>
        <p>
          {{ currentProduct.description }}
        </p>

        <div class="parameter">
          <span>Prix</span>
          <span>€{{ displayPrice }}</span>
        </div>

        <hr>

        <div class="parameter">
          <span>Taille</span>
          <select class="size">
            <option v-for="size in currentProduct.sizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>

        <hr>
        
        <div class="parameter">
          <span>Couleur</span>
          <select class="color">
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

        <button @click='addToCart();'>Ajouter au panier</button>

      </div>
    </div>

    <button class="arrow left" @click="incrementProduct(-1)">&lt;</button>
    <button class="arrow right" @click="incrementProduct(1)">&gt;</button>

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
    padding-bottom: 40px;
    margin: 0 100px;
  }

  .item .details {
    width: 50%;
  }

  .item .details > button {
    float: right;
  }

  .item .image-container {
    width: 50%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #ddd;
  }

  .item img {
    max-width: 100%;
    max-height: 100%;
    /* width: 100%; */
    cursor: pointer;
    position: absolute;
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
  .parameter button {
    width: 40px;
    height: 40px;
    padding: 0;
  }
  .parameter>div>span {
    width: 30px;
    display: inline-block;
    text-align: center;
  }

  @media only screen and (max-width: 700px) {
    .item {
      flex-direction: column;
      margin: 0;
    }
    .item .image-container {
      width: 100%;
    }
    .item .details {
      width: 100%;
    }
    .arrow {
      position: static;
    }
  }
</style>
  
<script>

export default {
  name: 'Shop',
  data() {
    return {
      amount: 1,
      products: [],
      productIndex: 0,
      pictureIndex: 0
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
      const product = this.products[this.productIndex];
      if (!product) {
        return {
          name: '',
          description: '',
          sizes: [],
          colors: [],
          pictures: [],
          price: 0
        }
      }

      return product;
    },
    imageSrc() {
      const dir = this.currentProduct.pictures.directory;
      return `pictures/${dir}/${dir} (${this.pictureIndex+1}).jpg`
    },
    user() {
      return this.$fire.auth.currentUser;
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
      this.pictureIndex = 0;
    },
    changePicture() {
      this.pictureIndex++;
      this.pictureIndex = mod(this.pictureIndex, this.currentProduct.pictures.amount);
    },
    async addToCart() {
      if (this.user) {

        const ref = this.$fire.database.ref(`/users/${this.user.uid}/cart`);

        const data = await ref.once('value');
        const cart = data.val();

        const color = document.querySelector('.color').value;
        const size = document.querySelector('.size').value;

        if (!cart) {
          await ref.set([{
            id: this.productIndex,
            amount: this.amount,
            color, size
          }]);
          return;
        }

        cart.push({
          id: this.productIndex,
            amount: this.amount,
            color, size
        });

        ref.set(cart);

      } else {
        this.$emit('togglePopup');
      }
    }
  }
}

function mod(x, y) {
  return (x % y + y) % y;
}
</script>