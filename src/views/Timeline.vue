<template>
    <div>
        <div class="ced-contentBlock">
            <h1>Mes expériences</h1>
            <b-button class="ced-btn" :class="{'ced-btn-forceActive': showPros}" @click="showPros = !showPros">expériences pro.</b-button>
        </div>

        <b-row class="ced-contentBlock ced-workRow" v-for="(work, index) in myWorksToDisplay" :key="index">
            <b-col>
                <b-row class="h-50 p-3 ced-workRow-dateRow">{{ displayDate(work.date, work.date_end) }}</b-row>
                <b-row class="h-50 p-3 ced-workRow-orgRow">{{ work.org }}</b-row>
            </b-col>
            <b-col cols=6>
                <b-row class="ced-workRow-titleRow">{{ work.title }}</b-row>
                <b-row class="ced-workRow-defRow">{{ work.def }}</b-row>
            </b-col>
            <b-col>
                <div class="ced-skill fitMe" v-for="(hashtag, index) in work.hashtags" :key="index">
                    {{ hashtag }}
                </div>
            </b-col>
            <b-col cols=1 class="ced-workRow-links">
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

    </div>
</template>

<script>
import works from "@/assets/works.json";

export default {
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
        }
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

    .ced-workRow {
        font-size: $fontSize-default;
        padding-bottom:2rem;
        transition: 1s;
    }
    .ced-workRow:hover {
        font-size: 1.25em; //multiply by 1.1
        color: $color-primary;
        margin-top:1rem;
        margin-bottom:1rem;
        transition: 1s;
    }
    .ced-workRow * {
        align-self: center;
    }
    // .ced-workRow:hover .ced-workRow-links {
    //     color: $color-secondary !important;
    //     transition: 1s;
    // }
    .ced-workRow-dateRow {
        font-size: $fontSize-default*1.5;
        justify-content: center;;
    }
    .ced-workRow-orgRow {
        font-size: $fontSize-default*1.5;
        word-break: break-word;
        justify-content: center;;
        font-weight: bold ;
    }
    .ced-workRow-titleRow {
        font-size: $fontSize-default*1.5;
        justify-content: center;;
        padding-bottom: 0.5rem;
    }
    .ced-workRow-defRow {
        text-align: justify;

    }
    .ced-workRow-links {
        font-size: $fontSize-default*2 !important;
        text-align: center;
    }
</style>