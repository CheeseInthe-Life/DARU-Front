import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import config from '../asset/js/config';


// Login
// set method로 상태 변경 가능, get method는 this의 역할
const useStore = (set, get) => ({
    userid: "",
    accessToken: "",
    refreshToken: "",
    result: {},
    // refesh토큰은 저장, 
    setUserId: (id) => {
        console.log("setUserId");
        return set({ userid: id });
    },
    setAccessToken: (token) => {
        console.log("setUserId");
        return set({ accessToken: token });
    },
    setRefreshToken: (token) => {
        console.log("setRefreshToken");
        return set({ refreshToken: token });
    },
    setResult: (result) => {
        console.log("setResult");
        return set({ result: result });
    },

    Login: async (id, password) => {
        console.log("onLogin");
        if (!((typeof id === "string") && (typeof password === "string"))) {
            console.log("로그인하는데 스트링값을 줘야지");
            return false;
        }
        let result = null;
        try {
            console.log(config.server.url);
            // 400에러 id, 비번다르면 400에러줌..
            result = await axios.post(config.server.url + "managers/login", {
                user_id: id,
                password: password,
            });
            // store Result값 변경
            get().setUserId(id);
            get().setResult(result);
        } catch (e) {
            result = e.response.data
            console.log(result);
            get().setResult(result);
            alert("서버와의 통신 실패");
        } finally {
            return get().setResult(result);
        }

        return result;
    },
})


// devtools를 이용 redux devtools로 액션 확인
const LoginStore = create(devtools(useStore));

export default LoginStore;