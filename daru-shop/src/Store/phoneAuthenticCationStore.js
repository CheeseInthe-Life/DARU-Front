// 아이디찾기 스토어
import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import config from "../asset/js/config";
import RegexHelper from "../asset/js/RegexHelper";
// set method로 상태 변경 가능, get method는 가져온
const useStore = (set, get) => ({
  phone: "",
  authenticationNumber: "",
  result: {},

  // 폰번호 할당
  setPhoneNum: (num) => {
    console.log("setPhoneNum");
    return set({ phone: num });
  },
  // 인증번호 변경
  // setAuthenticationNum: (num) => {
  //     console.log("setAuthenticationNum");
  //     return set({ authenticationNumber: num })
  // },
  // 서버에서 가져온 정보 할당
  setResult: (result) => {
    console.log("setResult");
    return set({ result });
  },

  // 문자 보내기
  async sendAuthenticationNum() {
    const phoneNumber = get().phone;
    console.log("phone store phoneNumber ::: " + phoneNumber);

    let result = null;
    try {
      result = await axios.post(`${config.server.url}/auth/cellphone`, {
        phone: phoneNumber,
      });
      alert("메세지가 성공적으로 발송되었습니다.");
    } catch (e) {
      alert("메세지 발송 실패", `${e}`);
    } finally {
      // store 안 result 객체에 통신 성공/실패 값 넣어두기
      get().setResult(result);
    }
    // 전역스토어에 객체복사하기
    return result;
  },

  // 인증번호 확인하기
  async checkAuthenticationNum(authenticationNumber) {
    console.log("checkAuthenticationNum");
    if (typeof authenticationNumber !== "string") {
      console.log("인증번호는 스트링값을 줘야지");
      return false;
    }
    const phoneNumber = get().phone;
    let result = null;
    try {
      result = await axios.post(`${config.server.url}/auth/cellphone/verification`, {
        phone: phoneNumber,
        number: authenticationNumber,
      });
      alert("인증번호 전송 완료");
      console.log(result);
    } catch (e) {
      alert("인증 실패", `${e}`);
    } finally {
      get().setResult(result);
    }
    // 스토어 전역변수에 result값을 받음
    return get().setResult(result);
  },
});

// devtools를 이용 redux devtools로 액션 확인
const FindIdStore = create(devtools(useStore));

export default FindIdStore;
