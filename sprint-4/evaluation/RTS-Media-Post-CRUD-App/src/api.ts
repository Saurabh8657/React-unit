import axios from "axios";
import { PostType, fetchedPost } from "./types/types";

export const addPost = async (post: PostType) => {
    try {
        const res = await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`, { post });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};

export const getPosts = async () => {
    try {
        const res = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("Error getting posts:", error);
        throw error;
    }
};

export const updateLike = async (updatedPost: fetchedPost) => {
    try {
        const res = await axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${updatedPost.id}`, {
            updatedPost
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("Error updating like:", error);
        throw error;
    }
};

export const updateDisLike = async (updatedPost: fetchedPost) => {
    try {
        const res = await axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${updatedPost.id}`, {
            updatedPost
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("Error updating dislike:", error);
        throw error;
    }
};

export const deleteProduct = async (postId: string) => {
    try {
        const Id = parseInt(postId) ;
        const res = await axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${Id}`);
        console.log(res);
        // return res.data;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};
