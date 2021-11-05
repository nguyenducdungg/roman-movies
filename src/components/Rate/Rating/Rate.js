import { useEffect, useState } from "react";
import "./Rate.css";
import { FaStar } from "react-icons/fa";
import axios from "../../axios";
import { NotificationContainer, NotificationManager } from 'react-notifications';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

//cách dùng : thêm Component Rate vào khi render các phim ra 
// và truyền cho Component Rate id của Phim đó  
// Sửa size thì thay đổi truyền size vào cho Rate

const Rate = ({ id, size }) => {
    const user = JSON.parse(localStorage.getItem("user"));


    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(1)


    useEffect(() => {
        const rate = async () => {
            const res = await axios.get(`/getratebymovie/${id}`)
            let array = res.data.filter((el) => {
                return el.user === user._id
            })
            if (array.length > 0) { setCurrentValue(array[0].rate) }
        }
        rate()
    }, [id, user._id])


    const handleClick = async (value) => {
        setCurrentValue(value)
        if (!user) {
            NotificationManager.warning('để có thể đánh giá sao', 'Bạn cần đăng nhập', 3000);
            setCurrentValue(0);
            return;
        }
        try {
            await axios.post("/createrate", { "rate": value, "user": `${user._id}`, "movie": `${id}` },
                {
                    headers: {
                        "token": `${user.token}`
                    }
                })
            NotificationManager.success('đánh giá của bạn', 'Cảm ơn về', 3000);
        } catch (err) {
            NotificationManager.warning(`${err.response.data.error}`,'', 3000)
        } finally {

        }
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (
        <div className="ratingStar">
            <div className="everyStar">
                {stars.map((star, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={size}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 0,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <NotificationContainer />
        </div>
    );
};






export default Rate;