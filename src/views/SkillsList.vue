<template>
    <div>

        <div class="ced-contentBlock">
            <h1>Mes compétences</h1>
        </div>

        <div class="ced-contentBlock">
            <input class="ced-rangeInput" type="range" min="1" max="4" step="1" v-model="level">
            
            <p>Au niveau {{level}}, les compétences qui s'affichent sont :</p>
            <p v-if="level >= 1">
                des compétences que je maîtrise particulièrement, je les utilise régulièrement et je suis à mon aise avec elles. 
            </p>
            <p v-if="level >= 2">
                Des compétences que j'ai déjà bien utilisé dans des projets, mais il se peut que cela date un peu. 
            </p>
            <p v-if="level >= 3">
                Ainsi que des compétences que j'ai déjà utilisé une ou plusieurs fois. 
            </p>
            <p v-if="level >= 4">
                Mais aussi compétences que j'ai déjà étudié, ou pour lesquelles j'ai déjà fait de la veille. 
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
        }
    },
    computed: {
        filteredSkills() {
            let ret = this.myLanguages.filter( (e) => {
                return e.level <= this.level ; 
            })
            console.log(ret);
            return ret ; 
        }
    },
}
</script>

<style lang="scss">
    @import "@/custom.scss";
</style>