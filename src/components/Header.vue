<template>
  <div class="header">
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

      <div class="header__phone__right">
        <a><span class="iconfont">&#xe600;</span></a>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, watch } from 'vue'
import NightBtn from './NightBtn.vue'
import useTheme from "../hooks/useTheme.js"
const { getCurrentTheme,setlight, setDark } = useTheme();
export default {
  name: 'Header',
  components: {
    NightBtn
  },
  setup() {
    let isNight = ref(false);
    const currentTheme = getCurrentTheme()
    if (currentTheme == 'light' || currentTheme == null) {
      isNight.value = false;
    } else {
      isNight.value = true
    }

    watch(isNight, (newValue, oldValue) => {
      if (newValue) {
        setDark()
      } else {
        setlight()
      }
    })

    return {
      isNight
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
    font-size: $font-primary;
    color: #fff;
    background-color: $color-primary;

    a {
      padding-right: .2rem;
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
</style>
