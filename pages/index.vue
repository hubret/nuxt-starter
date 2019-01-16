<template>
    <div>
        <h1>{{myVar}}</h1>
        <p v-html="myVar"></p>
        <nuxt-link to="/wow">Wow</nuxt-link>
    </div>
</template>

<script>
    
//    import header from '~/components/header.vue'
//    import footer from '~/components/footer.vue'
    
    export default {
        computed: {
            myVar(){
                return this.$store.getters.getMyVariable;
            },
        }
    }
</script>

<style lang="scss" scoped>


</style>