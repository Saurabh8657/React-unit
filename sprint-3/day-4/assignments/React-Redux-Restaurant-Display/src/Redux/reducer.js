import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_SINGLE_RESTAURANT_FAILURE, GET_SINGLE_RESTAURANT_REQUEST, GET_SINGLE_RESTAURANT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    restaurants: [],
    totalPages: 0,         //? you will get it from API response
    restaurant:{}          //? to store single restaurant information
};

// complete reducer function

export const resturantReducer = ( state=initialState, action) => {
    switch(action.type){
        case GET_RESTAURANTS_REQUEST : 
            return { ...state, isLoading:true };
        case GET_RESTAURANTS_SUCCESS : 
            return { ...state, isLoading:false, isError:false, restaurants:action.payload.restaurantArray, totalPages:action.payload.pagesCount};
        case GET_RESTAURANTS_FAILURE : 
            return { ...state, isLoading:false, isError:true };
        case GET_SINGLE_RESTAURANT_REQUEST : 
            return { ...state, isLoading:true };
        case GET_SINGLE_RESTAURANT_SUCCESS : 
            return { ...state, isLoading:false, isError:false, restaurant:action.payload};
        case GET_SINGLE_RESTAURANT_FAILURE : 
            return { ...state, isLoading:false, isError:true };
        default : 
            return state ;
    }
};
