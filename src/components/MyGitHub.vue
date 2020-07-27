<template>
    <a id="toMyGitHub" href="https://github.com/CedricBardaine" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
        : CedricBardaine
    </a>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    @import "@/custom.scss";

    #toMyGitHub {
        font-size: $fontSize-default*2;
    }
    #toMyGitHub:hover {
        // color: $color-secondary;
        // text-decoration: none;
    }
</style>