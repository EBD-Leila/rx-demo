/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import TranslatedLink from 'src/components/translatedLink/translatedLink'
// import Image from 'next/image'
import styles from './header-mobile-default.module.scss'
import { Drawer, Menu, Button } from '@eyebuydirect/ebd.front.lib'
// import Router, { useRouter } from 'next/router'
import { HeaderProps, INav } from 'src/components/layout/interface'
import { Search, Favorite, Cart, Menu as IconMenu, Chat, Telephone, Mail, Local, Close } from 'src/components/icons'
// import { headerEvent, handleGaTrigger } from 'ga'
// import getConfig from 'next/config'
// import { isFrenchLocale } from '../../../libs/utility'
// import { getCookie } from '@/components/first-visit-popup/cookie'
// import useLiveChat from '@/components/common/useLiveChat'

// const { eventCate, eventName, eventLabel, mobileMenuLabel } = headerEvent

const { Item, SubMenu } = Menu
import WishlistMobile from 'src/components/layout/header/wishlist/wishlist-mobile'
import TopSearch from 'src/components/topSearch/topSearch'
import { useTranslation } from 'react-i18next'

const NavImageMenu: React.FC<INav> = ({ title, images }) => (
    <SubMenu
        eventKey={title}
        key={title}
        title={title}
    >
        {images.map((item, key: number) => (
            <Item key={item.title + key}>
                <TranslatedLink href={item.url}>
                    <a
                        className={styles['nav-image']}
                    >
                        {item.img && <img src={item.img.src} alt={item.img.alt} width={82} height={54} />}
                        <span className={styles['nav-title']}>
                            <div dangerouslySetInnerHTML={{ __html: item.title }} />
                        </span>
                    </a>
                </TranslatedLink>
            </Item>
        ))}
    </SubMenu>
)

const NormalMenu: React.FC<INav> = ({ title, columns, images }) => {
    // const router = useRouter()
    // const { locale } = router
    const eventKeyMapFR: {
        [key: string]: string
    } = {
        'Lunettes de vue': 'eyeglasses',
        'Lunettes de soleil': 'sunglasses',
        Marques: 'brands',
        'Nos verres': 'lenses',
    }
    const menuTitle = title.toLowerCase()
    let eventLabelKey = menuTitle

    // if (locale === 'fr-fr' || locale === 'fr') {
    //     if (eventKeyMapFR[title]) {
    //         eventLabelKey = eventKeyMapFR[title]
    //     }
    // }

    let dynamicCount = 0

    return (
        <SubMenu
            eventKey={title}
            key={title}
            title={title}
        >
            {columns.map(({ title, style, links }, key: number) => {
                if (style === 'item') {
                    return links.map((item, index: number) => (
                        <Item key={item.title}>
                            <TranslatedLink href={item.url}>
                                <a
                                    title={item.title}
                                    style={{ color: item.color || 'black' }}
                                    className={item.title === 'On Sale' ? 'onsale-color' : ''}
                                >
                                    {item.title}
                                </a>
                            </TranslatedLink>
                        </Item>
                    ))
                } else {
                    return (
                        <SubMenu
                            key={`${menuTitle}-${title}`}
                            title={title}
                            // onTitleClick={() => {
                            //     if (menuTitle === 'lenses') {
                            //         handleGaTrigger({
                            //             cate: eventCate.navCate,
                            //             name: eventName[eventLabelKey],
                            //             label: eventLabel[eventLabelKey].titleLabel[key],
                            //         })
                            //     }
                            // }}
                        >
                            {links.map((item) => {
                                dynamicCount++
                                return (
                                    <Item key={`${menuTitle}-${item.title}`}>
                                        <TranslatedLink href={item.url}>
                                            <a
                                                title={item.title}
                                                style={{ color: item.color || 'black' }}
                                            >
                                                {item.icon && item.icon.position === 'front' ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img className={styles['im-front-icon-nav']} src={item.icon.src} alt='' height={16} />
                                                ) : null}
                                                {item.title}
                                                {item.icon && item.icon.position === 'end' ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img className={styles['im-end-icon-nav']} src={item.icon.src} alt='' height={16} />
                                                ) : null}
                                            </a>
                                        </TranslatedLink>
                                    </Item>
                                )
                            })}
                        </SubMenu>
                    )
                }
            })}
            {images.length === 1 &&
                images.map((item, index: number) => (
                    <Item key={item.title}>
                        <TranslatedLink href={item.url}>
                            <a
                            >
                                {item.title}
                            </a>
                        </TranslatedLink>
                    </Item>
                ))}
        </SubMenu>
    )
}

