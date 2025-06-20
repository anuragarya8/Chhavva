import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

// function for adding a product
const addProduct = async (req, res) => {
    try {
        const { name, price, description, category, subCategory, sizes, bestSeller } = req.body;
        
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((image) => image !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (image) => {
                const result = await cloudinary.uploader.upload(image.path, {
                    resource_type: 'image'
                });
                return result.secure_url;
            })
        );

        const productData = {
            name,  
            description,
            category,
            subCategory,
            price: Number(price),
            bestSeller: bestSeller === 'true'? true : false,
            sizes: JSON.parse(sizes),
            images: imagesUrl,
            date: Date.now()
        };

        console.log("Product Data:", productData);

        const product = new productModel(productData);
        await product.save();
        
        res.json({success: true, message: "Product added successfully",});

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        console.error("Error in adding product:", error);
    }
}

// function for listing  product
const listProducts = async (req, res) => {
    try{
        const products = await productModel.find({});
        res.json({success: true, products});

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        console.error("Error in listing products:", error);
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try{
        const deletedProduct = await productModel.findByIdAndDelete( req.body.id );

        if (!deletedProduct) {
            return res.json({
                success: false, 
                message: "Product not found or already deleted"
            });
        }

        res.json({success: true, message: "Product removed successfully"});

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        console.error("Error in removing product:", error);
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({success: true, product});

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        console.error("Error in fetching single product:", error);
    }
}

export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
};