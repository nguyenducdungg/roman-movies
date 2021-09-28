import { useState } from "react";
import "./Rate.css";
import { FaStar } from "react-icons/fa";
import axios from "../../axios";

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
    const handleClick = async (value) => {
        setCurrentValue(value)
        if (!user) {
            alert("Bạn cần đăng nhập để đáng giá phim!")
            setCurrentValue(0);
            return;
        }
        await axios.post("/ceaterate", { "rate": currentValue, "user": `${user._id}`, "movie": `${id}` },
            {
                headers: {
                    "token": `${user.token}`
                }
            })
        alert("Cảm ơn đánh giá của bạn");

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
        </div>
    );
};






export default Rate;