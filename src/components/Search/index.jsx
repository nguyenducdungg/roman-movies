// import React , {useState, useEffect} from 'react'
// import axios from '../utils/ApiAxios';
const Search = ({ keyword }) => {
    // const [valueSearch, setValueSearch] = useState([])
    // useEffect(() => {
    //     const getMovie = async () => {
    //         try {
    //             const response = await axios.findmovie(keyword)
    //             const data = await response.data;
    //             setValueSearch(data)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getMovie();
    // }, []);
    return (
        <div className="background-search">
            <div className="container-home search-movie">
                <input type="text" placeholder="Nhập tên phim" value={keyword} className="input-search" />
            </div>
        </div>
    )
}

export default Search