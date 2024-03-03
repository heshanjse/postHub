import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {
    const filteredPosts = useSelector((state) => {
        if(state.filters === "ALL"){
            return state.messages;
        }
    }
    );
    return (
        <ul>
            <li className="my-2 text-sm italic">All Your Posts Here ...</li>
            {
                filteredPosts.map((post, index) => (
                    // <li key={index} className="my-2 p-2 bg-gray-200 rounded">{post.text}</li>
                    <PostItem post={post} index={index} />
                ))
            }
        </ul>
    );
}
export default PostList;