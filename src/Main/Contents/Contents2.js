import React from 'react';
import * as S from '../style/ConTwost';

const Contents2 = () => {
    return (
        <>
            <S.Cont2>
                <S.Ment2>
                    <S.Con2Ment1>
                        <div>우리만의 공간,</div>
                        <div>타임테이블</div>
                    </S.Con2Ment1>
                    <S.Con2Ment2>
                        <div><p className="bold_text">급식, 주요 공지</p>등 학교 생활에 </div>
                        <div>필수적인 정보는 물론,</div> <br />
                        <div className="underText">우리 학교 친구들과 소통하는 <p className="bold_text underText">익명 커뮤니티</p></div>
                    </S.Con2Ment2>
                </S.Ment2>
            </S.Cont2>
        </>
    );
};

export default Contents2;