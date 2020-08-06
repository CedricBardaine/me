<template>
    <div>
        <h1>Contactez moi de préférence par : </h1>
        <br>

<!-- < d i v   style="text-align: center;"   > -->
        <div class="linksBlock">

            <p>
            <font-awesome-icon class="littleIcon"  :icon="['fab', 'linkedin']" />
            : <a href="https://www.linkedin.com/in/c%C3%A9dric-bardaine-671ba014a/" target="_blank">www.linkedin.com</a>
            </p>
            <p>
            <font-awesome-icon class="littleIcon"  icon="envelope" />
            : <a href="mailto:cedricbardaine@gmail.com" target="_blank">cedricbardaine@gmail.com</a>
            </p>
        </div>

    </div>
</template>

<style>
    .linksBlock {
        font-size: larger;
        
        display: inline-block; 
        text-align: left;


    }
    .linksBlock .littleIcon {
    }
</style>