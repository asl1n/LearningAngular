import { postInterface } from "./post.interface";

export interface postStateInterface{
    loading: boolean;
    posts: postInterface[];
    error: string | null;
}