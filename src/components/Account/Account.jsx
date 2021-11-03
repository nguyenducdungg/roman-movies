import React from 'react'

const Account = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className="container-account">
            <div className="has-text-centered">
                <h1>Xin chào, {user.username}</h1>
                <h4>Email: {user.email}</h4>
                <div className="text-color-7a7a7a">
                    <label className="checkbox-account">
                        <input type="checkbox" />
                        Bật chế độ kiểm duyệt phụ đề
                    </label>
                    <div>
                        Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay bằng ký tự lạ
                    </div>
                    <br />
                </div>
                <div className="text-color-7a7a7a">
                    <label className="checkbox-account">
                        <input type="checkbox" />
                        Đăng ký nhận thông báo về trang web
                    </label>
                    <div>
                        Chúng tôi chỉ gửi những thông báo quan trọng
                    </div>
                </div>
                <div className="vipMode-account">
                    <button className="btn-vipMode">Kích hoạt VIP mode</button>
                </div>
                <br />
                <lable style={{color : "#fff"}}><i>Tính năng này sẽ được phát triển trong tương lai ❤️</i></lable>
                <hr className="hr-account" />
            </div>
        </div>
    )
}
export default Account
