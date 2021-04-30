import ProductpizzaTemplate from '../templete/templete-pizzini';
import { PizzaCatlog }  from '../data/pizzamenu'

function PizziniProduct () {
    return (
        <>
        <ProductpizzaTemplate data = { PizzaCatlog } />
        </>
    )
}
export default PizziniProduct;
