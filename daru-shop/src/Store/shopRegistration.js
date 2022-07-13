// 매장 기본정보 상태관리 스토어
import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import config from "../asset/js/config";

// shop
// set method로 상태 변경 가능, get method는 this의 역할
const useStore = (set, get) => ({
    email: "",
    phone: "",
    password: "",
    birthday: "",
    gender: "",
    result: {}, //서버 통신 결과 정보
    // refesh토큰은 저장,
    setJoinData: (email, phone, password, birth, gender) => {
        console.log(email, phone, password, birth, gender);
        console.log("setData");
        return set({
            email: email,
            phone: phone,
            password: password,
            birthday: birth,
            gender: gender,
        });
    },
    
    sendUserJoinServer: async () => {
        let result = null;
        try {
            const result = await axios.post(`${config.server.url}/auth/sign-up`, {
                params: {
                    email: get().email,
                    phone: get().phone,
                    password: get().password,
                    birthday: get().birthday,
                    gender: get().gender,
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

});

// devtools를 이용 redux devtools로 액션 확인
const Store = create(devtools(useStore));

export default Store;