const HeaderMobileDefault: React.FC<HeaderProps> = ({ data, notShowPopup }) => {
    const [loggedIn, SetLoggedIn] = useState(false)
    // useLiveChat()
    useEffect(() => {
        // SetLoggedIn(getCookie('is_login') === '1')
    }, [])
    // const router = useRouter()
    // const { locale } = router
    const { t } = useTranslation('common')
    // const { publicRuntimeConfig } = getConfig()
    // const { cdn_url, cdn_path } = publicRuntimeConfig
    const { nav: headerNav, help: helpData, wishlist: wishlistData } = data

    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [cartVisible, setCartVisible] = useState<boolean>(false)
    const [wishlistVisible, setWishlistVisible] = useState<boolean>(false)
    const rootSubmenuKeys = [...headerNav.map((e) => e.title), t('header.mobile.help')]
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [searchVisible, setSearchVisible] = useState<boolean>(false)
    const onOpenChange = (keys: string[]) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        if (!latestOpenKey || rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey != null ? [latestOpenKey] : [])
        }
    }

    return (
        <div id='header' className={styles.header}>
            {/* <div className={styles['top-bar']}>111</div> */}
            <div className={styles.container}>
                <div className={styles['btn-left-shortcut']}>
                    <span
                        className={styles['btn-left-menu']}
                        onClick={() => setMenuVisible(true)}
                    >
                        <IconMenu width={26} height={26} />
                    </span>
                    <span
                        className={styles['btn-left-search']}
                        onClick={() => setSearchVisible(!searchVisible)}
                    >
                        {searchVisible ? <Close width={16} height={16} /> : <Search width={16} height={16} />}
                    </span>
                </div>
                <a className={styles.logo}>
                    <img
                        // layout={'fixed'}
                        // src={`${cdn_url}${cdn_path}/images/icons/ebd-logo-mobile.svg`}
                        alt='EyeBuyDirect.com'
                        width={74}
                        height={30}
                    />
                </a>
                <ul className={styles['btn-right-shortcut']}>
                    <li>
                        <div
                            // onClick={() => {
                            //     if (notShowPopup) {
                            //         if (locale === 'fr-fr') {
                            //             Router.push('/favoris')
                            //         } else {
                            //             Router.push('/favorite')
                            //         }
                            //     } else {
                            //         setWishlistVisible(true)
                            //     }
                            // }}
                            className={styles['shortcut-top-link']}
                        >
                            <Favorite width={17} height={17} />
                            {wishlistData && wishlistData.length !== 0 && <span className={styles['favorite-nums']}>{wishlistData.length}</span>}
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                if (notShowPopup) {
                                    // if (locale === 'fr-fr') {
                                    //     Router.push('/panier')
                                    // } else {
                                    //     Router.push('/cart')
                                    // }
                                } else {
                                    setCartVisible(true)
                                }
                            }}
                            className={styles['shortcut-top-link']}
                        >
                            <Cart width={15} height={18} />
                            {/* <span className={styles['cart-nums']}></span> */}
                        </div>
                    </li>
                </ul>
            </div>

            <div className={styles['search-dropdown']} style={{ padding: `${searchVisible ? '10px 20px' : '0 20px'}` }}>
                <div style={{ display: `${searchVisible ? 'block' : 'none'}` }}>
                    <TopSearch />
                </div>
            </div>

            <Drawer
                className='header-drawer header-menu-drawer'
                title={
                    <TranslatedLink href='/passport'>
                        {loggedIn ? (
                            <a>
                                <Button type='primary'>{t('header.signin')}</Button>
                            </a>
                        ) : (
                            <div style={{ minHeight: '41px' }}></div>
                        )}
                    </TranslatedLink>
                }
                placement='left'
                visible={menuVisible}
                width='100vw'
                onClose={() => {
                    setMenuVisible(false)
                }}
            >
                <Menu mode='inline' triggerSubMenuAction='click' openKeys={openKeys} onOpenChange={onOpenChange}>
                    {headerNav.map((navData) => {
                        const { title, columns } = navData
                        if (columns.length === 0) {
                            return <NavImageMenu {...navData} key={title}></NavImageMenu>
                        } else {
                            return <NormalMenu {...navData} key={title} />
                        }
                    })}
                    <SubMenu
                        key='help'
                        title={t('header.mobile.help')}
                    >
                        {helpData.links.length &&
                            helpData.links.map((link, index: number) => {
                                return (
                                    <Item key={link.title}>
                                        <TranslatedLink href={link.url}>
                                            <a
                                                title={link.title}
                                            >
                                                {link.title}
                                            </a>
                                        </TranslatedLink>
                                    </Item>
                                )
                            })}

                        <div className={styles['help-details']}>
                            <h4>{t('header.mobile.question')}</h4>
                            <div className={styles['faq-others']}>
                                {/* {!isFrenchLocale(locale) && ( */}
                                    <div className={styles['nav-live-chat']}>
                                        <div className={styles['head-live-chat']}></div>
                                        <div
                                            className={styles['chat-tip']}
                                            id='EBD_LP_DIV_1404808752448'
                                        >
                                            <Chat width={18} height={16} />
                                            <span>Start a live chat</span>
                                        </div>
                                    </div>
                                {/* )} */}
                                <div className={styles['faq-tel-time']}>
                                     <Telephone width={16} height={16} />
                                    {/* {!isFrenchLocale(locale) && ( */}
                                        <a className={styles['tel']} href={t('header.eyedoctor.ext')}>
                                            <span>{t('header.eyedoctor.phone')}</span>
                                        </a>
                                    {/* )} */}
                                    <span className={styles['tel-txt']}>{t('header.available')}</span>
                                </div>

                                <a
                                    href='mailto:support@eyebuydirect.com'
                                    className={styles['faq-send-msg']}
                                >
                                    <Mail width={16} height={14} />
                                    <span>support@eyebuydirect.com</span>
                                </a>

                                {/* {locale === 'en-us' && ( */}
                                    <a
                                        href='eyecare/find-eye-doctor'
                                        className={styles['btn-find']}
                                    >
                                        <Local width={15} height={18} />
                                        <span>Find eye doctors near you</span>
                                    </a>
                                {/* )} */}
                            </div>
                        </div>
                    </SubMenu>
                </Menu>
                <div className={styles['slide-footer']}>
                    <TranslatedLink href='/default/contact'>
                        <a>
                            {t('header.mobile.contact')}
                        </a>
                    </TranslatedLink>
                    <TranslatedLink href='/order-tracking/index'>
                        <a>
                            {t('header.mobile.order-tracking')}
                        </a>
                    </TranslatedLink>

                    {/* {locale == 'fr' ? (
                        <a className={styles['language-select']} href='/'>
                            <span>English</span>
                        </a>
                    ) : (
                        ''
                    )}
                    {locale == 'en-ca' ? (
                        <a className={styles['language-select']} href='/fr'>
                            <span>Français</span>
                        </a>
                    ) : (
                        ''
                    )} */}
                </div>
            </Drawer>

            <Drawer
                className='header-drawer'
                title={<>My Wishlist {wishlistData && wishlistData.length !== 0 && `(${wishlistData.length})`}</>}
                width='100vw'
                visible={wishlistVisible}
                onClose={() => setWishlistVisible(false)}
            >
                {wishlistData && (
                    <div className={(styles['shortcut-sub-content'], styles['sub-wishlist'])}>
                        <WishlistMobile data={wishlistData} />
                    </div>
                )}
            </Drawer>

            <Drawer className='header-drawer' title={<>My Cart (3)</>} width='100vw' visible={cartVisible} onClose={() => setCartVisible(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default HeaderMobileDefault
