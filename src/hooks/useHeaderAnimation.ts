import { useEffect, useRef } from 'react'

const useHeaderAnimation = () => {
    const topBarHide = useRef<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const topBarDom: HTMLElement = document.getElementById('headerTopBar') as HTMLElement
        const headerDom: HTMLElement = document.getElementById('header') as HTMLElement
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        const topBarHeight = topBarDom.offsetHeight //获取标签距离顶部位置
        if (!topBarDom || !headerDom) return
        if (scrollTop >= topBarHeight) {
            // 说明要消失头部
            if (!topBarHide.current) {
                topBarDom.style.top = `-${topBarHeight}px`
                headerDom.style.top = '0'
                topBarHide.current = true
            }
        } else {
            // 说明要出现头部
            if (topBarHide.current) {
                topBarDom.style.top = '0'
                headerDom.style.top = ``
                topBarHide.current = false
            }
        }
    }
}

export default useHeaderAnimation
