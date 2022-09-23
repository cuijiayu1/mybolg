<template>
    <Header/>
    <FirstPage/>
</template>

<script>
    import FirstPage from './FirstPage.vue'
    import Header from '../../components/Header.vue'
    export default{
        name:"index",
        components:{
            FirstPage,
            Header
        }
    }
</script>

<style lang="scss" scoped>

</style>