import  { useState, createContext } from 'react';
import { products } from '../assets/assets'; // Adjust the path as necessary

export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {

    // const currency = '₹'; 
    const currency = '$'; 
    const deliveryCharge = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const contextValue = {
        products, currency, deliveryCharge, 
        search, setSearch, showSearch, setShowSearch,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;