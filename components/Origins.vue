<template>
  <div id="origins" class="section origins">

    <div class="labels">

      <div class="label-section">

        <div class="label">
          <img src="pictures/organictextile.webp">
          <h3>GOTS</h3>
          <p>ELIGIBLE GOTS</p>
        </div>
        <div class="label">
          <img src="pictures/100naturel.webp">
          <h3>BIO</h3>
          <p>produit 100% naturel</p>
        </div>
        <div class="label">
          <img src="pictures/vegan.webp">
          <h3>Végan</h3>
          <p>produit vegan</p>
        </div>

      </div>



      <div class="label-section">

        <div class="label">
          <img src="pictures/commerceequitable.webp">
          <h3>commerce equitable</h3>
          <p>production en commerce <br> équitable</p>
        </div>
        <div class="label">
          <img src="pictures/eau.webp">
          <h3>respect de l'eau</h3>
          <p>production en respect de <br> l'utilisation de l'eau</p>
        </div>

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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    padding: 20px;
  }

  .label-section {
    display: flex;
    grid-gap: 20px;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
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