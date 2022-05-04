import ProductServices from "../../services/ProductServices";
import { getProductStart, getProductSuccess, getProductFailure,
        deleteProductStart,deleteProductSuccess,deleteProductFailure,
        updateProductStart,updateProductSuccess,updateProductFailure,
        addProductStart,addProductSuccess,addProductFailure } from "./ProductReducer"

const getAllProduct = () => async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await ProductServices.getAllProduct()
        dispatch(getProductSuccess(res.data.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
}
const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await ProductServices.deleteProduct(id)
        dispatch(deleteProductSuccess(res.data.data.id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
}
const updateProduct = (id,product) => async (dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await ProductServices.updateProduct(id,product)
        dispatch(updateProductSuccess(res.data.data));
    } catch (err) {
        dispatch(updateProductFailure());
    }
}
const addProduct = (product) => async (dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await ProductServices.addProduct(product)
        dispatch(addProductSuccess(res.data.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
}

export {
    getAllProduct,
    deleteProduct,
    updateProduct,
    addProduct
}