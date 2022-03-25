import React, { Fragment, useState } from 'react';
import { Product } from './Product';
import { ProductForm } from './ProductForm';

export function ListOfProducts() {
    const [products, setProducts] = useState([]);


    return (
        <Fragment>
            <ProductForm />
            <div className='divProductsContainer'>
                {
                    products.map((product) =>
                        <Product
                        product_name={product.product_name}
                        product_id={product.product_id}
                        description={product.description}
                        version={product.version}
                        />
                    )
                }
            </div>
        </Fragment>
    );
}

/*         product_name: '',
        product_id: '',
        description: '',
        version: '' */