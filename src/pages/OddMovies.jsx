import React from 'react'
import Helmet from '../components/Helmet'
import momo from '../assets/images/momo.jpg'
import bidvLogo from '../assets/images/bidvLogo.svg'
import logoVpbank from '../assets/images/logoVpbank.svg'
import logoMB from '../assets/images/logoMB.png'
const OddMovies = () => {
    return (
        <div className="background-base">
            <Helmet title="Phim Bộ">
                <div className="container-donate">
                    <div className="donate-header">
                        <h1 className="h1-color">Donate</h1>
                        <p>Phần phim bộ đang được team phát triển để bạn có thể dễ dàng biết được tất cả các phần/tập của phim.</p>
                        <p> Nhưng tuy nhiên chúng tôi vẫn upload tất cả trong mục tất cả phim. Bạn có thể lọc hay tìm kiếm để trải nghiệm hết nhé</p>
                        <p>Để ủng hộ website và sử dụng tính năng VIP mode cho phim cũng như tạo động lực cho team phát triển</p>
                        <p>Hãy donate cho website qua 1 trong 2 hình thức sau:</p>
                    </div>
                    <div className="donate-form">
                        <div className="donate-momo">
                            <h3 className="header-momo h1-color">Nạp qua Momo</h3>
                            <div className="donate-content-left">
                                <ul>
                                    <li>1. Mở app Momo và <b>Quét mã</b> bên dưới</li>
                                    <li>2. Nhập số tiền bạn muốn chuyển, <b className="donate-content-warning">tối thiểu là 10.000đ mỗi lần chuyển</b>. Nếu bạn chuyển ít hơn hệ thống sẽ coi là spam và không ghi nhận giao dịch , bạn mất tiền!</li>
                                    <li>3. <b className="donate-content-warning">Nhập lời nhắn</b> kèm theo là email tài khoản bạn (lời nhắn kèm theo lệnh chuyển tiền của Momo, chứ không phải chuyển tiền xong mới nhắn qua chat):</li>
                                    <span className="content-bank"><i>"Tên email hoặc số điện thoại của bạn"</i></span>
                                </ul>
                            </div>
                            <p>Hãy đảm bảo làm đúng hướng dẫn trên để không gặp trục trặc!</p>
                            <img src={momo} alt="" className="img-momo" />
                            <div className="donate-or-mobile">
                                Hoặc :
                            </div>
                        </div>
                        <div className="donate-or">
                            |

                            <br />Hoặc
                            <br />
                            |
                        </div>

                        <div className="donate-bank">
                            <h3 className="h1-color">Chuyển khoản ngân hàng</h3>
                            <img src={logoVpbank} alt="" className="logo-Vpbank" />
                            <p></p>
                            <p className="bank-vp">Chủ tài khoản : Nguyễn Đức Dũng</p>
                            <p>Số tài khoản : 189554966 ,
                                207050474 or
                                678200506
                            </p>
                            <br />
                            <br />
                            <img src={bidvLogo} alt="" />
                            <p></p>
                            <p className="bank-vp">Chủ tài khoản : Nguyễn Đức Dũng</p>
                            <p>Số tài khoản : 22210003132802
                            </p>
                            <br />
                            <img src={logoMB} alt="" />
                            <p></p>
                            <p className="bank-vp">Chủ tài khoản : Nguyễn Đức Dũng</p>
                            <p>Số tài khoản : 0398113876 </p>
                        </div>
                    </div>
                </div>
            </Helmet >
        </div>
    )
}

export default OddMovies;