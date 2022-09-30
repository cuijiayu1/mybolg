<template>
    <div class="line"></div>
</template>
<script>
export default {
    name: "Line"
}
</script>

<style lang="scss" scoped>
@import '../style/setting/var.scss';

.line {
    width: 100%;
    height: 1px;
    background-color: $color-line;
}

.dark{
    .line{
        background-color: $color-dark-line;
    }
}
</style>