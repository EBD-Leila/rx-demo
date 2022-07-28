/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { HeaderProps, INav, INormalLink } from 'src/components/layout/interface'
// import Image from 'next/image'
import TranslatedLink from 'src/components/translatedLink/translatedLink'
import classNames from 'classnames'
import styles from './header-desktop-default.module.scss'
import TopSearch from 'src/components/topSearch/topSearch'
import { useTranslation } from 'react-i18next'
// import { useRouter } from 'next/router'
import { Button, Navigation } from '@eyebuydirect/ebd.front.lib'
import { Help, Favorite, Cart, Chat, Telephone, Mail, Local, LoggedIn } from '../../icons'
// import { headerEvent } from 'ga'
// import getConfig from 'next/config'
// import { isFrenchLocale } from '../../../libs/utility'
// import { getCookie } from '@/components/first-visit-popup/cookie'
// import Link from 'next/link'
// import useLiveChat from '@/components/common/useLiveChat'

// const eventCate = headerEvent.eventCate
// const eventName = headerEvent.eventName
// const eventLabel = headerEvent.eventLabel

const NavItemWithMutipleImage: React.FC<INav> = ({ title, columns, images }) => {
    let eventLabelKey: string = title.toLowerCase()
    // const { locale } = useRouter()

    const eventKeyMapFR: {
        [key: string]: string
    } = {
        'Lunettes de vue': 'eyeglasses',
        'Lunettes de soleil': 'sunglasses',
        Marques: 'brands',
        'Nos verres': 'lenses',
    }

    // if (locale === 'fr-fr' || locale === 'fr') {
    //     if (eventKeyMapFR[title]) {
    //         eventLabelKey = eventKeyMapFR[title]
    //     }
    // }
    return (
        <Navigation.Item title={title}>
            <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-eyeglasses'])}>
                {columns.length > 0 &&
                    columns.map((col, key: number) => (
                        <dl
                            key={key}
                            className={classNames(styles['sub-nav-side'], key === 0 ? styles['sub-side-first'] : styles['sub-side-second'])}
                        >
                            <dd key='title' className={styles['feature-title']}>
                                {col.title}
                            </dd>
                            {col.links.map((item, index: number) => (
                                <dd key={index.toString()}>
                                    <TranslatedLink href={item.url}>
                                        <a
                                            title={item.title}
                                            style={{ color: item.color || 'black' }}
                                            className={classNames(
                                                item?.icon && item.icon.position === 'front' ? styles['front-icon-a-link'] : '',
                                                item.title === 'On Sale' ? styles['onsale-color'] : ''
                                            )}
                                        >
                                            {item.title}

                                            {item?.icon ? <img className={styles['im-icon-nav']} src={item.icon.src} alt='' height={16} /> : null}
                                        </a>
                                    </TranslatedLink>
                                </dd>
                            ))}
                        </dl>
                    ))}
                <dl className={styles['sub-nav-image']}>
                    {images.length > 0 &&
                        images.map((item, key: number) => (
                            <dd key={key}>
                                <TranslatedLink href={item.url}>
                                    <a
                                        className={styles['nav-image']}
                                    >
                                        {item.img && (
                                            <span className={styles['nav-picture']}>
                                                <img src={encodeURI(item.img.src)} alt={item.img.alt} width={160} height={212} />
                                            </span>
                                        )}
                                        <div className={styles['bg-layer']}></div>
                                        <p className={styles['nav-title-scope']}>
                                            <span className={styles['nav-title']}>{item.title}</span>
                                        </p>
                                    </a>
                                </TranslatedLink>
                            </dd>
                        ))}
                </dl>
            </div>
        </Navigation.Item>
    )
}

const NavItemWithOnlyImage: React.FC<INav> = ({ title, images }) => (
    <Navigation.Item title={title}>
        <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-brands'])}>
            <dl className={styles['sub-nav-image']}>
                {images.length &&
                    images.map((item, key: number) => (
                        <dd key={key}>
                            <TranslatedLink href={item.url}>
                                <a
                                    className={styles['nav-image']}
                                >
                                    {item.img && (
                                        <span className={styles['nav-picture']}>
                                            <img
                                                src={encodeURI(item.img.src)}
                                                alt={item.img.alt}
                                                // quality={100}
                                                // layout='fixed'
                                                width={177}
                                                height={161}
                                            />
                                        </span>
                                    )}
                                    <div className={styles['bg-layer']}></div>
                                    <p className={styles['nav-title-scope']}>
                                        <span className={styles['nav-title']}>
                                            <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                        </span>
                                    </p>
                                </a>
                            </TranslatedLink>
                        </dd>
                    ))}
            </dl>
        </div>
    </Navigation.Item>
)

