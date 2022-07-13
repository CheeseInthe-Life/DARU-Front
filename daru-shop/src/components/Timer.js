import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Timer({ mm, ss, page }) {
  const navigate = useNavigate();
  // props로 분, 초받음
  const [minutes, setMinutes] = useState(parseInt(mm));
  const [seconds, setSeconds] = useState(parseInt(ss));

  // function goToHome() {
  //     // props로 넘어온 find setPage
  //     return navigate("/");
  // }

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
          alert("타이머가 끝나 홈으로 이동합니다.");
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
      {minutes}
      :
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

Timer.propTypes = {
  mm: PropTypes.string,
  ss: PropTypes.string,
  page: PropTypes.func,
};

export default Timer;
