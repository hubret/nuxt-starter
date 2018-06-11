<template>
    <h1>Hello world!</h1>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Hello World!'
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: 'og:title', name: 'og:title', content: this.title },
                    { hid: 'og:title', name: 'og:title', content: this.title },
                    { hid: 'description', name: 'description', content: 'My custom description' }
                ]
            }
        }
    }
</script>