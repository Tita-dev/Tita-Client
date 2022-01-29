import React from 'react';
import * as S from './QuestionsS';

const  Questions = () => {
    return(
        <>
            <S.Qtitle>문의하기</S.Qtitle>
            <S.Qcontent>궁금한 점은<a onClick={() => alert('titable2021@gmail.com')}>titable2021@gmail.com</a>으로 메일을 보내주세요</S.Qcontent >
        </>
    );
};

export default Questions;
