<template>

    <Header />
    <FirstPage />
    <div class="pc">
        <div class="pc__body">
            <div class="pc__body__left">
                <ArticlePreview />

            </div>
            <div class="pc__body__right">
                <Search />
                <Statistic />
                <Rerecommend />
                <LabelRecmooend />
            </div>
        </div>
    </div>

    <div class="phone">
        <div class="phone__body">
            <ArticlePreview />
        </div>
    </div>

    <Footer />
</template>

<script>
import FirstPage from './FirstPage.vue'
import Search from './Search.vue'
import Statistic from './Statistic.vue'
import Rerecommend from './Rerecommend.vue'
import ArticlePreview from './ArticlePreview.vue'
import LabelRecmooend from './LabelRecmooend.vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import useTheme from "../../hooks/useTheme.js"
const { initTheme } = useTheme()
export default {
    name: "index",
    components: {
        FirstPage,
        Header,
        ArticlePreview,
        Search,
        Statistic,
        Rerecommend,
        Footer,
        LabelRecmooend
    },
    setup(props, context) {
        initTheme()
    }
}
</script>

<style lang="scss">
@import '../../style/tools/mediaQuery.scss';


.pc {
    &__body {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 1rem;
        width: 12rem;

        &__left {
            max-width: 7rem;
        }

        &__right>* {
            margin-bottom: 50px;
        }
    }
}

.phone {
    &__body {
        margin: 0 .2rem;
        margin-top: .8rem;
    }
}


@include phone {
    .pc {
        display: none;
    }

    .phone {
        display: flex;
    }
}

@include pc {
    .pc {
        display: flex;
    }

    .phone {
        display: none;
    }
}

.dark {
    background-color: #162822;

    .body {
        margin: 0 auto;
    }
}
</style>