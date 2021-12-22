<template>
  <div>
    <iframe
      width="100%"
      height="450"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDHOA9s_z2IBB7d_g46Z1DlkXMK7xAqjPY&q=Lyon+5e+Arrondissement">
    </iframe>
  </div>
</template>

<style scoped>
  iframe {
    border: 0px;
    max-width: 750px;
  }
</style>

<script>
export default {
  name: 'Map'
}
</script>