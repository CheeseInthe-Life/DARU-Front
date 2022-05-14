import React, { useState, useEffect } from "react";

const Timer = ({ mm, ss }) => {
    // props로 분, 초받음
    const [minutes, setMinutes] = useState(parseInt(mm));
    const [seconds, setSeconds] = useState(parseInt(ss));


    // 분, 초가 변할때마다 effect 실행
    useEffect(() => {
        // 1초마다 실행되는 Interval
        const countdown = setInterval(() => {
            // seconds가 0보다 클때
            if (parseInt(seconds) > 0) {
                // 초가 1초씩 줄음.
                setSeconds(parseInt(seconds) - 1);
            }
            // 초가 0일때
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    // 분이 0일때
                    // Interval 중단
                    clearInterval(countdown);
                } else {
                    // 그렇지 않을 경우 분에서 1 빼주고, 다시 초 59로 수정
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
    );
};

export default Timer;