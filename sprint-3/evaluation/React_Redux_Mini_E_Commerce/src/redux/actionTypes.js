import axios from "axios";

// Write all action types
export const GET_PRODUCTS_ISLOADING = "GET_PRODUCTS_ISLOADING" ;
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS" ;
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE" ;

export const ADD_TO_CART = "ADD_TO_CART" ;
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST" ;


export const getProducts = (pageNo=1,query="_order=asc") => async (dispatch) => {
    dispatch({ type:GET_PRODUCTS_ISLOADING }) ;
    try{
        let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${pageNo}&price_${query}`)
        console.log(response.data) ;
        dispatch({ type:GET_PRODUCTS_SUCCESS, payload:response.data }) ;
    }
    catch(error){
        console.log(error) ;
        dispatch({ type:GET_PRODUCTS_FAILURE }) ;
    }
}
