import React from 'react';
import * as S from './FooterSt';
import Github from '../Assets/github.png';

const Footer = () => {
    return (
        <>
        <S.Ft>
            <S.Ft_title>
                Timetable
            </S.Ft_title>
            <S.Ft_subtitle>
                Team - Tempus
            </S.Ft_subtitle>
            <S.Ft_bottom>
                <S.One>
                    Copyright © TimeTable
                </S.One>
                <S.Two>
                    <a href="/">
                        <p className="Two_"> 이용약관</p>
                    </a>
                    <a href="/">
                        <p className="Two_"> 개인정보처리방침</p>
                    </a>
                    <a href="/">
                        <p className="Two_"> 문의하기</p>
                    </a>
                </S.Two>
                <S.Img5>
                    <a href="/">
                        <img className="Github" src={Github} alt="" />
                    </a>
                </S.Img5>
            </S.Ft_bottom>
        </S.Ft>
            
        </>
    );
};

export default Footer;