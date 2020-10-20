<template>
  <v-container>
              <v-row>
            <MyGitHub/>
          </v-row>
    <div v-if="APIError">
      zut... trop de requetes 
    </div>
    <div v-else>   
      
      <v-card  id="scrollArea" elevation="4" style="max-height: 80vh; overflow: auto; ">

      <v-card v-for="(repo, index) in myRepos" :key="index" outlined elevation="1" class="mb-2">
        <v-card-title primary-title class="primary--text">
          <span >{{repo.name}}</span>
          <v-spacer></v-spacer>
          <v-icon large color="primary" >mdi-language-{{repo.language.toLowerCase()}}</v-icon>
        </v-card-title>
        <v-card-subtitle>
          <span>
            <!-- {{displayDate(repo.created_at)}} -->
          </span>
          <span>
            Modifié le : {{displayDate(repo.updated_at)}}
          </span>
        </v-card-subtitle>
        <v-card-text class=" black--text">
          {{repo.description}}
        </v-card-text>
        
        
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
          v-if="repo.homepage"
          icon
          color="secondary"
          @click="jsRedirect(repo.homepage)"
          >
          <v-icon
          >
          mdi-web
        </v-icon>
      </v-btn>
      <v-btn
      v-if="repo.html_url"
      icon
      class="mr-2"
      color="secondary"
      @click="jsRedirect(repo.html_url)"
      >
      <v-icon
      >
      mdi-github
    </v-icon>
  </v-btn>
</v-card-actions>
</v-card>
      </v-card>


</div>
</v-container>
</template>

<script>
  import theService from "@/assets/service.js"; 

    import MyGitHub from '@/components/MyGitHub'


  
  export default {
    data() {
      return {
        APIResponse: theService.myGitHubInfos.gH_API_response,
        // statusCode: theService.myGitHubInfos.gH_API_response.status,
        APIError: theService.myGitHubInfos.error,
        myRepos: theService.myGitHubInfos.myRepos,
      }
    },
        components: {
      MyGitHub,
    },

    computed: {
    },
    methods: {
      displayDate(val) {
        return val.substring(0,10)
      },
      jsRedirect(link) {
        window.open(link, '_blank');
      }
    },
  }
</script>