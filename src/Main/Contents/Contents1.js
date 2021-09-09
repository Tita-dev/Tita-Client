import React from 'react';
import * as S from './Con1st';
import Con1img from '../../Assets/Con1img.png';
import Playbtn from '../../Assets/Playbtn.png';




const Contents1 = () => {
    return (
        <>
            <S.Cont1>
                <S.Ment1>
                    <S.Con1ment1>
                        우리들만의 공간에서 우리들만의 이야기를,
                        <br />
                        <p className="sub_title">타임테이블</p>
                    </S.Con1ment1>
                    <S.Img1>
                        <a href="https://www.naver.com" target="_blank">
                            <img className="Playbtn" src={Playbtn} alt=""/>
                        </a>
                    </S.Img1>
                </S.Ment1>
                <S.Img2>
                    <img className="Con1img" src={Con1img} alt=""/>
                </S.Img2>
            </S.Cont1>
        </>
    );
};

export default Contents1;