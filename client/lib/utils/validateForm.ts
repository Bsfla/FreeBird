export const validateEmail = (email: string) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (!emailRegex.test(email) && email.length > 0) {
    return '이메일 형식이 다릅니다.';
  } else if (email.length < 1) return '이메일은 필수 입력입니다';
  else return '';
};

export const validatePassword = (password: string) => {
  if (password.length === 0) return '비밀번호는 필수입력 입니다.';
  else return '';
};

export const validateNickname = (nickname: string) => {
  if (nickname.length === 0) return '닉네임은 필수입력 입니다.';
  else if (nickname.length > 4) return '닉네임은 4글자 이내로 입력해주세요.';
  else return '';
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
) => {
  if (password !== passwordConfirm) return '비밀번호가 다릅니다';
  else return '';
};
