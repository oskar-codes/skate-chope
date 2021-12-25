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
          <div class="color-box" :style="{ backgroundColor: currentColor }"></div>
          <select class="color" v-model="col">
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

        <div class="action-container">
          <button :class="{ 
            success: buttonStatus === 'green',
            error: buttonStatus === 'red'
          }" @click='addToCart();'>Ajouter au panier</button>

          <NuxtLink v-if="isSignedIn" class="button" :to="`users/${user.uid}`">Votre Panier</NuxtLink>
        </div>
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
  .parameter .color-box {
    width: 30px; height: 30px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: 10px;
    border: 2px solid black;
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
  .action-container {
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }
  .action-container > button.success {
    background-color: #4fdc7b;
    color: #4fdc7b
  }
  .action-container > button.error {
    background-color: #ec4144;
    color: #ec4144;
  }
  .action-container > button {
    position: relative;
  }
  .action-container > button::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  .action-container > button.success::after {
    opacity: 1;
    content: '✓';
  }
  .action-container > button.error::after {
    opacity: 1;
    content: '╳';
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
import Vue from 'vue';

export default Vue.extend({
  name: 'Shop',
  data() {
    return {
      amount: 1,
      products: [],
      productIndex: 0,
      pictureIndex: 0,
      buttonStatus: '',
      col: '',
      isSignedIn: false
    }
  },
  async fetch() {
    const data = await fetch('https://skate-chope-d6d23-default-rtdb.firebaseio.com/products.json');
    this.products = await data.json();
    this.col = this.products[this.productIndex].colors[0];
  },
  computed: {
    price() {
      return this.currentProduct.price * this.amount;
    },
    displayPrice() {
      return this.price.toFixed(2);
    },
    currentColor() {
      const colors = {
        'White'               : 'white',
        'Black'               : 'black',
        'Vintage White'       : '#e5e5db',
        'Anthracite'          : '#383e42',
        'Opal'                : '#a8c3bc',
        'Spectra Yellow'      : '#ffc007',
        'Varsity Green'       : '#3e6168',
        'Bottle Green'        : '#006a4e',
        'Khaki'               : '#302e1c',
        'Stem Green'          : '#adc875',
        'Caribbean Blue'      : '#1ac1dd',
        'Serene Blue'         : '#b5d7e8',
        'Sky Blue'            : '#87ceeb',
        'Royal Blue'          : '#4169e1',
        'India Ink Grey'      : '#232732',
        'French Navy'         : '#0072bb',
        'Red'                 : 'red',
        'Burgundy'            : '#800020',
        'Cotton Pink'         : '#ffbcd9',
        'Canyon Pink'         : '#e7c2bd',
        'Bright Orange'       : '#ffa500',
        'Dark Heather Indigo' : '#36498f',
        'Heather Grey'        : '#d9d9d6',
        'Dark Heather Grey'   : '#2d3033'
      }
      return colors[this.col];
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
      if (this.user()) {

        const ref = this.$fire.database.ref(`/users/${this.user().uid}/cart`);
        
        let data;
        try {
          data = await ref.once('value');
        } catch(e) {
          this.error();
          return;
        }

        const cart = data.val();

        const color = document.querySelector('.color').value;
        const size = document.querySelector('.size').value;

        if (!cart) {
          try {
            await ref.set([{
              id: this.productIndex,
              amount: this.amount,
              color, size
            }]);
            this.success();
          } catch (e) {
            console.error(e);
            this.error();
          }
          return;
        }

        cart.push({
          id: this.productIndex,
            amount: this.amount,
            color, size
        });

        try {
          await ref.set(cart);
          this.success();
        } catch (e) {
          console.error(e);
          this.error();
        }
      } else {
        this.$emit('togglePopup');
      }
    },
    success() {
      this.buttonStatus = 'green';
      setTimeout(() => {
        this.buttonStatus = '';
      }, 1e3);
    },
    error() {
      this.buttonStatus = 'red';
      setTimeout(() => {
        this.buttonStatus = '';
      }, 1e3);
    },
    user() {
      return this.$fire.auth.currentUser;
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged(user => {
      if (user) {
        this.isSignedIn = true;
        this.$fire.database.ref(`/users/${user.uid}/email`).set(user.email);
      } else {
        this.isSignedIn = false;
      }
    });
  }
});

function mod(x, y) {
  return (x % y + y) % y;
}
</script>