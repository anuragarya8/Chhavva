import  { useState, createContext, useEffect } from 'react';
import { products } from '../assets/assets'; // Adjust the path as necessary
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {

    // const currency = '₹'; 
    const currency = '$'; 
    const deliveryCharge = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const addToCart = async (itemID, size) => {

        if(!size) {
            toast.error('Please select a size');
            return;
        } 

        let cartData = structuredClone(cartItems);

        if(cartData[itemID]) {
            if (cartData[itemID][size]) {
                cartData[itemID][size] += 1;
            }else {
                cartData[itemID][size] = 1;
            }
        }else {
            cartData[itemID] = {};
            cartData[itemID][size] = 1;
        }
        setCartItems(cartData);
    }

    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for(const items in cartItems) {
    //         for(const item in cartItems[items]) {
    //             try{
    //                 if(cartItems[items][item] > 0) {
    //                     totalCount += cartItems[items][item];
    //                 }
    //             }catch(e) {
    //                 console.error("Error in calculating cart count:", e);
    //             }   
    //         }
    //     }
    //     return totalCount;
    // }
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                if(cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems]);

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems) {
            let itemInfo  = products.find((item) => item._id === items);
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
                catch(e) {
                    console.error("Error in calculating cart amount:", e);
                }
            }
        }
        return totalAmount;
    }


    const contextValue = {
        products, currency, deliveryCharge, 
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartAmount, getCartCount, updateQuantity,
        navigate,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;