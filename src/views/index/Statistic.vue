<template>
    <div class="statistic">
        <div class="statistic__part">
            <p class="statistic__part__num">123</p>
            <p class="statistic__part__title">全站文章</p>
        </div>
        <p class="statistic__line">|</p>
        <div class="statistic__part">
            <p class="statistic__part__num">123</p>
            <p class="statistic__part__title">全站文章</p>
        </div>
        <p class="statistic__line">|</p>
        <div class="statistic__part">
            <p class="statistic__part__num">123</p>
            <p class="statistic__part__title">全站文章</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Statistic"
}
</script>

<style lang="scss" scoped>
@import '@/style/setting/var.scss';

.statistic {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    align-items: center;
    padding: 0 .14rem;
    width: 3.3rem;
    height: .8rem;
    border: 1px solid $color-line;

    &__line {
        color: $color-line;
    }

    &__part {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        &__num {
            font-size: $font-subhead-title;
            font-weight: bold;
            margin-bottom: 5px;
            color: $color-primary;
        }

        &__title {
            font-size: $font-subhead-content;
            color: $color-dark-line;
        }
    }
}

.dark {
    .statistic {
        color: $color-dark-line;
        border: 1px solid $color-dark-line;
        &__part {

            &__num {
                color: $color-dark-content;
            }
            
            &__title {
                color:  $color-drak-label;
            }
        }
    }
}
</style>