<template>
    <v-container>
        <v-col>
            
            <v-row justify="center">
                <h1 >Contactez moi de préférence par : </h1>
            </v-row>
            <div class="c-spacer"></div>
            
            <v-row justify="center">

                <v-col justify="center">
                    <v-row justify="center">
                        <v-icon class="bigIcon" color="primary">mdi-linkedin</v-icon>
                    </v-row>

                    <v-row class="bigFont" justify="center">
                        <a href="https://www.linkedin.com/in/c%C3%A9dric-bardaine-671ba014a/" target="_blank">www.linkedin.com</a>
                    </v-row>
                </v-col>
                <v-col justify="center">
                    <v-row justify="center">
                        <v-icon class="bigIcon" color="primary">mdi-email</v-icon>
                    </v-row>
                    
                    <v-row justify="center">
                        <a class="bigFont" href="mailto:cedricbardaine@gmail.com" target="_blank">cedricbardaine@gmail.com</a>
                    </v-row>
                </v-col>
                
            </v-row>
        </v-col>
    </v-container>
</template>
<style scoped>
    .bigIcon {
        font-size: 5em;
    }
    .bigFont {
        font-size:1.5em
    }
</style>
