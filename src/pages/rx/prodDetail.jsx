import productImg from '../../asset/images/original.jpg';
import './styles/prodDetail.scss';

function ProdDetail() {
    return (
        <div className="rx-prod-detail">
            <div>
                <img src={productImg} />
            </div>
            <div className="rx-product">
                <h1 className="prod-name"><a href="#">Original</a></h1>
                <p className="prod-color"><a href="#">Iridescent Clear</a> <a href="#">Eyeglasses</a></p>
                <p className="prod-price">Subtotal: <span>$39</span></p>
            </div>
        </div>
    )
}
export default ProdDetail;