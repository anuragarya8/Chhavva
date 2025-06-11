import  { createContext } from 'react';
import { products } from '../assets/assets'; // Adjust the path as necessary

export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {

    // const currency = '₹'; 
    const currency = '$'; 
    const deliveryCharge = 50;

    const contextValue = {
        products, currency, deliveryCharge,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;