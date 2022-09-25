/**
 * 设置皮肤 
 */

export default () => {
    const _setClassName = function (string) {
        const html = document.documentElement;
        if (window && html) {
            html.className = string;
        }
    }

    const getCurrentTheme = function () {
        return window.localStorage.getItem('theme-appearance')
    }

    const setlight = function () {
        window.localStorage.setItem('theme-appearance', 'light')
        _setClassName('light')
    }

    const setDark = function () {
        window.localStorage.setItem('theme-appearance', 'dark')
        _setClassName('dark')
    }

    //进入页面初始化使用，将theme的class写到html中，每个页面进入前都要调用
    const initTheme = function () {
        let theme = window.localStorage.getItem('theme-appearance')
        if (!theme) {
            setlight()
            theme = 'light'
        }

        _setClassName(theme)
    }

    return { getCurrentTheme, setlight, setDark, initTheme }
}