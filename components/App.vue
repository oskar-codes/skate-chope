<template>
  <div>
    <Nav/>
    <Main @togglePopup="togglePopup"/>
    <!-- <About/> -->
    <Story/>
    <Origins/>
    <Shop @togglePopup="togglePopup"/>
    <Contact/>

    <transition name="fade">
      <LoginPopup @togglePopup="togglePopup" v-if="showPopup"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPopup: false
    }
  },
  methods: {
    togglePopup() {
      console.log('test');
      this.showPopup = !this.showPopup;
    }
  }
}
</script>
