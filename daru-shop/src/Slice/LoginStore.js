import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import config from '../asset/js/config';

// set method로 상태 변경 가능, get method는 가져온 
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
})


// devtools를 이용 redux devtools로 액션 확인
const LoginStore = create(devtools(useStore));

export default LoginStore;