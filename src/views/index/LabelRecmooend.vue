<template>
    <div class="rerecommend">
        <h1 class="rerecommend__title">推荐标签</h1>
        <Label class="rerecommend__content" v-for="(value,index) in rerecommendList" :value="value">{{value}}</Label>
    </div>
</template>

<script>
import { reactive } from 'vue';
import Label from '../../components/Label.vue'
export default {
    name: "Rerecommend",
    components: {
        Label
    },
    setup() {
        const rerecommendList = reactive([
            '全部', '技术杂谈', '感悟', 'UI', '设计模式', 'node.js'
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
        color: $color-primary;
        margin-bottom: $font-subhead-title;
        /* 仅向下一倍行距 */
        font-size: $font-subhead-title;
        line-height: $font-subhead-title;
    }

    &__content{
        margin: .05rem;
    }
}

.dark {
    .rerecommend {
        border: 1px solid $color-dark-line;

        &__title {
            color: $color-dark-content;
        }
    }
}
</style>
