<template>
    <div class="rerecommend">
        <h1 class="rerecommend__title">推荐文章</h1>
        <p class="rerecommend__content" v-for="(value,index) in rerecommendList">{{value}}</p>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: "Rerecommend",
    setup() {
        const rerecommendList = reactive([
            'TCA - SwiftUI 的救星？(三)',
            'Swift 结构化并发',
            'Package.swift toolchain 版本的选择',
            'Xcode4.2的debug小技巧'
        ])

        return {
            rerecommendList
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/setting/var.scss';

.rerecommend {
    padding: .33rem;
    width: 3.3rem;
    box-sizing: border-box;
    border: 1px solid $color-line;

    &__title {
        margin: 0;

        margin-bottom: $font-subhead-title;
        /* 仅向下一倍行距 */
        font-size: $font-subhead-title;
        line-height: $font-subhead-title;
    }

    &__content {
        font-size: $font-subhead-content;
        line-height: $font-subhead-content*2;
        /*一倍行距*/
        color: $color-dark-line;
    }
}

.dark {
    .rerecommend {
        border: 1px solid $color-dark-line;

        &__title {
            color: $color-dark-content;
        }

        &__content {
            color: $color-drak-label;
        }
    }
}
</style>
