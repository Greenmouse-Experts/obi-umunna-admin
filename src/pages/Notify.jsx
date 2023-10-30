import React,{useState, useEffect} from 'react'
import { Custom } from '../services/config';
import "../stylesheet/admin.css"
import { formatDistanceToNow } from 'date-fns';

const Notify = ({datas}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([])


    const fetchNotify = async ()=> {
    setIsLoading(true);
    await Custom.get(`admin/get/all/notifications`)
        .then((res)=>{
            if(res) {
                setData(res.data.data)
             
            }
            
        }).catch()
        .finally(()=>
        {
            setIsLoading(false)
        })

    }

    useEffect(()=>{
        fetchNotify();
    }, [])


    const formatTimeAgo = (timestamp) => {
        const apiDate = new Date(timestamp);
        return formatDistanceToNow(apiDate);
      };

  return (
    <div className="notify">
        <div className="notify_head">
            <div className="notify_left">
                <button>
                    All <span>{datas}</span>
                </button>
                <button>
                    Unread
                </button>
            </div>
            <button>Mark all as read</button>
        </div>
        <div className="notify_body">
            {data.map((item)=>(
                <div className="">
                    {item.title}
                    <p>{formatTimeAgo(item.created_at)} ago</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Notify