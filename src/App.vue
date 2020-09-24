<template>
  <v-app>
    <v-row no-gutters>

    <v-col style="display: contents">

      <MenuDrawer /> 
      <!-- <v-app-bar></v-app-bar> -->
    </v-col>
    <v-col>
      <v-main>
        <router-view/>
      </v-main>
    </v-col>
  </v-row>
    

  </v-app>
</template>

<script>
  import MenuDrawer from "@/components/MenuDrawer.vue";
  
  export default {
    components: {
      MenuDrawer,
    },
  }
</script>