import React from 'react';
import Contents1 from './Contents/Contents1';
import Contents2 from './Contents/Contents2';
import Contents3 from './Contents/Contents3';
import * as S from './style/MainSt';

const Main = () => {
    return (
        <>
            <S.Content>
                <Contents1 />
                <Contents2 />
                <Contents3 />
            </S.Content>

        </>
    );
};

export default Main;