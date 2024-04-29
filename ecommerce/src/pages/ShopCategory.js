import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div>
        <img src={props.banner} alt="" style={{ width: "100%" }} />
      </div>
      <div className="container d-flex justify-content-between mt-4">
        <span>showing 1-12 of 36</span>
        <button className="btn border rounded-pill">sort by &#8964;</button>
      </div>
      <div className="container">
        <div className="container row">
          {all_product.map((product, index) => {
            if (props.category == product.category) {
              return (<div key={index} className="col-lg-3 col-12 col-sm-6">
                <Item img={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} id={product.id} />
              </div>
              );
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="text-center my-5">
          <button className="btn btn-outline-primary rounded-pill">Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default ShopCategory