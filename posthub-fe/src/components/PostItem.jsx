import { useDispatch } from 'react-redux';
import { deleteMessage, updateMessage } from '../redux/action';
import { FaTrash} from 'react-icons/fa';
import { GrEdit } from "react-icons/gr";

const PosdtItem = ({ post,index }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4">{post.text}</span>
            </div>
            <div className="space-x-3 ml-8">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => dispatch(updateMessage(index))}><GrEdit /></button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"  onClick={() => dispatch(deleteMessage(index))}><FaTrash /></button>
            </div>
        
        </li>
  );
}
export default PosdtItem;