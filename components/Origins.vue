<template>
  <div id="origins" class="section origins">

    <div class="labels">

      <div class="label">
        <img src="pictures/gots.png">
        <h3>GOTS</h3>
        <p>Eligible aux GOTS</p>
      </div>
      <div class="label">
        <img src="pictures/100naturel.png">
        <h3>BIO</h3>
        <p>Produit de manière 100% naturelle</p>
      </div>
      <div class="label">
        <img src="pictures/vegan.png">
        <h3>VEGAN</h3>
        <p>Produit de manière vegan</p>
      </div>

      <div class="label">
        <img src="pictures/commerce-equitable.png">
        <h3>COMMERCE EQUITABLE</h3>
        <p>Production en commerce équitable</p>
      </div>
      <div class="label">
        <img src="pictures/eau.png">
        <h3>RESPECT DE L'EAU</h3>
        <p>Production en respect de l'utilisation de l'eau</p>
      </div>

    </div>

    
  </div>
</template>

<style scoped>
  .about {
    background-color: #E8EAEC;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    gap: 50px;
  }

  /* .label-section {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  } */

  .label {
    width: 250px;
  }

  .label img {
    height: 200px;
  }

  .label h3 {
    color:#1D2023;
  }

  .label p {
    color: #bebdbd;
  }
</style>

<script>
export default {
  name: 'Origins'
}
</script>