const NavItemWithSingleImage: React.FC<INav> = ({ title, columns, images }) => {
    return (
        <Navigation.Item title={title}>
            <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-lenses'])}>
                {columns.length > 0 &&
                    columns.map((col, key: number) => {
                        let count = 0
                        const subList = col.links.reduce<INormalLink[][]>(
                            (acc, cur, index) => {
                                if (index % 3 === 0 && index > 0 && key === 0) {
                                    count++
                                }
                                if (!acc[count]) {
                                    acc[count] = []
                                }
                                acc[count].push(cur)
                                return acc
                            },
                            [[]]
                        )
                        return subList.map((elt, index) => (
                            <dl key={`${key}_${index}`} className={classNames(styles['sub-nav-side'], styles['discover-slide-' + key], 'clearfix')}>
                                <dd className={styles['feature-title']}>{index === 0 && col.title}</dd>
                                {elt.map((item: INormalLink, subindex) => (
                                    <dd key={`sub_${index}_${subindex}`}>
                                        <TranslatedLink href={item.url}>
                                            <a
                                                title={item.title}
                                            >
                                                {item.title}
                                                {item?.icon ? <img className={styles['im-icon-nav']} src={item.icon.src} alt='' height={16} /> : null}
                                            </a>
                                        </TranslatedLink>
                                    </dd>
                                ))}
                            </dl>
                        ))
                    })}
                <dl className={styles['sub-nav-image']}>
                    {images.length &&
                        images.map((item, index: number) => (
                            <dd key={index}>
                                <TranslatedLink href={item.url}>
                                    <a
                                        className={styles['nav-image']}
                                    >
                                        {item.img && (
                                            <span className={styles['nav-picture']}>
                                                <img src={encodeURI(item.img.src)} alt={item.img.alt} width={312} height={212} />
                                            </span>
                                        )}
                                        <div className={styles['bg-layer']}></div>
                                        <p className={styles['nav-title-scope']}>
                                            <span className={styles['nav-title']}>{item.title}</span>
                                            <span className={styles['nav-sub-title']}>Everything you need to know about our lenses.</span>
                                        </p>
                                    </a>
                                </TranslatedLink>
                            </dd>
                        ))}
                </dl>
            </div>
        </Navigation.Item>
    )
}

