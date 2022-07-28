import React from 'react'
import styles from './header-desktop-simple.module.scss'

interface HeaderDesktopSimpleProps {
    children?: React.ReactNode
}

const HeaderDesktopSimple: React.FC<HeaderDesktopSimpleProps> = () => {
    return <div className={styles.header}>simple layout desktop header</div>
}

export default HeaderDesktopSimple
