import ProdDetail from './prodDetail';
import RxContent from './rxContent';
import './styles/index.scss'

function RxMain() {
    return (
        <div className="rx-container">
            <ProdDetail />
            <RxContent />
        </div>
    )
}

export default RxMain;