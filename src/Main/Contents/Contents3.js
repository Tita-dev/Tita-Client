import React from 'react';
import * as S from '../style/ConThreest';
import * as I from '../../Assets/index';

const Contents3 = () => {
    return (
        <>
            <S.Cont3>
                <S.Ment3One>
                    <S.Con3ment1>
                        <div className="sub_title1">홈</div>
                        <div className="sub_sentence">오늘의 급식, 주요 공지 등
                    <br />
                    TimeTable의 모든 것을 한눈에</div>
                    </S.Con3ment1>
                    <S.Img3>
                        <I.ConThreeImgOne />
                    </S.Img3>
                </S.Ment3One>
                <S.Ment3Two>
                    <S.Img4>
                        <I.ConThreeImgTwo />
                    </S.Img4>
                    <S.Con3ment2>
                        <p className="sub_title2">게시판</p>
                        교내 학생들과 주고받는 소식
                        <br />
                        궁금한 건 뭐든 물어보세요, 이곳에서
                    </S.Con3ment2>
                </S.Ment3Two>
            </S.Cont3>
        </>
    );
};

export default Contents3;

// test