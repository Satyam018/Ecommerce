import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_iocn from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplayleft">
            <div className="productdisplayimagelist">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplayimage">
                <img className='productdisplaymainimg'src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplayright">
            <h1>{product.name}</h1>
            <div className="productdisplayrightstar">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull_iocn} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplayrightprices">
                <div className="oldprice">${product.old_price}</div>
                <div className="newprice">${product.new_price}</div>
            </div>
            <div className="productdisplaydiscriptions">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Esse nihil accusamus molestias minus iure, dolor, officiis laboriosam doloremque, 
                deleniti obcaecati nostrum rem a. Totam ipsam perspiciatis voluptatem sunt et ullam 
                blanditiis labore, modi doloribus alias? Ratione sint aliquam sunt. Consequuntur magni 
                velit voluptatem corporis modi quidem molestiae rem, inventore aperiam?
            </div>
            <div className="productdisplaysize">
                <h1>Select Size</h1>
                <div className="productrightsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{
                addToCart(product.id)
            }}>ADD TO CART</button>
            <p className='productdisplaycategory'><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplaycategory'><span>Tags: </span>Modern, Latest</p>

        </div>
      
    </div>
  )
}

export default ProductDisplay
