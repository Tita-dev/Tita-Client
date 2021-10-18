import React from 'react';
import * as S from '../style/ConOnest';
import * as I from '../../Assets/index';




const Contents1 = () => {
    return (
        <>
            <S.ContOne>
                <S.MentOne>
                    <S.ConOnement>
                        우리들만의 공간에서 우리들만의 이야기를,
                        <br />
                        <p className="sub_title">타임테이블</p>
                    </S.ConOnement>
                    <S.ImgOne>
                        <a href="#!" target="_blank" rel="noreferrer" >
                            <I.PlayBtn />
                        </a>
                    </S.ImgOne>
                </S.MentOne>
                <S.ImgTwo>
                    <I.ConOneImg />
                </S.ImgTwo>
            </S.ContOne>
        </>
    );
};

export default Contents1;