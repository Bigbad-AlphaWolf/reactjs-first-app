import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product(props) {
    const { id } = useParams()
    const url = `https://626eb019034ec185d33f080e.mockapi.io/api/v1/products/${id}`
    let content;
    let product = useAxiosGet(url)
    if(product.error) {
        content = <div>
            Une erreur est survenue. Veuillez réactualiser
        </div>
    }
    if(product.loading) {
        content = <Loader />
    }
    if(product.data) {
        content =
        <div>
            <h2 className='text-2xl mb-3'>
                {product.data.name}
            </h2>
            <img alt='image_product' src={product.data.image} />
            <div className='font-bold text-xl mb-3 mt-3'>
               £ {product.data.price}
            </div>
            <div className='text-xl mt-4'>
            {product.data.description}
            </div>
        </div>

    }
    return (
        <div>
             <h1 className='font-bold text-2xl mb-3'>Product Page</h1>
                {content}
        </div>
    );
}

export default Product;