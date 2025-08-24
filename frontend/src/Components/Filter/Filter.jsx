import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [gender, setGender] = useState('all');
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (initial) return;

            try {
                const response = await fetch(`http://localhost:4000/filter?gender=${gender}`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [gender, initial]);

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setInitial(false);
    };

    return (
        <div>
            <h1>Filter Products</h1>
            <select value={gender} onChange={handleGenderChange}>
                <option value="all">All</option>
                <option value="mens">Mens</option>
                <option value="women">Womens</option>
                <option value="kids">Kids</option>
            </select>

            {!initial && (
                <div>
                    {products.map(product => (
                        <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                            <h2>{product.name}</h2>
                            <h2>{product.category}</h2>
                            <p>{product.description}</p>
                            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
