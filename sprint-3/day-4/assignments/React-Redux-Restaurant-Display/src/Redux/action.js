// complete below functions for api requests

import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_SINGLE_RESTAURANT_FAILURE, GET_SINGLE_RESTAURANT_REQUEST, GET_SINGLE_RESTAURANT_SUCCESS } from "./actionTypes"
import axios from 'axios' ;
export function getRestaurantsRequest(){
    return { type: GET_RESTAURANTS_REQUEST }
}
export function getRestaurantsSuccess(value){
    return { type:GET_RESTAURANTS_SUCCESS, payload:{restaurantArray:value.data, pagesCount:value.totalPages} }
}
export function getRestaurantsFailure(){
    return { type: GET_RESTAURANTS_FAILURE }
}
export function getSingleRestaurantsRequest(){
    return { type: GET_SINGLE_RESTAURANT_REQUEST }
}
export function getRSingleestaurantsSuccess(value){
    return { type: GET_SINGLE_RESTAURANT_SUCCESS, payload:value }
}
export function getSingleRestaurantsFailure(){
    return { type: GET_SINGLE_RESTAURANT_FAILURE }
}


export const getRestaurants = (pageNo=1) => async (dispatch) => {
    dispatch(getRestaurantsRequest())
    try{
        // console.log(storeValue) ;
        // console.log(storeValue) ;
        let response =  await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${pageNo}&limit=9`);
        // let data = await response.json();
        console.log(response.data) ;
        dispatch(getRestaurantsSuccess(response.data))
        // console.log(storeValue) ;
    }
    catch(error){
        console.log(error);
        dispatch(getRestaurantsFailure())
        // console.log(storeValue) ;
    }
};

export const getSingleRestaurant = (id=1) => async (dispatch) => {
    dispatch(getSingleRestaurantsRequest()) ;
    try{
        let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`);
        // let data = await response.json();
        console.log(response.data.data) ;
        dispatch(getRSingleestaurantsSuccess(response.data.data)) ;
    }
    catch(error){
        console.log(error);
        dispatch(getSingleRestaurantsFailure()) ;
    }
};

