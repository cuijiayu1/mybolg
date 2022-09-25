<template>
    <div class="btn">
        <span v-show="!modelValue" class="iconfont">&#xe636;</span>
        <span v-show="modelValue" class="iconfont">&#xe6a0;</span>
        <label class="switch">
            <input type="checkbox" @click="clickBtn">
            <div class="slider round" :class="{ checked:modelValue }">
                <span class="slider-text on"></span>
            </div>
        </label>
    </div>
</template>

<script>
import { ref, toRefs } from 'vue'
export default {
    name: 'NightBtn',
    props: {
        modelValue: Boolean
    },
    emits: ["update:modelValue"],
    setup(props, context) {
        const { modelValue } = toRefs(props)
        const clickBtn = function () {
            context.emit('update:modelValue', !modelValue.value)
        }
        return {
            modelValue, clickBtn
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/setting/var.scss';

.btn {
    display: flex;
    align-items: center;
    font-size: #fff;
}

.iconfont {
    padding-right: 10px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 22px;
}

.switch input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196F3;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 3px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider.checked {
    background-color: #2196F3;
}

.slider.checked:before {
    background-color: #fff;
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.slider-text {
    color: #fff;
    position: absolute;
    left: 24px;
    margin: 0 auto;
    font-size: $font-primary;
    line-height: 22px
}

.on.slider-text {
    left: 8px;
}
</style>