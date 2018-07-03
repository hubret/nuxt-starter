<template>
    <div>
        <h1>INDEX</h1>
        <p>{{email}}</p>
        <p>{{clients}}</p>
    </div>
</template>

<script>
    
    export default {
        data () {
            return {
                title: this.$store.state.moduleUser.name,
                email: this.$store.state.moduleUser.email,
                clients: this.$store.state.moduleUser.clients
            }
        },
        methods: {
            addUser () {
                // Send an event upwards to be picked up by App
                this.$dispatch('button-pressed')
            }
        },
        head () {
            return {
                title: this.$nuxt.$store.state.moduleUser.name,
                meta: [
                    { hid: 'og:title', property: 'og:title', content: this.title },
                    { hid: 'og:type', property: 'og:type', content: 'website' },
                    { hid: 'og:url', property: 'og:url', content: 'http://172.104.208.23/' },
                    { hid: 'og:image', property: 'og:image', content: 'http://i2.kym-cdn.com/photos/images/newsfeed/001/135/941/b95.jpg' },
                    { hid: 'description', name: 'description', content: 'Hello World Index Page!!!' }
                ]
            }
        },
        created() {
            
        }
    }
</script>

<style>


</style>