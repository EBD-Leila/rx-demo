

import {Info} from '../../../../components/icons'
import { Input, Button, Tooltip } from '@eyebuydirect/ebd.front.lib'
const RxTips = (props)=>{
    // const {data} = props.data
    // console.log(props.data)
    return (
        props.data.map((item)=> {
            return (
                <Tooltip 
                    overlay={
                        <>
                            <div className={`rx-tip ${item.imgUrl? "rx-img-tip" : ''}`}>
                                {item.imgUrl && <div className="tip-img">
                                    <img src={item.imgUrl} alt="rx tip image" />
                                </div>}
                                <div className="tip-text">
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
        })
    )
}

export default RxTips