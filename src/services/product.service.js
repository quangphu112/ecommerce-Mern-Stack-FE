import axios from "axios";

const getAllProduct = async () => {
    const response = axios.get("http://localhost:3000/product");
    return response.data ? response.data : null;
}

const getProductById = async (id) => {
    const response = axios.get(`http://localhost:3000/product/${id}`);
    return response.data ? response.data : null;
}

const createProduct = async (body) => {
    const response = axios.get("http://localhost:3000/product", body);
    return response.data ? response.data : null;
}

const updateProduct = async (id, body) => {
    const response = axios.put(`http://localhost:3000/product/${id}`, body);
    return response.data ? response.data : null;
}

const deleteProduct = async (id) => {
    const response = axios.get(`http://localhost:3000/product/${id}`);
    return response.data ? response.data : null; 
}

const productService = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

export default productService;