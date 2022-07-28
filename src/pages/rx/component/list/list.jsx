import { useState } from 'react'
import {Info} from '../../../../components/icons'
import styles from './list.module.scss'
import ListItem from './listItem'
import  RxTips  from './rxTips'

const List = (props)=> {
    const [itemVisible, setItemVisible] = useState(false)
    // const {glassType} = props
    const handleItemClick = () => {
        if(props.data.glassType) {
            setItemVisible(!itemVisible)
        } else {
            console.log(11)
        }
        
    }

    // const { aa } = props.data
    
    // console.log(props.data.glassType)
    // console.log(aa)
    return (
        <div>
            <ListItem data={props.data} onClick={handleItemClick}/>
            
            {props.data.glassType && <div className={`${styles['rx-sub-option-wrapper']} ${itemVisible ? '': 'none'}`}>
                {props.data.glassType.map((item,index)=>{
                return (
                    // <div className={`${styles['rx-sub-option-wrapper']} ${itemVisible ? '': 'none'}`}>
                        <div key={index} className={styles["sub-option-container"]}>
                            <div className={`${styles['event-rx']} ${styles['rx-option']} ${styles['sub-option-title']}`}>
                                <span className={styles["sub-option-name"]}>{item.typeTitle}</span>
                                {/* <em>-</em>
                                <span className="sub-option-price price-symbol">{item.typePrice}</span> */}
                                {/* <Info className="help" width={23} height={23}/> */}
                                {/* <ins class="help" data-ga-title="Bifocal" data-tip="<?php echo $useListInfo['useId'] ?>" data-tip-type="use-for" data-tip-img-desk="<?php echo $this->resUrl()->image('rx/rxtips/bifocal_desk.png'); ?>" data-tip-img-m="<?php echo $this->resUrl()->image('rx/rxtips/bifocal_m.png'); ?>"></ins> */}
                                {/* <span class="none"><input type="checkbox" name="use_id" value="<?php echo $useListInfo['useId']; ?>"/></span> */}
                                {item.tip && <RxTips data={item.tip}/>}
                            </div>
                        </div>
                    // </div>
                )
            })}
            </div> 
            }
            
        </div>
    )
}

export default List