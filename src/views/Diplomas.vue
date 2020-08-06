<template>
    <div>

        <div class="ced-contentBlock">
            <h1>Mes diplômes</h1>
        </div>

        <div class="ced-contentBlock">
            <b-row class='diplomaRow ced-customRow' v-for="(diplom, i) in myDiplomas" :key="i">
                <b-col>{{diplom.date}}</b-col>
                <b-col>{{diplom.title}}</b-col>
                <b-col>{{diplom.where}}</b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import diplomas from "@/assets/diplomas.json";

export default {
    data() {
        return {
            myDiplomas: diplomas.diplomas
        }
    },
}
</script>