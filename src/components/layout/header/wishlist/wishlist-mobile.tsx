import React from 'react'
import styles from './wishlist-mobile.module.scss'
import { WishlistProps } from 'src/components/layout/interface'
// import Image from 'next/image'
// import Link from 'next/link'
import { Close, Favorite } from 'src/components/icons'
import { Button, Modal } from '@eyebuydirect/ebd.front.lib'

interface WishlistMobileProps {
    data: WishlistProps[]
}
const WishlistMobile: React.FC<WishlistMobileProps> = (props) => {
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
            {data.length === 0 ? (
                <div className={styles['no-wishlist']}>
                    <Favorite width={18} height={18} className={styles['icon-favorite']} />
                    <div>You have no saved items.</div>
                </div>
            ) : (
                <>
                    <ul className={styles['top-products-list']}>
                        {data &&
                            data.map((item, index) => (
                                <li key={index}>
                                    {/* <Link href='/'> */}
                                        <a href='/' className={styles['image']}>
                                            <img src={item.img} width={300} height={150}  alt={'glasses'} />
                                        </a>
                                    {/* </Link> */}
                                    <p className={styles['detail']}>
                                        <div>
                                            {/* <Link href='/'> */}
                                                <a href='/' className={styles['name']}>{item.title}</a>
                                            {/* </Link> */}
                                            <span className={styles['color']}>{item.description}</span>
                                        </div>
                                        <span className={styles['price']}>{item.price}</span>
                                    </p>
                                    <Close className={styles['icon-close']} width={12} height={12} onClick={openConfirmModal} />
                                </li>
                            ))}
                    </ul>
                    {/* <Link href='/favorite'> */}
                        <a href='/favorite'>
                            <Button type='primary' size='large' className={styles['view-wishlist-btn']}>
                                View My Wishlist
                            </Button>
                        </a>
                    {/* </Link> */}
                </>
            )}
        </div>
    )
}

export default WishlistMobile
