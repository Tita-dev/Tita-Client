import * as S from '../style/ConThreest';
import * as I from '../../Assets/index';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Contents3 = () => {


    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    });

    return (
        <>
            <S.Wrapper>
                <S.ConOneWrapper data-aos="fade-up-left">
                    <S.MentOne>
                        <div className="sub_title1">홈</div>
                        <div className="sub_sentence">오늘의 급식, 주요 공지 등<br />TimeTable의 모든 것을 한눈에</div>
                    </S.MentOne>
                    <I.Breakfast class="Img3"/>
                </S.ConOneWrapper>
                <S.ConTwoWrapper  data-aos="fade-up-right">
                <img className="Img4" src={require('../../Assets/Freenotice.png').default} alt=""/>
                    <S.MentTwo>
                        <div className="sub_title2">게시판</div>
                        <div className="sub_sentence2">교내 학생들과 주고받는 소식<br />궁금한 건 뭐든 물어보세요, 이곳에서</div>
                    </S.MentTwo>
                </S.ConTwoWrapper>
            </S.Wrapper>
        </>
    );
};

export default Contents3;