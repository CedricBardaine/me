<template>
    <v-container>
        <v-row  justify="center" align="center" style="font-size: 2em" >
                <v-btn @click="redirect()" color="secondary" rounded>
                    <v-icon  style="font-size: 2em ; margin-right: 0.25em">mdi-git</v-icon>
                    : CedricBardaine
                </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        redirect() {
            window.open('https://github.com/CedricBardaine', '_blank');  
        }
    }
}
</script>