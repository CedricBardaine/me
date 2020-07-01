<template>
  <div>
    <div class="contentBlock">
      <h1>Cédric BARDAINE</h1>
      <h2>Développeur <br> fullstack</h2>
    </div>
    
    <div class="contentBlock"> 
      <div class="favs">
        Mes favoris : <br>
        <b-row class="lineIcon"> 
          <i> <font-awesome-icon :icon="['fab', 'java']" /> </i>
          <i> <font-awesome-icon :icon="['fab', 'angular']" /> </i>
          <i> <font-awesome-icon :icon="['fab', 'git-alt']" /> </i>
        </b-row>
      </div>
    </div>
  </div>
</template>





<script>
  export default {
    name: 'PersonalHomeView',
  }
</script>




<style lang="scss" scoped >
  @import "../custom.scss";
  
  .contentBlock {
    padding-bottom: 2rem; 
  }
  
  .lineIcon {
    text-align: center;
    font-size: 3rem;
    justify-content: center;
  }
  .lineIcon i {
    margin-inline: 1rem ;
    transition-duration: 0.4s;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
  .lineIcon i:hover {
    color: $color-secondary;
    transition-duration: 0.4s;
  }
</style>
