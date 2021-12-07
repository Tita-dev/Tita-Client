import React from 'react';
import * as S from '../style/ConOnest';
import * as I from '../../Assets/index';



const Contents1 = () => {
    function onWait() {
        alert('출시 대기중입니다!');
    }
    return (
        <>
            <S.ContOne>
                <S.MentOne>
                    <S.ConOnement>
                        <div>우리들만의 공간에서 </div><div>우리들만의 이야기를,</div>
                        <br />
                        <p className="sub_title2">타임테이블</p>
                    </S.ConOnement>
                    <S.ImgOne>
                            <I.PlayBtn onClick={onWait}/>
                    </S.ImgOne>
                </S.MentOne>
                <S.ImgTwo>
                    {/* <I.Group /> */}
                    <img className="ConOneImg" src={require('../../Assets/ConOneImg.png').default} />
                </S.ImgTwo>
            </S.ContOne>
        </>
    );
};

export default Contents1;