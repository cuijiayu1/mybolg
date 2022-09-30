<template>
    <div class="search">
        <input class="search__input" type="text" placeholder="吾将上下而求索" />
        <input class="search__icon iconfont" type="submit" value="&#xe626;" />
    </div>
</template>

<script>
export default {
    name: "search"
}
</script>

<style lang="scss" scoped>
@import '@/style/setting/var.scss';

.search {
    width: 3.3rem;

    &__input {
        display: inline-block;
        padding-left: 0.1rem;
        width: 2.7rem;
        height: .5rem;
        font-size: $font-primary-contet;
        vertical-align: top;
        border: solid 2px $color-primary;
        box-sizing: border-box;
        background-color: #fff;
    }

    &__icon {
        display: inline-block;
        width: .6rem;
        height: .5rem;
        color: #fff;
        font-size: .22rem;
        vertical-align: top;
        background-color: $color-primary;
    }
}


</style>