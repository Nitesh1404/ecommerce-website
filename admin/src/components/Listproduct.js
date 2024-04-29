import React, { useEffect, useState } from 'react';

const Listproduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProduct = async () => {
    let productRes = await fetch('http://localhost:5000/product/allproduct');
    let productData = await productRes.json();
    setAllProducts(productData);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);


  const deleteProduct = async (id) => {
    await fetch('http://localhost:5000/product/deleteproduct', {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchAllProduct();


  }

  return (
    <div className='container my-4' style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <h1 className='text-center my-3'>All Product List</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered ">
          <thead className="thead-light table-primary">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Old Price</th>
              <th scope="col">New Price</th>
              <th scope="col">Category</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.image} alt="" style={{ width: '100px' }} />
                </td>
                <td>{product.name}</td>
                <td>₹ {product.old_price}</td>
                <td>₹ {product.new_price}</td>
                <td>{product.category}</td>
                <td> <i className="fa-solid fa-xmark" onClick={() => deleteProduct(product.id)}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listproduct;
