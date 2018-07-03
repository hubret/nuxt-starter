<template>
    <div>
        <h1>{{title}}</h1>
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
                    { hid: 'og:title', name: 'og:title', content: this.title },
                    { hid: 'og:image', name: 'og:image', content: 'https://i.kym-cdn.com/photos/images/original/001/255/097/022.jpg' },
                    { hid: 'description', name: 'description', content: 'Hello World WOW Page!!!' }
                ]
            }
        },
        created() {

        }
    }
</script>

<style>


</style>