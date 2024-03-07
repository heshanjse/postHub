import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import PostItem from "./PostItem";
import { apiget } from "../services/apiClient";
import { searchMessages } from "../redux/action";
import { useEffect } from "react";

const PostList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleGetPosts = async () => {
            let request = {
                url: 'view'
            };
            const resvalues = await apiget(request);
            dispatch(searchMessages(resvalues.result));

        };
        handleGetPosts();
    }, []);


    const filteredPosts = useSelector((state) => {
        return state.messages;
    });

    return (
        <ul>
            <li className="my-2 text-sm italic">All Your Posts Here ...</li>
            {
                filteredPosts.map((post, index) => (
                    <PostItem post={post} index={index} />
                ))
            }
        </ul>
    );
}
export default PostList;