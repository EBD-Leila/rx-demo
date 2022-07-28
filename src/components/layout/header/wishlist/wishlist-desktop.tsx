import React from 'react'
import styles from './wishlist-desktop.module.scss'
import { WishlistProps } from '@/components/layout/interface'
// import Image from 'next/image'
// import Link from 'next/link'
import { Close } from '@/components/icons'
import { Button, Modal } from '@eyebuydirect/ebd.front.lib'

interface WishlistDesktopProps {
    data: WishlistProps[]
}
const WishlistDesktop: React.FC<WishlistDesktopProps> = (props) => {
    const { data } = props

    const openConfirmModal = () => {
        const modal = Modal.confirm({
            className: styles['remove-wishlist-modal'],
            content: <div className={styles['content']}>Are you sure you want to remove this frame?</div>,
            onOk: () => {
                modal.destroy()
            },
        })
    }

    return (
        <div className={styles['wishlist']}>
            <div className={styles['wishlist-titile']}>My Wishlist {data && <span className={styles['favorite-number']}>({data.length})</span>}</div>
            <ul className={styles['top-products-list']}>
                {data &&
                    data.map((item, index) => (
                        <li key={index}>
                            {/* <a href='/'> */}
                                <a href='/' className={styles['image']}>
                                    <img src={item.img} width={160} height={80} alt={'glasses'} />
                                </a>
                            {/* </a> */}
                            <p className={styles['detail']}>
                                {/* <a href='/'> */}
                                    <a href='/' className={styles['name']}>{item.title}</a>
                                {/* </a>  */}
                                <span className={styles['color']}>{item.description}</span>
                                <span className={styles['price']}>{item.price}</span>
                            </p>
                            <Close className={styles['icon-close']} width={12} height={12} onClick={openConfirmModal} />
                        </li>
                    ))}
            </ul>
            {/* <Link href='/favorite'> */}
                <a href='/favorite'>
                    <Button type='primary' className={styles['view-wishlist-btn']}>
                        View My Wishlist
                    </Button>
                </a>
            {/* </Link> */}
        </div>
    )
}

export default WishlistDesktop