const HeaderDesktopDefault: React.FC<HeaderProps> = ({ data }) => {
    const [navBg, setNavBg] = useState(false)
    const { t } = useTranslation('common')
    // const router = useRouter()
    // useLiveChat()
    // const { locale, asPath } = router
    // const { publicRuntimeConfig } = getConfig()
    // const { cdn_url, cdn_path } = publicRuntimeConfig
    const { nav: headerNav, help: helpData, wishlist: wishlistData } = data
    const [loggedIn, SetLoggedIn] = useState(false)
    // useEffect(() => {
    //     SetLoggedIn(getCookie('is_login') === '1')
    // }, [])
    return (
        <div id='header' className={styles.header}>
            <div className={styles.container}>
                <TranslatedLink href='/'>
                    <a className={styles['logo-content']}>
                        {/* <img src={`${cdn_url}${cdn_path}/images/icons/ebd-logo.svg`} alt='EyeBuyDirect.com' width={182} height={17} /> */}
                    </a>
                </TranslatedLink>
                <div className={styles['nav-content']}>
                    {navBg && <div className={styles['nav-bg-layer'] + ' ' + styles['active-bg']}></div>}
                    <Navigation className={styles['main-nav']} onMouseEnter={() => setNavBg(true)} onMouseLeave={() => setNavBg(false)}>
                        {headerNav.map((itemData) => {
                            const { title, columns, images } = itemData
                            if (columns.length === 0) {
                                return <NavItemWithOnlyImage {...itemData} key={title} />
                            } else if (images.length === 1) {
                                return <NavItemWithSingleImage {...itemData} key={title} />
                            } else {
                                return <NavItemWithMutipleImage {...itemData} key={title} />
                            }
                        })}
                    </Navigation>
                </div>
                {/* eof nav */}
                <div className={styles['top-search-content']}>
                    <TopSearch />
                </div>
                <div className={styles['shortcut-container']}>
                    <Navigation>
                        {/* {locale === 'en-ca' || locale === 'fr' ? (
                            <li className={styles['shortcut-local']}>
                                <Link href={asPath} locale={'en-ca'}>
                                    <a className={classNames(styles['local-item'], locale === 'en-ca' ? styles['primary'] : '')}>En</a>
                                </Link>

                                <Link href={asPath} locale={'fr'}>
                                    <a className={classNames(styles['local-item'], locale === 'fr' ? styles['primary'] : '')}>Fr</a>
                                </Link>
                            </li>
                        ) : (
                            ''
                        )} */}
                        {!loggedIn ? (
                            <Navigation.Item
                                isLink
                                title={
                                    <TranslatedLink href='/passport'>
                                        <a className={styles['shortcut-icon-link']} title='Sign In'>
                                            {t('header.signin')}
                                        </a>
                                    </TranslatedLink>
                                }
                            ></Navigation.Item>
                        ) : (
                            <Navigation.Item
                                isLink
                                title={
                                    <TranslatedLink href='/account'>
                                        <a className={styles['shortcut-icon-link']} title='Sign In'>
                                            <LoggedIn />
                                        </a>
                                    </TranslatedLink>
                                }
                            ></Navigation.Item>
                        )}
                        <Navigation.Item
                            isLink
                            title={
                                <TranslatedLink href='/contact'>
                                    <a
                                        className={styles['shortcut-icon-link']}
                                        title='Help'
                                    >
                                        <Help width={17} height={17} />
                                    </a>
                                </TranslatedLink>
                            }
                        >
                            <div className={classNames(styles['shortcut-sub-content'], styles['sub-help'], styles['clearfix'])}>
                                <h3 className={styles['help-title']}>{t('header.help')}</h3>

                                {helpData.links.length &&
                                    helpData.links.map((link, index: number) => {
                                        return (
                                            <TranslatedLink href={link.url} key={link.title}>
                                                <a
                                                    className={styles['help-link']}
                                                    title={link.title}
                                                >
                                                    {link.title}
                                                </a>
                                            </TranslatedLink>
                                        )
                                    })}

                                <TranslatedLink href='/learning-center/faq'>
                                    <a
                                        className={styles['btn-faq']}
                                        title='Help & FAQ'
                                    >
                                        <Button type='primary'>{t('header.faq')}</Button>
                                    </a>
                                </TranslatedLink>

                                <div className={styles['help-details']}>
                                    <h3 className={styles['shortcut-titile']}>{t('header.getintouch')}</h3>
                                    <div className={styles['faq-others']}>
                                        {/* {!isFrenchLocale(locale) && ( */}
                                            <div className={styles['nav-live-chat']}>
                                                <div
                                                    className={styles['head-live-chat']}
                                                    id='LP_DIV_1454393189466'
                                                ></div>
                                                <div className={styles['chat-tip']}>
                                                    <Chat className={styles['chat-img']} width={18} height={16} />
                                                    <span className={styles['chat-txt']}>Start a live chat</span>
                                                </div>
                                            </div>
                                        {/* )} */}

                                        <div className={styles['faq-tel-time']}>
                                            <Telephone className={styles['tel-img']} width={16} height={16} />
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
                                            <Mail className={styles['send-img']} width={16} height={14} />
                                            <span className={styles['send-txt']}>support@eyebuydirect.com</span>
                                        </a>

                                        {/* {locale === 'en-us' && ( */}
                                            <a
                                                href='eyecare/find-eye-doctor'
                                                className={styles['btn-find']}
                                            >
                                                <Local className={styles['find-img']} width={15} height={18} />
                                                <span className={styles['find-txt']}>Find eye doctors near you</span>
                                            </a>
                                        {/* )} */}
                                    </div>
                                </div>
                            </div>
                        </Navigation.Item>
                        <Navigation.Item
                            isLink={true}
                            title={
                                <TranslatedLink href='/favorite'>
                                    <a
                                        className={styles['shortcut-icon-link']}
                                        title='Wishlist'
                                    >
                                        <Favorite width={17} height={17} />
                                        {wishlistData && wishlistData.length !== 0 && (
                                            <span className={styles['favorite-nums']}>{wishlistData.length}</span>
                                        )}
                                    </a>
                                </TranslatedLink>
                            }
                        ></Navigation.Item>
                        <Navigation.Item
                            isLink
                            title={
                                <TranslatedLink href='/cart'>
                                    <a
                                        className={styles['shortcut-icon-link']}
                                        title='Cart'
                                    >
                                        <Cart width={15} height={18} />
                                        {/* <span className={styles['cart-nums']}></span> */}
                                    </a>
                                </TranslatedLink>
                            }
                        ></Navigation.Item>
                    </Navigation>
                </div>
            </div>
        </div>
    )
}

export default HeaderDesktopDefault
