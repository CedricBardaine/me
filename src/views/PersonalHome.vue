<template>
  <!-- //TODO: ajouter l'école, ajouter l'entreprise -->
  <!-- //TODO: commenter le bouton je recherche une alternance -->
  <div>
    
    <div class="ced-contentBlock">
      <h1>Cédric BARDAINE</h1>
      <h2>Développeur <br> fullstack</h2>
    </div>
    
    
    
    <div class="ced-contentBlock"> 
      <div class="favs">
        Mes favoris : <br>
        <b-row class="lineIcon"> 
          <i> <font-awesome-icon :icon="['fab', 'java']" /> </i>
          <i> <font-awesome-icon :icon="['fab', 'angular']" /> </i>
          <i> <font-awesome-icon :icon="['fab', 'git-alt']" /> </i>
        </b-row>
      </div>
    </div>

    <div class="ced-contentBlock"> 
      <MyGitHub/>
    </div>
    
    
    <div class="ced-contentBlock centerMe">
      <b-button ref="buttonShowPopup" class="ced-btn" :class="{'ced-btn-forceActive': showPopup}" @click="showPopup=!showPopup;">Je recherche une alternance !</b-button>
      <div ref="dropdownPopup" v-if="showPopup">
        <div class="ced-popup centerMe">
          Je recherche pour septembre 2020 une alternance de deux ans pour mon master développeur FullStack.
          Parcourez mon site pour avoir une vision globale de mes compétences.
          Mon profil est peut-être celui que vous recherchez, contactez moi par LinkedIn !
        </div>
      </div>
    </div>
    
    
    
    <div class="ced-contentBlock">
      <p>
        <!-- Bonjour,    -->
      </p>
    </div>
    
    
    
    <div class="cpr">
      <small>Copyright &copy; <i>Cédric Bardaine</i> 2020</small>
    </div>
    
  </div>
</template>





<script>
  import Popper from 'popper.js'
  Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false
  
  import MyGitHub from '@/components/MyGitHub.vue';
  
  export default {
    name: 'PersonalHomeView',

        components: {
        MyGitHub
    },
    data() {
      return {
        showPopup: false
      }
    },
    mounted() {
      this.$nextTick(function() {
        var popper = new Popper(this.$refs["buttonShowPopup"], this.$refs["dropdownPopup"], {
          placement: 'auto',
        });
      });
    },
  }
</script>




<style lang="scss" scoped >
  @import "../custom.scss";
  
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
  
  .cpr {
    color: rgba($color: #FFFFFF, $alpha: 0.5);
    // START : to fix it to the bottom
    bottom: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    // END : to fix it to the bottom
  }
</style>
