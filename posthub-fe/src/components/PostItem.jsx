import { useDispatch } from 'react-redux';
import { deleteMessage, updateMessage } from '../redux/action';
import { FaTrash } from 'react-icons/fa';
import { GrEdit } from "react-icons/gr";
import { apipost } from "../services/apiClient";

const PosdtItem = ({ post, index }) => {
    const dispatch = useDispatch();

    const handleDeletePost = async (index) => {
        let request = {
          url: 'add',
          data: { body: index }
        };
        await apipost(request);
        dispatch(deleteMessage(index));
    }

    const handleDeletePostClick = (index) => {
        handleDeletePost(index);
    };

    const handleEditPost = async (index) => {
        let request = {
          url: 'add',
          data: { body: text }
        };
        await apipost(request);
        dispatch(updateMessage(text));
    }

    const handleEditPostClick = (index) => {
        handleEditPost(index);
    };

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4">{post.text}</span>
            </div>
            <div className="space-x-3 ml-8">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => handleEditPostClick(index)}><GrEdit /></button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={() => handleDeletePostClick(index)}><FaTrash /></button>
            </div>

        </li>
    );
}
export default PosdtItem;