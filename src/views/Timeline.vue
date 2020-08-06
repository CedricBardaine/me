<template>
    <div>
        <div class="ced-contentBlock">
            <h1>Mes expériences</h1>
            <b-button class="ced-btn"  @click="showPros = !showPros">{{displayProsTxt}}</b-button>
        </div>

        <b-row class="ced-contentBlock ced-customRow" v-for="(work, index) in myWorksToDisplay" :key="index">
            <b-col>
                <b-row class="h-50 p-3 ced-customRow-dateRow">{{ displayDate(work.date, work.date_end) }}</b-row>
                <b-row class="h-50 p-3 ced-customRow-orgRow">{{ work.org }}</b-row>
            </b-col>
            <b-col cols=6>
                <b-row class="ced-customRow-titleRow">{{ work.title }}</b-row>
                <b-row class="ced-customRow-defRow">{{ work.def }}</b-row>
            </b-col>
            <b-col>
                <div class="ced-skill fitMe" v-for="(hashtag, index) in work.hashtags" :key="index">
                    {{ hashtag }}
                </div>
            </b-col>
            <b-col cols=1 class="ced-customRow-links">
                <span v-if="work.source" style="font-size: 1.3em">
                    <a :href="work.source" target="_blank">
                        <font-awesome-icon :icon="['fab', 'git-alt']" />
                    </a>
                </span>
                <br>
                <span v-if="work.demo">
                    <a :href="work.demo" target="_blank">
                        <font-awesome-icon icon="globe" />
                    </a>
                </span>
            </b-col>
        </b-row>

        <div class="ced-contentBlock">
            <h2>Vous souhaitez en voir plus ?</h2>
            Visitez mon Github ! 
            <br>
            <MyGitHub/>
        </div>

    </div>
</template>

<script>
import works from "@/assets/works.json";
import MyGitHub from '@/components/MyGitHub.vue';

export default {
    components: {
        MyGitHub
    },
    data() {
        return {
            myWorks: works.works,
            showPros: false
        }
    },
    computed: {
        myWorksSorted() {
            return this.myWorks.sort( function(a,b) {
                let aDate = a.date.toUpperCase();
                let bDate = b.date.toUpperCase();
                if(aDate < bDate) return 1;
                if(aDate > bDate) return -1;
                else return 0;
            });
        },
        myWorksPro() {
            return this.myWorksSorted.filter( (work) => {
                return work.pro == true;
            });
        },
        myWorksToDisplay() {
            return this.showPros ? this.myWorksPro : this.myWorksSorted ; 
        },
        displayProsTxt() {
            if(this.showPros) 
            return "expériences pro. seulement";
            else 
            return 'toutes les expériences';
        },
    },
    methods: {
        displayMonth(monthNumber) {
            switch (monthNumber) {
                case '01': return 'janvier'; break;
                case '02': return 'février'; break;
                case '03': return 'mars'; break;
                case '04': return 'avril'; break;
                case '05': return 'mai'; break;
                case '06': return 'juin'; break;
                case '07': return 'juillet'; break;
                case '08': return 'août'; break;
                case '09': return 'septembre'; break;
                case '10': return 'octobre'; break;
                case '11': return 'novembre'; break;
                case '12': return 'décembre'; break;
                default:
                    return 'NOMONTH'
                    break;
            }
        },
        displayDate(date, date2) {
            let ret = "NODATA"; 
            // date = date + '';
            // date2 = date2 + '';

            let startDate_y0_m1_d2 = date.toString().split('-'); 
            let endDate_y0_m1_d2 = date2.toString().split('-'); 

            if(date !== "") {

                if(date2 === ""){
                    if(startDate_y0_m1_d2[1] === '##'  &&  startDate_y0_m1_d2[2] === '##') {
                        ret = '20'+ startDate_y0_m1_d2[0]; 
                    }
                    else if (startDate_y0_m1_d2[2] === '##') {
                        ret = this.displayMonth(startDate_y0_m1_d2[1]) +' '+ '20'+ startDate_y0_m1_d2[0];
                    }
                    else {
                        ret = date2;
                    }
                }

                else {
                    // If the year & the month are the same : 20-07
                    if(startDate_y0_m1_d2[0] === endDate_y0_m1_d2[0]  &&  
                    startDate_y0_m1_d2[1] === endDate_y0_m1_d2[1] &&
                    startDate_y0_m1_d2[1] !== '##'
                    ) {
                        // ret = displayMonth(startDate_y0_m1_d2[1]) +' '+ '20'+ startDate_y0_m1_d2[0];
                        ret = startDate_y0_m1_d2[0] +'/'+ startDate_y0_m1_d2[1] ; 
                    }
                    else if(startDate_y0_m1_d2[1] !== '##') {
                        ret = startDate_y0_m1_d2[0] +'/'+ startDate_y0_m1_d2[1]  +' - '+  endDate_y0_m1_d2[0] +'/'+ endDate_y0_m1_d2[1];
                    }
                    else {
                        ret = '20'+startDate_y0_m1_d2[0] +' - '+  '20'+endDate_y0_m1_d2[0] ;
                    }
                }
            }
            else {
                ret = "NO_START_DATE"
            }

            return ret ; 
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../custom.scss";


    .ced-customRow-dateRow {
        font-size: $fontSize-default*1.5;
        justify-content: center;;
    }
    .ced-customRow-orgRow {
        font-size: $fontSize-default*1.5;
        word-break: break-word;
        justify-content: center;;
        font-weight: bold ;
    }
    .ced-customRow-titleRow {
        font-size: $fontSize-default*1.5;
        justify-content: center;;
        padding-bottom: 0.5rem;
    }
    .ced-customRow-defRow {
        text-align: justify;

    }
    .ced-customRow-links {
        font-size: $fontSize-default*2 !important;
        text-align: center;
    }
</style>