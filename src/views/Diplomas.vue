<template>
  <v-container >
    <v-col>

    <v-row justify="center">
      <h1>Mes diplômes</h1>

    </v-row>
    <div class="c-spacer"></div>


      <v-row justify=center>
      <v-btn color="secondary" fab depressed disabled large >{{new Date().getFullYear()}}</v-btn>
      </v-row>
    <v-timeline>
      <v-timeline-item
        v-for="(diploma, i) in diplomas" :key="i"
        color="primary"
        :icon="'mdi-certificate'"

      >
        <template v-slot:opposite v-if="diploma.title">
          <span>{{diploma.date}}</span>
        </template>
        <v-card class="elevation-2" v-if="!!diploma.title">
          <v-card-title style="word-break: normal" :style="$vuetify.breakpoint.xs ? 'font-size:0.8em' : ''">{{diploma.title}}  </v-card-title>
            <v-card-text>{{diploma.where}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-col>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      diplomas: [
        {
          date: '2019 - 2020',
          title: 'Titre professionnel : Concepteur Développeur d\'Applications (CDA)',
          where: '',
        },
        {
          date: '2019 - 2020',
          title: 'Bachelor Développeur Web',
          where: 'MyDigitalSchool - Ker Lann',
        },
        {
          date: '2017 - 2019',
          title: 'DUT informatique',
          where: 'IUT de Vannes',
        },
        {
          date: '2016 - 2017',
          title: 'Bac S option Informatique et Sciences du Numérique',
          where: 'Lycée St-Joseph de Bruz',
        },
      ],
    };
  },
};
</script>

<style>
.dateDot .v-timeline-item__inner-dot {
  width: 5em;
  height: 5em;
}
</style>

