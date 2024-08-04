import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc all products
//@route get /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//@desc fetch a prod
//@route get /api/product/:id
//@access public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    }
    res.status(404);
    throw new Error("Resource not found")
})



//@desc create product
//@route post /api/products
//@access private admin

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


//@desc all productsupdate product
//@route put /api/products/:id
//@access private/admin

const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body
    const product = await Product.findById(req.params.id)
    if (product) {
        product.name = name,
            product.price = price,
            product.image = image,
            product.brand = brand,
            product.description = description,
            product.category = category,
            product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error("Resource not found")
    }

})

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await Product.deleteOne({ _id: product._id })
        res.status(200).json({ message: "Product  deleted" })
    } else {
        res.status(404)
        throw new Error("Resource not found")
    }

})

export { getProductById, getProducts, createProduct, updateProduct ,deleteProduct}