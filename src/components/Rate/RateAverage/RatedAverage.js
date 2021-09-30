import { useEffect, useState } from "react";
import "./RatedAverage.css";
import axios from "../../axios";

//cách dùng: ở dưới mỗi bộ phim khi render ra màn hình danh sách phim,
//  hãy thêm 1 dòng RatedAverage  ở dưới và truyền movieID cho nó

const RatedAverage = ({ id }) => {

    const [ratedAverage, setRatedAverage] = useState(0);

    useEffect(() => {
        const fetchRatedAverage = async () => {
            const response = await axios.get("/getrateavgbymovie/" + id);
            const data = await response.data;
            console.log(data)
            setRatedAverage(data.avg);
        };
        fetchRatedAverage()
    }, [id])

    const starstotal = 5;
    const starPercentage = (ratedAverage / starstotal) * 100
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`



    return (
        <div style={{ width: 200, height: 100 }}>
            <div className="stars-outer" >
                <div className="stars-inner" style={{ width: `${starPercentageRounded}` }}></div>
            </div>
        </div>
    )

}



export default RatedAverage;