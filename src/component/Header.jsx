import React from 'react';
import Baner from '../image/baner.png';
import Dog from '../image/dog.png';
import Sicbo from '../image/sicbo.png';
import Ball from '../image/ball.png';
import Hat from '../image/hat.png';
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="banerImage"><img src={Baner} alt="" />
                    <div className="baner">
                        <div className="banerContent0"><img src={Ball} alt="" /> </div>
                        <div className="banerContent"><b>LIVESTREAM BÓNG ĐÁ ẢO</b></div>
                    </div>
                </div>
                <div className="banerImage"><img src={Baner} alt="" />
                    <div className="baner2">
                        <div className="banerContent1"><img src={Sicbo} alt="" /> </div>
                        <div className="banerContent2"><b>LIVESTREAM XÓC DĨA, TÀI XỈU</b></div>
                    </div>
                </div>
                <div className="banerImage"><img src={Baner} alt="" />
                    <div className="baner">
                        <div className="banerContent"><img src={Dog} alt="" /> </div>
                        <div className="banerContent"><b>LIVESTREAM ĐUA CHÓ ẢO</b></div>
                    </div>
                </div>
                <div className="banerImage"><img src={Baner} alt="" />
                    <div className="baner4">
                        <div className="banerContent3"><img src={Hat} alt="" /> </div>
                        <div className="banerContent"><b>CÁC KÈO E-SPORT HOT NHẤT</b></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;