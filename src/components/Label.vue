<template>
    <div class="label">
        <p class="label__title"><span class="iconfont">&#xec1e;</span><span>{{value}}</span></p>
    </div>
</template>

<script>
export default {
    name: 'Label',
    props: {
        value: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/setting/var.scss';
.label {

    display: inline-block;
    padding-left: .05rem;
    padding-right: .1rem;
    height: .25rem;
    position: relative;
    color: #fff;
    background-color: #33333d;

    &__title {
        display: inline;
        font-size: .13rem;
        line-height: .25rem;
    }

}


.dark {
    .label {
        background-color: $color-drak-label;

    }
}
</style>