import { useRef, useState } from 'react'
import {Left,Right} from '../../components/icons'
import List from './component/list/list'
import Prescription from './component/prescription'
import './styles/rxContent.scss'
function RxContent () {
    const listData = {
        stepOne: [
            {
                title: 'Distance',
                desc: 'General use lenses for seeing things far away',
                imgClass: 'im-rx-distance',
                tip: [{
                    imgUrl: 'https://img.ebdcdn.com/image/upload/static/images/rx/rxtips/distance_desk.png?q=85',
                    title: 'SINGLE VISION DISTANCE LENSES',
                    content: 'If your prescription has a negative ( - ) number and 0 ADD, this means that you need "Distance" lenses. Distance lenses are needed when things up close appear clear, while things further away look blurry. This is called nearsightedness, or myopia.'
                }]
            },
            {
                title: 'Multifocal',
                desc: 'Lenses for seeing things both close and far away',
                imgClass: 'im-rx-multfocal',
                glassType: [
                    {
                        typeTitle: 'Bifocal - $29',
                        // typePrice: ''
                        tip: [{
                            imgUrl: 'https://img.ebdcdn.com/image/upload/static/images/rx/rxtips/distance_desk.png?q=85',
                            title: 'SINGLE VISION DISTANCE LENSES',
                            content: 'If your prescription has a negative ( - ) number and 0 ADD, this means that you need "Distance" lenses. Distance lenses are needed when things up close appear clear, while things further away look blurry. This is called nearsightedness, or myopia.'
                        }]
                    },
                    {
                        typeTitle: 'Progressive - $49',
                        // typePrice: ''
                    },
                    {
                        typeTitle: 'Premium Progressive - $89',
                        // typePrice: ''
                    }
                ],
                tip: [{
                    imgUrl: 'https://img.ebdcdn.com/image/upload/static/images/rx/rxtips/multifocal_desk.png?q=85',
                    title: 'MULTIFOCAL LENSES',
                    content: 'Multifocal lenses are designed to help you focus on things near and far. EYEBUYDIRECT offers traditional bifocals, progressive lenses as well as premium progressive lenses.'
                }]
            },
            {
                title: 'Reading',
                desc: 'General use lenses for seeing things up close',
                imgClass: 'im-rx-reading',
                glassType: [
                    {
                        typeTitle: 'Readers'
                    },
                    {
                        typeTitle: 'Intermediate'
                    }
                ],
                tip: [{
                    imgUrl: 'https://img.ebdcdn.com/image/upload/static/images/rx/rxtips/reading_desk.png?q=85',
                    title: 'SINGLE VISION READING LENSES',
                    content: '"Reader" and "Intermediate" lenses have prescriptions starting with a plus ( + ) sign and are designed for those who have trouble focusing their eyes while reading. These lenses are designed to help correct farsightedness caused by hyperopia or presbyopia.'
                }]
            },
            {
                title: 'Non-prescription',
                desc: 'Lenses without any prescription',
                imgClass: 'im-rx-non-prescription',
                tip: [{
                    imgUrl: 'https://img.ebdcdn.com/image/upload/static/images/rx/rxtips/non-prescription_desk.png?q=85',
                    title: 'NON-PRESCRIPTION LENSES',
                    content: 'Looking to get glasses as accessories but don\'t require a prescription? Select non-prescription, plano lenses.'
                }]
            }
        ]
    }
    const {jumpStep, setJumpStep} = useState(0)
        const rxStepContainer = useRef('rxStepContainer');
    const HandleJumpStep = ()=>{
        // rxStepContainer.current.styleName = ""
        setJumpStep('-800')
    }
    return (
        <div className="rx-main">
            <div className="rx-content">
                <div class="rx-step-action rx-title">
                    <span class="step-arrow action-back previous-step event-rx-normal">
                        <Left width={30} height={30} />
                    </span>        
                    <div class="rx-step-name js-rx-step-name">USAGE</div>
                    <ul class="rx-step-status">
                        <li id="js-rx-step-usage" class="step-status-detail step-disable event-rx-normal step-current"></li>
                        <li id="js-rx-step-prescription" class="step-status-detail event-rx-normal"></li>
                        <li id="js-rx-step-lens-type" class="step-status-detail event-rx-normal"></li>
                        <li id="js-rx-step-lens-option" class="step-status-detail event-rx-normal"></li>
                    </ul>
                    <span class="step-arrow action-next next-step event-rx-normal" onClick={HandleJumpStep}><Right width={30} height={30} /><em class="icon-arrow-right"></em></span>

                </div>
                <div className="rx-step-wrapper">
                    <div ref={rxStepContainer} className="rx-step-container" style={{left: jumpStep}}>
                        <div className="rx-options-piece">
                            {listData.stepOne.map((item)=>{
                                return <List data={item}/>
                            })}
                        </div>
                        <div className="prescription-wrapper">
                            <Prescription />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RxContent;