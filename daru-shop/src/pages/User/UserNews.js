import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// custom hooks
import useResize from "../../asset/js/useResize";

// theme
import {
  BoxShop, BoxNews, BoxNewsInfo, BoxNewsCountImgs, BoxNewsImgs, BoxNewsSort, BoxNewsSortInnerBox, BoxNewsSortInnerBoxCheck, BoxNewsCheckBoxImg, BoxNewsPostingInnerBox, MenuListIcon, BoxImageLabel,
} from "../../asset/css_in_js/shopTheme";

// components
import Subtitle from "../../components/Subtitle";
import Title from "../Home/Title";

// imgs
import Document from "../../asset/imgs/img_document.svg";
import LikeDocument from "../../asset/imgs/img_ddabong.svg";
import Note from "../../asset/imgs/img_note.svg";
import CountUp from "../../asset/imgs/img_count_up.svg";
import CountNone from "../../asset/imgs/img_count_none.svg";
import SortOn from "../../asset/imgs/img_check_sort_on.svg";
import SortOff from "../../asset/imgs/img_check_sort_off.svg";
import Like from "../../asset/imgs/img_like.svg";
import View from "../../asset/imgs/img_view.svg";
import Comment from "../../asset/imgs/img_comment.svg";
import Shortcut from "../../asset/imgs/img_shortcut.svg";
import List from "../../asset/imgs/tab_list_user.svg";

