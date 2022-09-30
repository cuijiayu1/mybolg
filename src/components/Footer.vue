<template>
    <div class="fonter">
        <div class="fonter__pc">
            <div class="fonter__pc__left">
                <a>myblog. 使用 vue 和 node.js 强力驱动 <span class="iconfont" style="padding-left: 4px;">&#xe79a;</span></a>
            </div>
            <div class="fonter__pc__right">
                <span class="iconfont" style="padding-left: 4px;">&#xe601;</span>
                <span class="iconfont" style="padding-left: 4px;">&#xe885;</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '../../src/style/setting/var.scss';

.fonter {

    &__pc,
    &__phone {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: -0.2rem;
        padding: 0 1rem;
        width: 100%;
        height: 1rem;
        box-sizing: border-box;
        color: #fff;
        font-size: $font-primary-contet;
        background-color: $color-primary;

        a {
            padding-right: .2rem;
        }
    }
}
</style>