import React, { } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

Home.propTypes = {};

function Home(props) {
    const url = `https://626eb019034ec185d33f080e.mockapi.io/api/v1/products?page=1&limit=10`
    let content;
    let products = useAxiosGet(url)
    if(products.error) {
        content = <div>
            Une erreur est survenue. Veuillez réactualiser
        </div>
    }
    if(products.loading) {
        content = <Loader />
    }
    if(products.data) {
        content = products.data.map((product, key) => {
            return (
               <ProductCard key={key} product={product} />
            )
        })
    }
    return (
        <div>
             <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>

                {content}
        </div>
    );
}

export default Home;
