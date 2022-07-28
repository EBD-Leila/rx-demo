import React, { useCallback, useMemo } from 'react'
import styles from './layout.module.scss'
import { LayoutProps, CustomLayoutOpts, LayoutType } from '@/components/layout/interface'
import { HeaderDesktopDefault, HeaderMobileDefault, HeaderDesktopSimple, HeaderMobileSimple } from './header'
// import { FooterDesktop, FooterMobile } from './footer'
import { useMediaQuery } from 'usehooks-ts'
import { HeaderTopBarDesktop, HeaderTopBarMobile } from './header-top-bar'
// import NewsLetter from '../newsletter/newsletter'

/** 
 * layoutType: 默认是Default
            * Default: 默认是有header(default) 和 footer(default)
            * Simple: 默认是有header(simple), 没有footer
            * Custom: 可以自由组合Defaul或者simple的header和footer; 或者完全自定义
 
 * 传layoutType 或者 customLayoutOpts
    请在页面上 getServerSideProps方法中传递
    export const getServerSideProps: GetServerSideProps = async () => {
        return {
            props: {
                layoutType: "Default", // Default Simple  Custom
                customLayoutOpts：{}
            },
        }
    }
*/

/**
 * hasHeader：判断是否需要header
 * hasDefaultHeader： 判断是否是default header， 这种模式需要从api获取header数据
 * hasFooter : 判断是否需要footer
 */

export function hasHeader(type: LayoutType, opts?: CustomLayoutOpts) {
    return !(type === 'Custom' && (!opts?.showDefaultHeader || !opts?.showSimpleHeader)) /*除此之外的都有header*/
}
export function hasDefaultHeader(type: LayoutType, opts?: CustomLayoutOpts) {
    return typeof type === 'undefined' || type === 'Default' || (type === 'Custom' && opts?.showDefaultHeader)
}
// export function hasFooter(type: LayoutType = 'Default', opts?: CustomLayoutOpts) {
//     return typeof type === 'undefined' || type === 'Default' || (type === 'Custom' && opts?.showFooter)
// }

const Layout: React.FC<LayoutProps> = (props) => {
    const { layoutType: type = 'Default', isMobile = true, customLayoutOpts, children, headerData } = props
    const matchMobileQuery = useMediaQuery('(max-width: 1024px)')
    const showMobile = isMobile || matchMobileQuery

    const getCustomHeader = useCallback(() => {
        let CustomHeader: React.ReactNode = null
        const { showDefaultHeader, showSimpleHeader } = customLayoutOpts || {}
        if (showDefaultHeader) {
            CustomHeader = showMobile ? (
                <HeaderMobileDefault notShowPopup={true} data={headerData} />
            ) : (
                <HeaderDesktopDefault notShowPopup={true} data={headerData} />
            )
        } else if (showSimpleHeader) {
            CustomHeader = showMobile ? <HeaderMobileSimple /> : <HeaderDesktopSimple />
        }
        return CustomHeader
    }, [showMobile, customLayoutOpts, headerData])

    const renderHeader = useCallback(() => {
        let Header: React.ReactNode = null
        if (hasHeader(type, customLayoutOpts)) {
            switch (type) {
                case 'Default':
                    Header = showMobile ? (
                        <HeaderMobileDefault notShowPopup={true} data={headerData} />
                    ) : (
                        <HeaderDesktopDefault notShowPopup={true} data={headerData} />
                    )
                    break
                case 'Simple':
                    Header = showMobile ? <HeaderMobileSimple /> : <HeaderDesktopSimple />
                    break
                case 'Custom':
                    Header = getCustomHeader()
                    break
                default:
                    break
            }
        }
        return Header
    }, [type, showMobile, customLayoutOpts, headerData, getCustomHeader])

    // const renderFooter = useCallback(() => {
    //     let Footer: React.ReactNode = null
    //     if (hasFooter(type, customLayoutOpts)) {
    //         Footer = showMobile ? <FooterMobile data={footerData} /> : <FooterDesktop data={footerData} />
    //     }
    //     return Footer
    // }, [type, showMobile, customLayoutOpts, footerData])

    const renderHeaderTopBar = useCallback(() => {
        const HeaderTopBar = showMobile ? <HeaderTopBarMobile /> : <HeaderTopBarDesktop />
        return HeaderTopBar
    }, [showMobile])

    const header = useMemo(() => {
        return renderHeader()
    }, [renderHeader])

    // const footer = useMemo(() => {
    //     return renderFooter()
    // }, [renderFooter])

    const headerTopbar = useMemo(() => {
        return renderHeaderTopBar()
    }, [renderHeaderTopBar])

    const classString = `layout-${showMobile ? 'mobile' : 'desktop'}`
    return (
        <div className={styles[classString]}>
            {headerTopbar}
            {header}
            {children}
            {/* <NewsLetter /> */}
            {/* {footer} */}
        </div>
    )
}
export default Layout
