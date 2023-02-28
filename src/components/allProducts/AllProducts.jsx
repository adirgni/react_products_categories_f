import { useState } from 'react';
import { useEffect } from 'react';
import { getAllProducts } from '../../services/ProductsService';
import CategoryList from '../categoryList/CategoryList';
import OneProduct from '../oneProduct/OneProduct';
import './AllProducts.css'


const AllProducts = () => {
    console.log('AllProducts start');
    const [items, setItems] = useState([]);

    const getProducts = () => {
        getAllProducts().then((result) => {
            setItems([...result]);
        })
    }

    useEffect(() => { getProducts() }, []);

    console.log('AllProducts ', items)

    return (
        <div className='all_products'>
            <CategoryList />
            <fieldset className='allProducts_frame'>
                <legend className='legend text_color'>Product List</legend>
                <OneProduct items={items} />
            </fieldset>
        </div>
    )
}

export default AllProducts
