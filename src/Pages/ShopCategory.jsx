import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className='shopcategorybanner' src={props.banner}/>
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategorysort">
          Sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategoryproducts">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
              return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            }else{
              return null;
            }
        })}
      </div>
      <div className="shopcategoryloadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
