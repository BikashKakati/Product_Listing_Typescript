import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import ProductsList from './ProductsList';


const ShowProducts = () => {
    const { productsData} = useSelector((state: RootState) => state.products);
    return (
        <div>
            <h3>Our Products</h3>
            <ul>
                {
                    productsData.map((product) => {
                        return <ProductsList key={product.id} product={product}/>
                    })
                }
            </ul>
        </div>
    )
}

export default ShowProducts