function UserNews() {
  const isMd = useResize();
  const navigate = useNavigate();

  const [dataAlignment, setDataAlignment] = useState("write");
  const arr = ["10", "20", "30", "40", "50", "60", "70", ""];

  return (
    <>
      <BoxShop>
        {isMd === "sm" && (
          <div style={{ margin: "0 auto" }}>
            <Title title="매장 소식 관리" />
          </div>
        )}
        <Subtitle title="매장 운영 지표" />
        <BoxNews flexDirection={isMd === "md" ? "row" : "column"}>
          <BoxNewsInfo width={isMd === "md" ? "390px" : "100%"} marginBottom={isMd === "md" ? "0px" : "15px"}>
            <span className="box-news-info-inner-title"> 총 조회 수</span>
            <span className="box-news-count">112</span>
            <BoxNewsCountImgs backgroundUrl={CountUp} />
            <span className="box-news-count-number">23</span>
            <BoxNewsImgs backgroundUrl={Document} />
          </BoxNewsInfo>

          <BoxNewsInfo width={isMd === "md" ? "390px" : "100%"} marginBottom={isMd === "md" ? "0px" : "15px"}>
            <span className="box-news-info-inner-title"> 총 좋아요 수</span>
            <span className="box-news-count">112031238</span>
            <BoxNewsCountImgs backgroundUrl={CountNone} />
            <span className="box-news-count-number">23</span>
            <BoxNewsImgs backgroundUrl={LikeDocument} />
          </BoxNewsInfo>

          <BoxNewsInfo width={isMd === "md" ? "390px" : "100%"} marginBottom={isMd === "md" ? "0px" : "15px"}>
            <span className="box-news-info-inner-title"> 총 조회 수</span>
            <span className="box-news-count">112031238</span>
            <BoxNewsCountImgs backgroundUrl={CountUp} />
            <span className="box-news-count-number">23</span>
            <BoxNewsImgs backgroundUrl={Note} />
          </BoxNewsInfo>
        </BoxNews>
      </BoxShop>

      <BoxShop>
        <Subtitle title="매장 소식 관리" />
        <button
          className="small-btn __green __info"
          onClick={(e) => {
            e.preventDefault();
            navigate("/User/News/Write");
          }}
        >
          글쓰기
        </button>
        <BoxNewsSort flexDirection={isMd === "md" ? "row" : "column"}>
          {/* 작성 순, 인기 순, 여섯개씩 보기 */}
          <BoxNewsSortInnerBox>
            <BoxNewsSortInnerBoxCheck onClick={(e) => {
              e.preventDefault();
              setDataAlignment("write");
            }}
            >
              <BoxNewsCheckBoxImg backgroundUrl={dataAlignment === "write" ? SortOn : SortOff} />
              <span className="box-news-check-text" style={{ color: dataAlignment === "write" ? "" : "#828382" }}>
                작성 순
              </span>
            </BoxNewsSortInnerBoxCheck>

            <BoxNewsSortInnerBoxCheck onClick={(e) => {
              e.preventDefault();
              setDataAlignment("faviorite");
            }}
            >
              <BoxNewsCheckBoxImg backgroundUrl={dataAlignment === "faviorite" ? SortOn : SortOff} />
              <span className="box-news-check-text" style={{ color: dataAlignment === "faviorite" ? "" : "#828382" }}>
                인기 순
              </span>
            </BoxNewsSortInnerBoxCheck>
          </BoxNewsSortInnerBox>

          <div style={{ marginLeft: "auto" }}>
            <div style={{ width: "100%", display: "flex" }} className="radio-box __sm __dropdown">
              <select style={{ width: isMd === "md" ? "115px" : "300px", height: isMd === "md" ? "" : "40px", margin: "0 auto" }} name="select" id="select" className={"dropdown __time __" + "sm"}>
                <option value={6}>6개씩보기</option>
                <option value={7}>7개씩보기</option>
              </select>
            </div>
          </div>
        </BoxNewsSort>

        {/* 글 표시 박스들 */}

        <div className="box-news-posting">
          {arr.map((v, i) => (
            <BoxNewsPostingInnerBox
              key={i}
              width={isMd === "md" ? "350px" : "300px"}
              margin={isMd === "md" ? "5px 25px" : "5px 0px"}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/User/News/Detail/${i}`);
              }}
            >
              <div className="posting-inner-box">
                <span className="posting-time">2022.02.04 13:56</span>
                <MenuListIcon backgroundUrl={List} />
                <div className="box-news-info-posts-title">제목제목제목제목제목</div>
                <div className="box-news-info-posts">asdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdsasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdasdasdasdas</div>
                <div className="news-inner_img" />
              </div>
              <div className="box-image-view-inner">
                <div style={{ display: "flex" }}>
                  <BoxImageLabel backgroundUrl={Like} />
                  <span>429</span>
                </div>
                <div style={{ display: "flex", position: "absolute", left: "50px" }}>
                  <BoxImageLabel backgroundUrl={View} />
                  <span>1234</span>
                </div>

                <div style={{ display: "flex", right: "0", position: "absolute" }}>
                  <BoxImageLabel backgroundUrl={Comment} />
                  <span>12</span>
                </div>

                <div style={{ display: "flex", right: "40px", position: "absolute" }}>
                  <BoxImageLabel backgroundUrl={Shortcut} />
                  <span>12</span>
                </div>
              </div>
            </BoxNewsPostingInnerBox>
          ))}
        </div>

        {/* 페이지네이션 */}
      </BoxShop>
      {isMd === "md" ? (
        <div style={{ margin: "0 auto", marginTop: "100px", marginBottom: "100px" }}>
          <ul style={{ display: "flex" }}>
            <button type="button" className="btn-pagenation_prev_next"> &lt;&lt; </button>
            <button type="button" className="btn-pagenation_prev_next"> &lt; </button>
            <li className="btn-pagenation_prev_next">1</li>
            <li className="btn-pagenation_prev_next">2</li>
            <li className="btn-pagenation_prev_next">3</li>
            <li className="btn-pagenation_prev_next">4</li>
            <li className="btn-pagenation_prev_next">5</li>
            <button type="button" className="btn-pagenation_prev_next"> &gt;&gt; </button>
            <button type="button" className="btn-pagenation_prev_next"> &gt; </button>
          </ul>
        </div>
      ) : (
        <div style={{
          border: "1px solid #0E0F0E", width: "300px", height: "50px", margin: "0 auto", textAlign: "center", lineHeight: "50px", fontSize: "20px", fontWeight: "700", color: "#0E0F0E", borderRadius: "2px", marginTop: "10px", marginBottom: "20px",
        }}
        >
          더 보기
        </div>
      )}
    </>
  );
}

export default UserNews;
