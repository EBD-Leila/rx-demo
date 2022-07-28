// import { useState } from 'react'
import {Info} from '../../../../components/icons'
import { Input, Button, Tooltip } from '@eyebuydirect/ebd.front.lib'
import styles from './listItem.module.scss'
import { useState } from 'react'
import  RxTips  from './rxTips'

const ListItem = (props)=> {
    // const [tipVisible, setTipVisible] = useState(false)
    const {title, desc, imgClass, tip, glassType} = props.data
    console.log(props)
    // console.log(title)
    return (
        <div className={`${styles['rx-option']} ${styles['sub-content-wrapper']}`} data-group="singleVision" onClick={props.onClick}>
            <div className={styles["option-title"]}>
                <span className={styles["option-name"]}>{title}</span>
                {/* <em className="help"></em> */}
                {/* <div> */}
                {/* {tip && tip.map((item)=>
                    (<Tooltip 
                        overlay={
                            <>
                                <div class={`rx-tip ${item.imgUrl? "rx-img-tip" : ''}`}>
                                    {item.imgUrl && <div class="tip-img">
                                        <img src={item.imgUrl} alt="rx tip image" />
                                    </div>}
                                    <div class="tip-text">
                                        <h6>{item.title}</h6>
                                        <div>{item.content}</div>
                                    </div>
                                </div>
                            </>
                        }
                        overlayClassName="rx-tooltip"
                        placement="topLeft"
                    >
                        <Info className="help" width={23} height={23}/>
                    </Tooltip>
                    )
                )} */}
                {/* </div> */}
                {tip && <RxTips data={tip}/>}
            </div>
            <div className={styles["option-description"]}>
                {/* <div className="option-content"> */}
                    <div className={styles["img-box"]}>
                        <em className={`${styles['im-rx']} ${imgClass}`}></em>
                    </div>
                    <div>
                        <p>
                            {desc}
                        </p>
                    </div>
                    {/* <p className="option-help"></p> */}
                {/* </div> */}
                {/* <span className="none"><input type="checkbox" name="use_id" value=""/></span> */}
            </div>
        </div>
    )
}

export default ListItem