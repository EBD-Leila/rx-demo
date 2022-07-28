import {rxData} from './rx'
import {Down, Info} from '../../../../components/icons'
import {useState} from 'react'
import styles from './index.module.scss'

const Prescription = () => {
    const [addMoreVisible, setAddMoreVisible] = useState(false)
    const [addPrismVisible, setAddPrismVisible] = useState(false)
    const optionData = [] 
    for (let key in rxData.sph) {
        optionData.push(key)
    }

    const showMoreClick = (val) => {
        setAddMoreVisible(!val)
    }
    
    const showPrismClick = (val) => {
        setAddPrismVisible(!val)
    }
                                        
    return (
        <div>
            <div className={styles["login-prescrption-box"]}><span>Sign in here</span> to use a previous prescription</div>
            <div className={styles["rx-prescription-wrapper"]}>
                <div className={styles["add-rx-container"]}>
                    <a className={styles["prescription-tips"]}>
                        <Info width={23} height={23}/>
                    </a>
                    <ul className="clearfix">
                        <li className={styles["add-rx-title"]}>
                            <div className={styles["rx-name-title"]}>&nbsp;</div>
                            <div>OD<span>(Right eye)</span></div>
                            <div>OS<span>(Left eye)</span></div>
                        </li>
                        <li className={styles["rx-sph"]}>
                            <div className={styles["rx-name-title"]}><span>Sphere</span> (SPH)</div>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="od_sph" name="od_sph" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="os_sph" name="os_sph" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                        </li>
                        <li className={styles["rx-cyl"]}>
                            <div className={styles["rx-name-title"]}><span>Cylinder</span> (CYL)</div>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="od_cyl" name="od_cyl" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="os_cyl" name="os_cyl" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                        </li>
                        {/* mobile lose */}
                        <li>
                        <div className={styles["rx-name-title"]}>Axis</div>
                            <label>
                                <div className={styles["rx-input"]}>
                                    <input type="number" oninput="this.value=this.value.replace(/[^\d]+/,'')" size="3" value="" id="od_axis" name="od_axis" />
                                </div>
                            </label>
                            <label>
                                <div className={styles["rx-input"]}>
                                    <input type="number" oninput="this.value=this.value.replace(/[^\d]+/,'')" size="3" value="" id="os_axis" name="os_axis" />
                                </div>
                            </label>
                        </li>
                        <li className={styles["rx-add"]}>
                            <div className={styles["rx-name-title"]}><span>ADD</span></div>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="od_add" name="od_add" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                            <label>
                                <div className={styles["rx-select"]}>
                                    <select id="os_add" name="os_add" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            
                <div className={styles["add-pd-container"]}>
                    <a className={styles["prescription-tips"]}>
                        <Info width={23} height={23}/>
                    </a>
                    <ul className="clearfix">
                        <li className={styles["add-rx-title"]}>
                            <div>PD<span>(Pupillary Distance)</span></div>
                        </li>
                        <li className={styles["pd-add-one"]}>
                            {/* <div className={styles["rx-name-title"]}><span>Sphere</span> <em><i>(</i>SPH<i>)</i></em></div>
                            <label> */}
                                <div className={styles["rx-select"]}>
                                    <select id="pd" name="pd" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                            {/* </label> */}
                        </li>
                        {/* <li className={styles["pd-add-one"]}>
                                <div className={styles["rx-select"]}>
                                    <select id="od_sph" name="od_sph" >
                                        {optionData.map((key)=>{
                                            return <option value={key.value}>{key}</option>
                                        })}
                                
                                    </select>
                                    <Down width={12} height={12}/>
                                </div>
                        </li> */}
                        <li className={styles["rx-pd-checkbox"]}>
                            <label className={styles.pointer}>
                                <div className={styles["checkbox-ui"]}>
                                    <input type="checkbox" id="noSamePd" name="noSamePd" />
                                    <label for="noSamePd"></label>
                                </div>
                                <span>Two PD numbers</span>
                            </label>
                            {/* <label className={styles["rx-nearpd-checkbox pointer js-rx-nearpd-box"]}>
                                <div className={styles["checkbox-ui"]}>
                                    <input type="checkbox" id="haveNearPd" name="haveNearPd" />
                                    <label for="haveNearPd"></label>
                                </div>
                                <span>Near PD</span>
                            </label> */}
                        </li>
                    </ul>
                </div>
            
                <div className={`${styles['add-more-container']} ${addMoreVisible?'':'none'}`}>
                    <div className={`${styles["add-rx-container"]} ${styles["add-prism-container"]}`} id="prism-wrapper">
                        <div className={styles["add-prism-title"]}>
                            <label className={styles.pointer} onChange={()=>showPrismClick(addPrismVisible)}>
                                <div className={styles["checkbox-ui"]}>
                                    <input type="checkbox" value="" id="prism" className={styles["checkbox"]} name="is_prism" />
                                    <label for="prism"></label>
                                </div>
                                <span>Add prism </span> 
                                <strong>$19</strong>
                            </label>
                            <span className={`${styles["prism-unavailable"]} none`}>- Unavailable for 2-Day Delivery.</span>
                            <div className={`${styles["btn-return-standard"]} none`}><a href="">Return to standard deliver</a></div>
                        </div>
                        <ul className={`clearfix ${addPrismVisible ? '':'none'}`}>
                            <li className={styles["add-rx-title"]}>
                                <div className={styles["rx-name-title"]}>&nbsp;</div>
                                <div>OD<span>(Right eye)</span></div>
                                <div>OS<span>(Left eye)</span></div>
                            </li>
                            <li className={styles["rx-sph rx-prism"]}>
                                <div className={styles["rx-name-title"]}><span>Vertical (Δ)</span></div>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="od_prismnum_v" name="od_v_prism">
                                                <option value="">aa</option>
                                        </select>
                                    </div>
                                </label>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="os_prismnum_v" name="os_v_prism">
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                            </li>
                            <li className={styles["rx-cyl rx-direction"]}>
                                <div className={styles["rx-name-title"]}><span>Base Direction</span></div>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="od_prismdir_v" name="od_v_direction">
                                                <option value=""></option>
                                         
                                        </select>
                                    </div>
                                </label>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="os_prismdir_v" name="os_v_direction">
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                            </li>
                            {/* <li className={styles["add-rx-title add-rx-title-m"]}>
                                <div className={styles["rx-name-title"]}>&nbsp;</div>
                                <div>OD<span>(Right eye)</span></div>
                                <div>OS<span>(Left eye)</span></div>
                            </li> */}
                            <li className={styles["rx-axis rx-horizontal"]}>
                                <div className={styles["rx-name-title"]}><span>Horizontal (Δ)</span></div>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="od_prismnum_h" name="od_h_prism">
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="os_prismnum_h" name="os_h_prism">
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                            </li>
                            <li className={styles["rx-direction-h"]}>
                                <div className={styles["rx-name-title"]}><span>Base Direction</span></div>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="od_prismdir_h" name="od_h_direction" >
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                                <label>
                                    <div className={styles["rx-select"]}>
                                        <select id="os_prismdir_h" name="os_h_direction">
                                                <option value=""></option>
                                        </select>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles["add-extra-container"]} clearfix`}>
                        <h6 className={styles["rx-extra-title"]}>Comments:</h6>
                        <textarea rows="2" id="lens_comment" name="comment"></textarea>
                        <div className={styles["rx-input"]}>
                            <input type="text" name="rx_name" id="rx_name" placeholder="Save this prescription as:" />
                        </div>
                    </div>
                </div>

                <div className={styles["btn-show-more-rx"]} onClick={()=>showMoreClick(addMoreVisible)}>
                    <span>
                        <em className={styles["text-more"]}>{addMoreVisible ? 'Show fewer options' : 'Show more options'}</em>
                        <Down width={12} height={12}/>
                        {/* <i className={styles["text-fewer"]} data-event-cate="RX Flow" data-event-name="Prescription step" data-event-label="Show Fewer">Show fewer options</i> */}
                    </span>
                </div>
            </div>
            <div className={`${styles["rx-comfirm"]} clearfix"`}>
                <button className={styles["rx-button"]} type="button" id="step-one-next">Confirm</button>
                <div className={styles["rx-find-doctor"]}>
                    Don't have a current prescription?
                    <span className={styles["btn-find-doctor"]} data-href="/product/find-eye-doctor">Find Eye Doctors Near You</span>
                </div>
            </div>
        </div>
    )
}

export default Prescription