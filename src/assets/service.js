import axios from 'axios' ; 
import reposInCase from "./repo_in_case.json"

class Service {

  constructor() {
    this.myGitHubInfos = {
      gH_API_response: null,
      error: '',
      myRepos: [],
    };


    console.log("GitHub API call...");
    axios
    .get('https://api.github.com/users/CedricBardaine/repos')
    .then(
      (response) => {
        this.myGitHubInfos.gH_API_response = Object.assign(response);
        console.log("GitHub API fetched : success");
      })
      .catch((err) => {
        this.myGitHubInfos.error = err ;  
        this.myGitHubInfos.gH_API_response = {data: reposInCase} ; 
        console.log("GitHub API fetched : error", this.myGitHubInfos.error)
      })
      .finally(() => {
        for (let i = 0; i < this.myGitHubInfos.gH_API_response.data.length; i++) {
          let aRepo = {}; 
          aRepo.id = this.myGitHubInfos.gH_API_response.data[i].id
          aRepo.name = this.myGitHubInfos.gH_API_response.data[i].name
          aRepo.html_url = this.myGitHubInfos.gH_API_response.data[i].html_url
          aRepo.description = this.myGitHubInfos.gH_API_response.data[i].description
          aRepo.languages_url = this.myGitHubInfos.gH_API_response.data[i].languages_url
          aRepo.created_at = this.myGitHubInfos.gH_API_response.data[i].created_at
          aRepo.updated_at = this.myGitHubInfos.gH_API_response.data[i].updated_at
          aRepo.homepage = this.myGitHubInfos.gH_API_response.data[i].homepage
          aRepo.language = this.myGitHubInfos.gH_API_response.data[i].language

          this.myGitHubInfos.myRepos.push(aRepo); 
        }
      });
  }
}

var theService = new Service();

export default theService;
