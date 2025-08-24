import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size

  if (!product || !product.image || !product.name || !product.old_price || !product.new_price || !product.id) {
    return <div className='productdisplay'>Loading...</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const isAccessory = product.category && product.category.toLowerCase() === 'accessories';

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
        </div>
        <div className="productdisplay-main-img">
          <img className='productdisplay-main-img' src={product.image} alt="Product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Dull Star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab maxime voluptatem ex esse. Consequatur sequi consectetur molestiae necessitatibus explicabo architecto amet quae. Repellat, nobis. Voluptatem odit ipsam consequuntur praesentium.
          Ipsum incidunt sit dignissimos distinctio! Dolorum, quo voluptatem? Earum qui unde nihil hic nisi, officiis exercitationem tempora iusto! Autem impedit amet optio totam consectetur nostrum accusamus earum non mollitia enim.
        </div>
        {!isAccessory && (
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => { addToCart(product.id) }}>Add to Cart</button>
        <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};
