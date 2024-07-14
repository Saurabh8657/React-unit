import axios from "axios";


export const getProductsRequest = async() => {
    const res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`);
    console.log(res.data) ;
    return res ;
}