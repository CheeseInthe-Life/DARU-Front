import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import config from '../asset/js/config';

// set method로 상태 변경 가능, get method는 가져온 
const useStore = (set, get) => ({
    phone: "",
    authenticationNumber: "",
    result: {},

    // 폰번호 변경
    setPhoneNum: (num) => {
        console.log("setPhoneNum");
        return set({ phone: num })
    },
    // 인증번호 변경
    setAuthenticationNum: (num) => {
        console.log("setAuthenticationNum");
        return set({ authenticationNumber: num })
    },
    // 서버에서 가져온 정보 변경
    setResult: (result) => {
        console.log("setResult");
        return set({ result: result })
    },


    // 문자 보내기
    sendAuthenticationNum: async function () {
        console.log("sendAuthenticationNum");
        const phoneNumber = get().phone;
        let result = null;
        try {
            result = await axios.post(config.server.url + "sms", {
                phone: phoneNumber
            });
            alert("메세지가 성공적으로 발송되었습니다.");
        } catch (e) {
            alert("메세지 발송 실패", `${e}`);
        } finally {
            // store 안 result 객체에 통신 성공/실패 값 넣어두기
            get().setResult({ ...result });
        }
        //전역스토어에 객체복사하기
        return result;
    },

    // 인증번호 확인하기
    checkAuthenticationNum: async function () {
        console.log("checkAuthenticationNum");
        const phoneNumber = get().phone;
        const authenticationNum = get().authenticationNumber;
        let result = null;
        try {
            result = await axios.post(config.server.url + "cotfc_num", {
                phone: phoneNumber,
                number: authenticationNum
            })
            alert("인증번호 전송 완료");
            console.log(result);
        } catch (e) {
            alert("인증 실패", `${e}`);
        } finally {
            get().setResult({ ...result });
        }
        // 스토어 전역변수에 result값을 받음
        return result;
    },
})


// devtools를 이용 redux devtools로 액션 확인
const FindIdStore = create(devtools(useStore));

export default FindIdStore;