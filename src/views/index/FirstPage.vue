<template>
    <section class="main">
        <div class="main__title">
            <h1 class="main__title__h1">My Blog</h1>
            <p class="main__title__ana">我的一生只需要清水，面包和工作 - 捷尔任斯基</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'header',
    setup() {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/tools/mediaQuery.scss';
@import '@/style/setting/var.scss';

.main {
    height: calc(100vh);
    background-image: url('./background_img.png');
    background-repeat: no-repeat;
    background-position: bottom;
    color: $color-primary;

    &__title {
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &__h1 {
            font-size: 1.3rem;
            white-space: nowrap;

            @include phone {
                font-size: 0.7rem;
                white-space: nowrap;
            }
        }

        &__ana {
            margin-top: 1rem;
            font-size: 0.18rem;
            line-height: 0.2rem;
            letter-spacing: 1px;
            font-family: 'SourceHanSerifCN-SemiBold-7.otf';

            @include phone {
                font-size: 0.12rem;
            }
        }

    }
}
</style>