import React, { useState } from 'react';

const SignUpForm = () => {
  // 상태를 관리할 변수들
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 핸들러
    function handleSubmit(){}

    const handleSubmit = (e)=>{}

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기서는 간단하게 콘솔에 출력하도록 하겠습니다.
    console.log('회원가입 정보:', { username, email, password });

    // 여기에 실제로 서버에 회원가입 요청을 보내는 코드를 추가할 수 있습니다.
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label>
          사용자 이름:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          이메일:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default SignUpForm;