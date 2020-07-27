<template>
    <div>

        <div class="ced-contentBlock">
            <h1>Mes compétences</h1>
        </div>

        <div class="ced-contentBlock">
            <p class="centerMe ced-important">{{masteryTxt}}</p><br>
            <input class="ced-rangeInput" type="range" min="1" max="4" step="1" v-model="level">
            
            <p>Au niveau <span class="ced-important">{{level}}</span>, les compétences qui s'affichent sont :</p>
            <p v-if="level >= 1">
                des compétences que je maîtrise particulièrement, je les utilise régulièrement et je suis à mon aise avec elles. 
            </p>
            <p v-if="level >= 2">
                <span class="ced-important">&</span> des compétences que j'ai déjà bien utilisées dans des projets. 
            </p>
            <p v-if="level >= 3">
                <span class="ced-important">&</span> des compétences que j'ai déjà utilisées une ou plusieurs fois. 
            </p>
            <p v-if="level >= 4">
                <span class="ced-important">&</span> des compétences que j'ai déjà étudiées, ou pour lesquelles j'ai déjà fait de la veille. 
            </p>
        </div>

        <div class="ced-contentBlock">
            <h2>Langages</h2>
            <!-- <div class="ced-skill" v-for="(item, index) in myLanguages" :key="index">
                <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" />  {{item.name}}
            </div>
            <br><br> -->
            <div class="ced-skill" v-for="(item, index) in filteredSkills" :key="index">
                <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" />  {{item.name}}
            </div>
        </div>

        <div class="ced-contentBlock">
            <h2>Frameworks et technos</h2>
            <div class="ced-skill" v-for="(item, index) in filteredFramsAndTechs" :key="index">
                <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" />  {{item.name}}
            </div>
        </div>
        

        <br>
        <hr class="ced-hr">

        <div class="ced-contentBlock">
            <h2>Connaissances IT</h2>
            <div class="ced-skill" v-for="(item, index) in myITKnowledge" :key="index">
                <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" />  {{item.name}}
            </div>
        </div>


        <div class="ced-contentBlock">
            <h2>IDEs & logiciels de développement</h2>
            <div class="ced-skill" v-for="(item, index) in myIDEs" :key="index">
                <font-awesome-icon v-if="item.faIcon" :icon="['fab', item.faIcon]" />  {{item.name}}
            </div>
        </div>

    </div>
</template>

<script>
import importedSkills from "@/assets/skills.json";

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

        }
    },
    computed: {
        filteredSkills() {
            let ret = this.myLanguages.filter( (e) => {
                return e.level <= this.level ; 
            })
            return ret ; 
        },
        filteredFramsAndTechs() {
            let ret = this.myFrameworksAndTechnos.filter( (e) => {
                return e.level <= this.level ; 
            })
            return ret ; 
        },
        filteredITKnowledge() {
            let ret = this.myITKnowledge.filter( (e) => {
                return e.level <= this.level ; 
            })
            return ret ; 
        },
        filteredIDEs() {
            let ret = this.myIDEs.filter( (e) => {
                return e.level <= this.level ; 
            })
            return ret ; 
        },
        masteryTxt() {
            if(this.level == 1)
                return "Compétences maîtrisées.";
            else if(this.level == 2)
                return "Compétences déjà utilisées dans des projets.";
            else if(this.level == 3)
                return "Compétences déjà utilisées.";
            else if(this.level == 4)
                return "Toutes mes connaissances.";
        }
    },
}
</script>

<style lang="scss">
    @import "@/custom.scss";
</style>