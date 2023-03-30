import React from 'react';
import { Wrapper, Title, Input, Error } from './style';
import Button from '@components/common/Button';
import { useSignup } from '@hooks/page';
import { LOGIN_PAGE } from '@consts/route';
import Link from 'next/link';

const RegisterForm = () => {
  const {
    nickname,
    email,
    password,
    passwordConfirm,
    handleChangeNickname,
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordConfirm,
    isDisabled,
    handleSignup,
  } = useSignup();

  return (
    <Wrapper onSubmit={handleSignup}>
      <Title>SignUp</Title>
      <span>회원 정보를 입력해주세요</span>
      <Input
        placeholder="닉네임"
        name="nickname"
        value={nickname.content}
        onChange={handleChangeNickname}
      />
      {nickname.errorMessage && (
        <Error>
          <span>{nickname.errorMessage}</span>
        </Error>
      )}
      <Input
        placeholder="이메일"
        name="email"
        value={email.content}
        onChange={handleChangeEmail}
      />
      {email.errorMessage && (
        <Error>
          <span>{email.errorMessage}</span>
        </Error>
      )}
      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        value={password.content}
        onChange={handleChangePassword}
      />
      {password.errorMessage && (
        <Error>
          <span>{password.errorMessage}</span>
        </Error>
      )}
      <Input
        placeholder="비밀번호 확인"
        name="passwordconfirm"
        type="password"
        value={passwordConfirm.content}
        onChange={handleChangePasswordConfirm}
      />
      {passwordConfirm.errorMessage && (
        <Error>
          <span>{passwordConfirm.errorMessage}</span>
        </Error>
      )}
      <Button name="가입하기" disabled={!isDisabled} />
      <Link href={LOGIN_PAGE}>
        <span className="login">로그인</span>
      </Link>
    </Wrapper>
  );
};

export default RegisterForm;
