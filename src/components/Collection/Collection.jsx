import React from 'react'

const Collection = () => {
    return (
        <div className="collection container-home">
            <h2 className="collection-title">Bộ sưu tập của bạn</h2>
            <div>
               
                <h4>Các phim bạn muốn xem</h4>
                <div className="color-collection">
                    Bạn chưa thêm phim nào vào danh sách này
                </div>
                <br /><br /><br /><br />
            </div>
            <div>
                <h4>Các phim bạn đã xem</h4>
                <div className="color-collection">
                    Bạn chưa thêm phim nào vào danh sách này
                </div>
                <br /><br />
                <i className="color-collection">Chức năng này sẽ được phát triển trong tương lai gần ❤️</i>
                <br /><br /><br /><br />
            </div>
        </div>
    )
}
export default Collection