<template>
    <div id="app">
        
        <!-- <div id="nav" align="right" >
            <router-link  class="btn btn-primary shadow-2 mb-4" v-if="authenticated" to="/login" v-on:click.native="logout()" margin-top:2% replace></router-link>
   
        </div> -->
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                url: "/"
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style scoped>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 100%;
        height: 100%;
        margin: auto;
        
    }
</style>