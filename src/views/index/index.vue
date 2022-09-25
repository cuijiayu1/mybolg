<template>
    <Header />
    <FirstPage />
    <Article />
</template>

<script>
import FirstPage from './FirstPage.vue'
import Article from './Article.vue'
import Header from '../../components/Header.vue'
import useTheme from "../../hooks/useTheme.js"
export default {
    name: "index",
    components: {
        FirstPage,
        Header,
        Article
    },
    setup(props, context) {
        const { initTheme } = useTheme()
        initTheme()
    }
}
</script>

<style lang="scss" scoped>

</style>