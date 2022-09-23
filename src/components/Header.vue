<template>
  <div class="header">
    <div class="header__left">
      <a>关于我</a>
      <a>归档</a>
    </div>

    <div class="header__right">
      <NightBtn />
    </div>

    <nav class="phone-nav" style="display: none;">
      <a>关于我&nbsp;&nbsp;<span class="iconfont">&#xf0145;</span></a>
      <a>归档</a>
    </nav>
  </div>
</template>

<script>
import NightBtn from './NightBtn.vue'

export default {
  name: 'Header',
  components: {
    NightBtn
  }
}
</script>

<style lang="scss" scoped>
@import '../../src/style/setting/var.scss';

.header {
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
</style>
