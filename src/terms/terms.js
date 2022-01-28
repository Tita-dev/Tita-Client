import React from 'react';
import * as S from './TermsS';

const Terms = () => {
    return (
        <>
            <S.Title >서비스 이용약관</S.Title>

            <S.Tcontents >
                <S.Tcontent >
                    <S.Clauses>제 1조(목적)</S.Clauses>
                    <S.ClausesDesc>
                        <p>타임테이블 서비스 이용약관은 회사가 서비스를 제공함에 있어,</p>
                        <p>회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다</p>
                    </S.ClausesDesc>
                </S.Tcontent>

                <S.Tcontent >
                    <S.Clauses>제 2조(정의)</S.Clauses>
                    <S.ClausesDesc>
                        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                        <p>“회사”란, 서비스를 제공하는 주체를 말합니다.</p>
                        <p>“서비스”란, 회사가 제공하는 모든 서비스 및 기능을 말합니다.</p>
                        <p>“이용자”란, 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
                        <p>“회원”이란, 서비스에 회원등록을 하고 서비스를 이용하는 자를 말합니다.</p>
                        <p>“비회원”이란, 서비스에 회원등록을 하지 않고 서비스를 이용하는 자를 말합니다.</p>
                        <p>“게시물”이란, 서비스에 게재된 문자, 사진, 영상, 첨부파일, 광고 등을 말합니다.</p>
                        <p>“커뮤니티”란, 게시물을 게시할 수 있는 공간을 말합니다.</p>
                        <p>“로그 기록”이란, 이용자가 서비스를 이용하면서 자동적으로 생성된 IP주소, 접속시간 등을 말합니다.</p>
                        <p>“기기 정보”란, 이용자의 통신 기기에서 수집된 운영체제 종류, ADID 등을 말합니다.</p>
                        <p>“계정”이란, 이용계약을 통해 생성된 회원의 고유 아이디와 이에 수반하는 정보를 말합니다.</p>
                        <p>“서비스 내부 알림 수단”이란, 팝업, 알림, 공지사항, 내 정보 메뉴 등을 말합니다.</p>
                        <p>“연락처”란, 회원가입, 본인 인증, 문의 창구 등을 통해 수집된 이용자의 이메일, 휴대전화 번호 등을 의미합니다.</p>
                        <p>“관련법”이란, 정보통신망 이용촉진 및 정보보호 등에 관한</p>
                        <p>법률, 개인정보보호법, 통신비밀보호법 등 관련 있는 국내 법령을 말합니다.</p>
                        <p>“본인 인증”이란, 휴대전화 번호 등을 이용한 본인 확인 절차를 말합니다.</p>
                        <p>“학교 인증”이란, 학생증을 이용한 학적 확인 절차를 말합니다.</p>
                        <p>1항에서 정의되지 않은 약관 내 용어의 의미는 일반적인 이용관행에 의합니다.</p>
                    </S.ClausesDesc>
                </S.Tcontent>

                <S.Tcontent>
                    <S.Clauses>제 3조 (약관 등의 명시와 설명 및 개정)</S.Clauses>
                    <S.ClausesDesc>
                        <p>1  회사는 이 약관을 회원가입 화면 및 “TimeTable 정보”등에 게시합니다.</p>
                        <p>2  회사는 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                        <p>3  내용이 개정될 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께 “공지사항”에 30일 간 게시합니다.</p>
                        <p>4  회원이 개정약관의 적용에 동의하지 않는 경우, 이용계약을 해지함으로써 거부 의사를 표시할 수 있습니다.</p>
                        <p>단, 30일 내에 거부 의사 표시를 하지 않을 경우 약관에 동의한 것으로 간주합니다.</p>
                        <p>5  회원은 약관 일부분만을 동의 또는 거부할 수 없습니다.</p>
                        <p>6  비회원이 서비스를 이용할 경우, 이 약관에 동의한 것으로 간주합니다.</p>
                    </S.ClausesDesc>
                </S.Tcontent>

                <S.Tcontent>
                    <S.Clauses>제 4조 (서비스의 제공)</S.Clauses>
                    <S.ClausesDesc>
                        <p>회사는 다음 서비스를 제공합니다.</p>
                        <p>- 고등학교 생활 편의 서비스</p>
                        <p>- 커뮤니티 서비스</p>
                        <p>회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.</p>
                        <p>회사는 이용자의 개인정보 및 서비스 이용 기록에 따라 서비스 이용에 차이를 둘 수 있습니다.</p>
                        <p>회사는 천재지변, 인터넷 장애, 경영 약화 등으로 인해 서비스를 더 이상 제공하기 어려울 경우,</p>
                        <p>서비스를 통보 없이 중단할 수 있습니다.</p>
                        <p>회사는 1항부터 전항까지와 다음 내용으로 인해 발생한 피해에 대해 어떠한 책임을 지지 않습니다.</p>
                        <p>- 모든 서비스, 게시물, 이용 기록의 진본성, 무결성, 신뢰성, 이용가능성</p>
                        <p>- 서비스 이용 중 타인과 상호 간에 합의한 내용</p>
                        <p>- 게시물, 광고의 버튼, 하이퍼링크 등 외부로 연결된 서비스와 같이 회사가 제공하지 않은 서비스에 발생한 피해</p>
                        <p>- 이용자의 귀책사유 또는 회사의 귀책 사유가 아닌 사유로 발생한 이용자의 피해</p>
                    </S.ClausesDesc>
                </S.Tcontent>

                <S.Tcontent>
                    <S.Clauses>제5조(서비스 이용계약의 성립)</S.Clauses>
                    <S.ClausesDesc>
                        <p>1  위 서비스는 학생증을 통해 해당 고등학교의 학부 재학생 및 졸업생으로 인증받은 이용자에 한해</p>
                        <p>이용할 수 있는 비공개 커뮤니티입니다. 해당 고등학교의 학생이 아닌 이용자와 만 14세 미만의 이용자는</p>
                        <p>서비스를 이용하거나 회원가입을 할 수 없으며, 그럼에도 불구하고 성립된 회원가입은 무효로 간주됩니다.</p>
                        <p>2  회사와 회원의 서비스 이용계약은 서비스 내부의 회원가입 화면의 가입 양식에 따라 회원정보를 기입한 후</p>
                        <p>필수 약관에 동의한다는 의사표시를 한 비회원의 이용신청에 대하여, 서비스 화면에 이용승낙을 표시하는 방법 등으로</p>
                        <p>의사표시를 하면서 체결됩니다.</p>
                        <p>3  승낙은 신청순서에 따라 순차적으로 처리되며, 회원가입의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</p>
                        <p>4  회사는 부정사용방지 및 본인확인을 위해 회원에게 본인인증 및 학교 인증을 요청할 수 있습니다.</p>
                    </S.ClausesDesc>
                </S.Tcontent>

                <S.Tcontent>
                    <S.Clauses>제 6조 (개인정보의 관리 및 보호)</S.Clauses>
                    <S.ClausesDesc>
                        <p>1  회원이 회사와 체결한 서비스 이용계약은 처음 이용계약을 체결한 본인에 한해 적용됩니다.</p>
                        <p>2  회원은 회원가입 시 등록한 정보에 변동이 있을 경우, 즉시 “마이 페이지” 메뉴 등을 이용하여 정보를 최신화해야 합니다.</p>
                        <p>3  회원의 아이디, 비밀번호, 이메일, 고등학교 정보 등 모든 개인정보의 관리책임은 본인에게 있으므로, 타인에게</p>
                        <p>양도 및 대여할 수 없으며, 유출되지 않도록 관리해야 합니다. 만약 본인의 아이디 및 비밀번호를 타인이</p>
                        <p>사용하고 있음을 인지했을 경우 바로 서비스 내부의 문의 창구에 알려야 하고, 안내가 있는 경우 이에 즉시 따라야 합니다.</p>
                        <p>4  회사는 2항부터 전항까지를 이행하지 않아 발생한 피해에 대해 어떠한 책임을지지 않습니다.</p> 
                    </S.ClausesDesc>
                </S.Tcontent>

            </S.Tcontents>
        
        </>
    );
};

export default Terms;