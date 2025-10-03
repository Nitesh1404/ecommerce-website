import React, { useEffect, useState } from 'react';

const Listproduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filters & Sorting states
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]); // min - max

  const fetchAllProduct = async () => {
    let productRes = await fetch('http://localhost:5000/product/allproduct');
    let productData = await productRes.json();
    setAllProducts(productData);
    setFilteredProducts(productData);
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
  };

  // Apply filters + sorting whenever filters change
  useEffect(() => {
    let result = [...allProducts];

    // Search filter
    if (searchQuery.trim() !== "") {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "") {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Availability filter (assuming availability field exists in DB)
    if (availabilityFilter === "in") {
      result = result.filter(p => p.in_stock === true);
    } else if (availabilityFilter === "out") {
      result = result.filter(p => p.in_stock === false);
    }

    // Price range filter
    result = result.filter(p =>
      p.new_price >= priceRange[0] && p.new_price <= priceRange[1]
    );

    // Sorting
    if (sortOption === "low-high") {
      result.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === "high-low") {
      result.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOption === "newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredProducts(result);
  }, [searchQuery, sortOption, categoryFilter, availabilityFilter, priceRange, allProducts]);

  return (
    <div className='container my-4' style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <h1 className='text-center my-3'>All Product List</h1>

      {/* Controls Section */}
      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-control" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-control" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-control" value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
            <option value="">All</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <label className="form-label">Price Range</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100000"
            step="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
          <small>Up to ₹{priceRange[1]}</small>
        </div>
      </div>

      {/* Product Table */}
      <div className="table-responsive">
        {filteredProducts.length === 0 ? (
          <p className="text-center mt-3">No products found</p>
        ) : (
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
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img src={product.image} alt="" style={{ width: '100px' }} />
                  </td>
                  <td>{product.name}</td>
                  <td>₹ {product.old_price}</td>
                  <td>₹ {product.new_price}</td>
                  <td>{product.category}</td>
                  <td>
                    <i
                      className="fa-solid fa-xmark"
                      onClick={() => deleteProduct(product.id)}
                      style={{ cursor: "pointer", color: "red" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Listproduct;
