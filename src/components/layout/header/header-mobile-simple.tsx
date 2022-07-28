import React from 'react'
import styles from './header-mobile-simple.module.scss'

interface HeaderMobileSimpleProps {
    children?: React.ReactNode
}

const HeaderMobileSimple: React.FC<HeaderMobileSimpleProps> = () => {
    return <div className={styles.header}>simple layout mobile header</div>
}

export default HeaderMobileSimple
