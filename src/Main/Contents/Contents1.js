import React from 'react';
import * as S from './Con1st';

const Contents1 = () => {
    return (
        <>
            <S.Cont1>
                <S.Ment1>
                    <S.Con1_ment1>
                        우리들만의 공간에서 우리들만의 이야기를,
                    </S.Con1_ment1>
                    <S.Con1_ment2>
                        타임테이블
                    </S.Con1_ment2>
                </S.Ment1>
                <S.Img1>
                    <img src={require("../../Assets/Con1_img.svg").default} className="Con1_img"/>
                </S.Img1>
            </S.Cont1>
            
            
            
            
        </>
    );
};

export default Contents1;