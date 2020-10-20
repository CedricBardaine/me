<template>
  <v-container class="text-center">
        <v-row justify="center">
      <h1>Mes compétences</h1>
    </v-row>
    
    <div class="c-spacer"></div>
    
    <v-row style="width: 10rem ; display:inline-block" justify="center">
      <v-slider
      v-model="level"
      min=1
      max=4
      step=1
      color="primary"
      thumb-color="secondary"
      thumb-label="always"
      ticks="always"
      justify="center"
      ></v-slider>
    </v-row>
    <p>{{masteryTxt}}</p>
    
    <br>
    
    <p>Au niveau  <v-btn fab x-small color="secondary"  class="mx-2">{{level}}</v-btn>  les compétences qui s'affichent sont :</p>
    <p v-if="level >= 1">
      des compétences que je maîtrise particulièrement, je les utilise régulièrement et je suis à mon aise avec elles.
    </p>
    <p v-if="level >= 2">
      <v-icon large color="primary">mdi-plus</v-icon> des compétences que j'ai déjà bien utilisées dans des projets.
    </p>
    <p v-if="level >= 3">
      <v-icon large color="primary">mdi-plus</v-icon> des compétences que j'ai déjà utilisées une ou plusieurs fois.
    </p>
    <p v-if="level >= 4">
      <v-icon large color="primary">mdi-plus</v-icon> des compétences que j'ai déjà étudiées, ou pour lesquelles j'ai déjà fait de la veille.
    </p>
    
    <v-card justify="center">
      <v-card-title primary-title justify="center">
        Langages
      </v-card-title>
      <transition-group name="list" tag="p">
        <v-chip v-for="(item, i) in filteredSkills" :key="i"  color='primary' class="list-item">{{item.name}}</v-chip>
      </transition-group>
    </v-card>
    
    <v-card justify="center">
      <v-card-title primary-title justify="center">
        Frameworks et technos
      </v-card-title>
      <transition-group name="list" tag="p">
        <v-chip v-for="(item, i) in filteredFramsAndTechs" :key="i"  color='primary' class="list-item">{{item.name}}</v-chip>
      </transition-group>
    </v-card>
    
    <div class="c-spacer"></div>  
    <v-divider></v-divider>
    <div class="c-spacer"></div>
    
    <v-card justify="center">
      <v-card-title primary-title justify="center">
        Connaissances IT
      </v-card-title>
      <transition-group name="list" tag="p">
        <v-chip v-for="(item, i) in myITKnowledge" :key="i"  color='primary' class="list-item">{{item.name}}</v-chip>
      </transition-group>
    </v-card>
    
    <v-card justify="center">
      <v-card-title primary-title justify="center">
        IDEs & logiciels de développement
      </v-card-title>
      <transition-group name="list" tag="p">
        <v-chip v-for="(item, i) in myIDEs" :key="i"  color='primary' class="list-item">{{item.name}}</v-chip>
      </transition-group>
    </v-card>
    
  </v-container>
</template>

<script>
  import importedSkills from '@/assets/skills.json';
  
  export default {
    data() {
      return {
        level: 2,
        /**
        * for level,
        * 1 means that i oftenly use this techno & i'm comfortable with
        * 2 means i've alreday use it in project, but it could be a long time ago
        * 3 means i've already tried it
        * 4 means that i've studied it, or made watch over
        */
        skills: importedSkills,
        myLanguages: importedSkills.languages,
        myFrameworksAndTechnos: importedSkills.frameworksAndTechnos,
        myITKnowledge: importedSkills.ITKnowledge,
        myIDEs: importedSkills.IDEsAndDevSoftwares,
        // myHLanguages: importedSkills.langues,
        // myOthers: importedSkills.others,
        
      };
    },
    computed: {
      filteredSkills() {
        const ret = this.myLanguages.filter( (e) => {
          return e.level <= this.level;
        });
        return ret;
      },
      filteredFramsAndTechs() {
        const ret = this.myFrameworksAndTechnos.filter( (e) => {
          return e.level <= this.level;
        });
        return ret;
      },
      filteredITKnowledge() {
        const ret = this.myITKnowledge.filter( (e) => {
          return e.level <= this.level;
        });
        return ret;
      },
      filteredIDEs() {
        const ret = this.myIDEs.filter( (e) => {
          return e.level <= this.level;
        });
        return ret;
      },
      masteryTxt() {
        switch (this.level) {
          case 1:
          return 'Compétences maîtrisées.';
          case 2:
          return 'Compétences déjà utilisées dans des projets.';
          case 3:
          return 'Compétences déjà utilisées.';
          case 4:
          return 'Toutes mes connaissances.';
          
          default:
          return '';         
        }
      },
    },
  };
</script>

<style>
  .list-item {
    display: inline-block;
    margin:1rem;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
