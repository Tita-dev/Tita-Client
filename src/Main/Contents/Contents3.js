import React from 'react';
import * as S from '../style/ConThreest';
import * as I from '../../Assets/index';

const Contents3 = () => {
    return (
        <>
            <S.Wrapper>
                <S.ConOneWrapper>
                    <S.MentOne>
                        <div className="sub_title1">홈</div>
                        <div className="sub_sentence">오늘의 급식, 주요 공지 등<br />TimeTable의 모든 것을 한눈에</div>
                    </S.MentOne>
                    <I.Breakfast class="Img3"/>
                </S.ConOneWrapper>
                <S.ConTwoWrapper>
                    <I.Freenotice className="Img4"/>
                    <S.MentTwo>
                        <p className="sub_title2">게시판</p>
                        <div className="sub_sentence2">교내 학생들과 주고받는 소식<br />궁금한 건 뭐든 물어보세요, 이곳에서</div>
                    </S.MentTwo>
                </S.ConTwoWrapper>
            </S.Wrapper>
        </>
    );
};

export default Contents3;