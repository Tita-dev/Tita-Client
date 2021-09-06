import React from 'react';
import * as S from './Con1st';

const Contents1 = () => {
    return (
        <>
            <S.Cont1>
                <S.Ment1>
                    <S.Con1_ment1>
                        우리들만의 공간에서 우리들만의 이야기를,
                        <br />
                        <p className="sub_title">타임테이블</p>
                    </S.Con1_ment1>
                    <S.Img1>
                        <img src={require("../../Assets/Con1_img2.svg").default} className="GooglePlay" width="180px" height="60px"/>
                    </S.Img1>
                </S.Ment1>
                <S.Img2>
                    <img src={require("../../Assets/Con1_img.svg").default} className="Con1_img"/>
                </S.Img2>
            </S.Cont1>
            
            
            
            
        </>
    );
};

export default Contents1;