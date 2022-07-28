// import type { NextPage } from 'next'
// import Script from 'next/script'
import styles from './header-top-bar-desktop.module.scss'
import { useHeaderAnimation } from '../../../hooks'
import classNames from 'classnames'

const HeaderTopBarDesktop = () => {
    useHeaderAnimation()

    return (
        <div id='headerTopBar' className={styles['header-top-bar']}>
            <div className={styles['promotion-notice']}></div>
            <div
                id='usablenet-mode'
                className={classNames(styles['accessibility-mode'], 'UsableNetAssistive')}
                data-event-cate='Navigation'
                data-event-name='Accessibility'
                data-event-label='Accessibility'
                tabIndex={1}
            >
                Enter Accessibility Mode
            </div>

            {/* <Script
                id='accessibility-bannar'
                src='https://eyebuydirect.usablenet.com/pt/start'
                strategy='lazyOnload' // 设置 js 加载的方式
                onLoad={() => {
                    const usablenetClick = document.getElementById('usablenet-mode')
                    if (usablenetClick) {
                        usablenetClick.addEventListener('click', function () {
                            ;(window as any).enableUsableNetAssistive()
                        })
                    }
                }}
            /> */}
        </div>
    )
}
export default HeaderTopBarDesktop
