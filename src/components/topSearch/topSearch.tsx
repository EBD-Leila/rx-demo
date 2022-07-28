import React, { useRef } from 'react'
// import Router, { useRouter } from 'next/router'
import { Input } from '@eyebuydirect/ebd.front.lib'
import { Search } from 'src/components/icons'
import styles from './topSearch.module.scss'
import { useTranslation } from 'react-i18next'

const TopSearch = () => {
    // const { locale } = useRouter()
    const { t } = useTranslation('common')
    const searchRef = useRef<HTMLInputElement | undefined>()
    const onSearch = () => {
        const searchValue = searchRef.current?.value
        // Router.push({
        //     pathname: locale === 'fr-fr' ? '/recherche' : '/search',
        //     query: { q: searchValue },
        // })
    }
    return (
        <Input
            ref={searchRef}
            className={styles['top-search']}
            placeholder={t('header.search')}
            size='small'
            prefix={
                <Search
                    width={12}
                    height={12}
                    data-event-cate='Navigation'
                    data-event-name='Search'
                    data-event-label='Search Submit'
                    onClick={onSearch}
                />
            }
            data-event-cate='Navigation'
            data-event-name='Search'
            data-event-label='Search Input Click'
            onPressEnter={onSearch}
        />
    )
}
export default TopSearch
