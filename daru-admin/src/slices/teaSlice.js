import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const teaList = createAsyncThunk(
  "DATA BINDING",
  async (payload, { rejectWithValue }) => {
    
    let Url = 
      "https://cheeseinthelife.com/teahouse";
    let result = null;
    switch (payload.method) {
      case "get":
        try {
          console.log("get실행");
          result = await axios.get(`${Url}`,{
            params:{
              page: payload.page,
              rows: 20
            }
          });
        } catch (err) {
          // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer
          // 의 rejected 함수가 호출된다.
          result = rejectWithValue(err.response);
        }
        break;
      case "post":
        try {
          result = await axios.post(Url, {
            place_name: payload.value.place_name,
            phone: payload.value.phone,
            address: payload.value.address,
            manager_phone: payload.value.manager_phone,
            instagram: payload.value.instagram,
            homepage: payload.value.homepage,
          });
        } catch (err) {
        
          result = rejectWithValue(err.response);
        }
        break;

        case "getSearch":
        try {
          console.log("getSearch실행");
          console.log(payload.value);
          result = await axios.get(`${Url}/`,{
            params:{
              page: payload.page,
              rows: 20
            }
          });
        } catch (err) {
          // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer
          // 의 rejected 함수가 호출된다.
          result = rejectWithValue(err.response);
        }
        break;
      case "post":
        try {
          result = await axios.post(Url, {
            place_name: payload.value.place_name,
            phone: payload.value.phone,
            address: payload.value.address,
            manager_phone: payload.value.manager_phone,
            instagram: payload.value.instagram,
            homepage: payload.value.homepage,
          });
        } catch (err) {
        
          result = rejectWithValue(err.response);
        }
        break;
      case "put":
        try {
          console.log("put");
          result = await axios.put(`${Url}/${payload.user}`, {
            place_name: payload.value.place_name,
            phone: payload.value.phone,
            address: payload.value.address,
            manager_phone: payload.value.manager_phone,
            instagram: payload.value.instagram,
            homepage: payload.value.homepage,
          });
        } catch (err) {
      
          result = rejectWithValue(err.response);
        }
        break;
      case "delete":
        try {
          console.log("delete");
          result = await axios.delete(`${Url}/${payload.user}`);
        } catch (err) {

          result = rejectWithValue(err.response);
        }
        break;
      default:
        console.log("payload method가 없습니다.");
    }

    return result;
  }
);

/** Slice 정의 (Action함수 + Reducer의 개념) */
const teaSlice = createSlice({
  name: "tea",
  initialState: {
    /** 상태값 구조 정의 (자유롭게 구성 가능함) */
    rt: null, // HTTP 상태 코드(200,404,500 등)
    rtmsg: null, // 에러메시지
    item: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
  },
  // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax요청 준비 */
    [teaList.pending]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [teaList.fulfilled]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [teaList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
  },
});
// 리듀서 객체 내보내기
export default teaSlice.reducer;