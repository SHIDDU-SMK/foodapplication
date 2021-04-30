import ProductTemplate from '../templete/templete-pizza';
import { PizzaCat }  from '../data/pizzamenu'

function PizzaProduct () {
    return (
        <>
        <ProductTemplate data = { PizzaCat } />
        </>
    )
}
export default PizzaProduct;
