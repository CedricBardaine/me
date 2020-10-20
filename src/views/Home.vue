<template>
  <!-- //TODO: ajouter l'école, ajouter l'entreprise -->
  
  <v-container class="text-center">
    <v-col>
      <v-row justify="center">
        <h1>Cédric BARDAINE</h1><br>
      </v-row>
      <v-row justify="center">
        <h2>Développeur <br> fullstack</h2>
      </v-row>
      
      <div class="c-spacer"></div>
      
      <v-row justify="center">
        <v-row class="col-md-6 ">
          Bonjour ! je m'appelle Cédric, je suis développeur en alternance à KERMAP et étudiant en 4e année à MyDigitalSchool.
          N'hésitez pas à parcourir mon site à l'aide du menu à gauche afin d'en savoir plus sur mon parcours professionnel et mes compétences.
        </v-row>
      </v-row>
      
      <div class="c-spacer"></div>
      
      <v-row>
        <v-col>
          <v-row justify="center">
            <h3>Mes favoris 2019/2020 :</h3>
          </v-row>
          <v-row justify="center">
            <v-icon large color="primary" style="font-size: 5rem">mdi-language-java</v-icon>
            <v-icon large color="primary" style="font-size: 5rem">mdi-angular</v-icon>
            <v-icon large color="primary" style="font-size: 5rem">mdi-git</v-icon>
          </v-row>

          <div class="c-spacer"></div>
          
          <v-row>
            <MyGitHub/>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  import MyGitHub from '@/components/MyGitHub'
  
  export default {
    components: {
      MyGitHub,
    }
  };
</script>
