import dayjs from "dayjs";

// 6자리 -> 8자리로 변환
function transJoinServerDate(date) {
    // 파라미터로 받은 데이터
    if (typeof date !== "string") {
        return alert("need string value");
    }
    let transDate = null;
    let day = date.slice(4);
    let month = date.slice(2, 4) - 1;
    let year = date.slice(0, 2);
    transDate = dayjs(new Date(year, month, day)).format("YYYY-MM-DD");
    return transDate;
};



export { transJoinServerDate };