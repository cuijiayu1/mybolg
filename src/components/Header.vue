<template>
  <div class="header" :class="{
    'show-on-front':isShowDetail
  }">
    <div class="header__pc">
      <div class="header__pc__left">
        <a>关于我<span class="iconfont" style="padding-left: 4px;">&#xe600;</span></a>
        <a>归档</a>
      </div>

      <div class="header__pc__right">
        <NightBtn v-model="isNight" />
      </div>
    </div>

    <div class="header__phone">
      <div class="header__phone__left">
        <NightBtn v-model="isNight" />
      </div>

      <div class="header__phone__right"><a @click="isShowDetail = !isShowDetail"><span
            class="iconfont">&#xeaf1;</span></a></div>
    </div>

    <div v-if="isShowDetail" class="header__showDetail">
      <div class="header__showDetail__row">
        <div class="header__showDetail__row__body"><span class="iconfont">&#xe600;</span>&nbsp;关于我</div>
        <div class="header__showDetail__row__body"><span class="iconfont">&#xe646;</span>&nbsp;归档</div>
      </div>
      <div class="header__showDetail__row">
        <div class="header__showDetail__row__body">mybolg</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import useGetWinState from '../hooks/useGetWinState'
import NightBtn from './NightBtn.vue'
import useTheme from "../hooks/useTheme.js"
const { getCurrentTheme, setlight, setDark } = useTheme();
export default {
  name: 'Header',
  components: {
    NightBtn
  },
  setup() {
    const isNight = ref(false);
    const isShowDetail = ref(false);
    const currentTheme = getCurrentTheme()
    if (currentTheme == 'light' || currentTheme == null) {
      isNight.value = false;
    } else {
      isNight.value = true;
    }

    useGetWinState((state) => {
      console.log(state)
      if (state == `"pc"`) {

        isShowDetail.value = false;
      }
    });

    watch(isNight, (newValue, oldValue) => {
      if (newValue) {
        setDark()
      } else {
        setlight()
      }
    })

    return {
      isNight,
      isShowDetail
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../src/style/setting/var.scss';
@import '../../src/style/tools/mediaQuery.scss';

.header {

  &__pc,
  &__phone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.6rem;
    padding: 0 1rem;
    box-sizing: border-box;
    font-size: $font-primary-contet;
    color: #fff;
    background-color: $color-primary;
    &__left{
      a{margin-right: .3rem;}
    }
  }

  &__phone {
    padding: 0 0.3rem;
  }

  @include phone {
    &__pc {
      display: none;
    }

    &__phone {
      display: flex;
    }
  }

  @include pc {
    &__pc {
      display: flex;
    }

    &__phone {
      display: none;
    }
  }
}

.header__showDetail {
  z-index: 999;
  padding: 10px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  font-size: $font-primary-contet;
  color: #fff;
  background-color: $color-primary;

  &__row {
    display: flex;
    justify-content: space-around;

    &__body {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: .06rem;
      padding: .2rem;
      width: 100%;
      background-color: #3f3f4c;
    }
  }
}

.show-on-front {
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
