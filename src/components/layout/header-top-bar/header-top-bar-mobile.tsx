// import type { NextPage } from 'next'
import styles from './header-top-bar-mobile.module.scss'
import { useHeaderAnimation } from '../../../hooks'
import classNames from 'classnames'
// import Image from 'next/image'
// import Script from 'next/script'

const HeaderTopBarMobile = () => {
    useHeaderAnimation()

    return (
        <div id='headerTopBar' className={styles['header-top-bar']}>
            <div
                id='usablenet-mode'
                className={classNames(styles['usablenet'], 'UsableNetAssistive')}
                data-event-cate='Navigation'
                data-event-name='Accessibility'
                data-event-label='Accessibility'
                tabIndex={1}
            >
                <div className={styles['accessibility-mode']}>
                    {/* <Image layout={'fixed'} src={'/images/icons/icon-usablenet-2x.png'} width={17} height={20} alt='usableNet' /> */}
                    <img src={'/images/icons/icon-usablenet-2x.png'} width={17} height={20} alt='usableNet' />
                </div>
            </div>
            <div className={styles['promotion-notice']}></div>

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
export default HeaderTopBarMobile
