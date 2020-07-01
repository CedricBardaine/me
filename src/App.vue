<template>
    <div id="app" :class="{nightMode: isNightModeOn , lightMode: !isNightModeOn}">
        <b-container fluid style="height: 100%;">
            
            <b-row style="height: 100%;">
                <b-col cols="2" id="navMenu">
                    
                    <div class="menuLink" v-on:click="currentPage = 'home'">
                        <router-link class="menuLink" v-bind:class="{menuLink_current: currentPage == 'home'}" to="/"> 
                        <!-- In order to make the icon bigger when current page, it must has a :active css class dedicated because the normal fon-size is 2rem and the :active of menu item make it 2rem si we don't see for the moment, but it's cool. -->
                            <!-- <b-icon class="bigIcon" icon="house-fill"></b-icon>  -->
                            <font-awesome-icon class="bigIcon" icon="home" />
                        </router-link> <br>
                    </div>
                    <div class="menuLink" v-on:click="currentPage = 'about'">
                        <router-link class="menuLink" v-bind:class="{menuLink_current: currentPage == 'about'}" to="/about">About</router-link> <br>
                    </div>
                    
                    <div @click="switchMode" class="switchBtn">
                        <b-icon v-if="isNightModeOn"    class="bigIcon" icon="sun"></b-icon>
                        <b-icon v-else                  class="bigIcon iconDark" icon="moon"></b-icon>
                    </div>
                    
                </b-col>
                
                <b-col cols="10">
                    <b-container class="currentPage">
                        <router-view/>
                    </b-container>
                </b-col>
            </b-row>
            
        </b-container>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                currentPage: 'home',
                isNightModeOn: true,
            }
        },
        computed: {
            
        },
        methods: {
            switchMode() {
                this.isNightModeOn = !this.isNightModeOn ; 
            },
        },
        watch: {
            currentPage: (val) => {
                this.currentPage = this.currentPage;
            }
        }
    }
</script>



<style lang="scss">
    @import "./custom.scss";
    
    #app {
        font-family: 'Poppins';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100%;
        width: 100%
    }
    
    #navMenu {
        background: $color-primary;
        color: $color-black;
        padding-top: 1rem;
    }
    
    
    .nightMode {
        background: $color-black;
        color: $color-white;
    }
    .lightMode {
        background: $color-white;
        color: $color-black
    }
    
    
    .menuLink {
        color: $color-white;
        padding-bottom: 1rem;
    }
    .menuLink:hover {
        color: $color-black;
        text-decoration: none;
    }
    .menuLink:active {
        color: $color-black;
        text-decoration: none;
    }
    .menuLink_current {
        font-size: $fontSize-default*2 !important;
    }
    
    
    .bigIcon {
        font-size: 2rem;
    }
    .switchBtn {
        color: $color-white;
    }
    .iconDark {
        color: $color-black;
    }
    
    .currentPage {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
</style>
