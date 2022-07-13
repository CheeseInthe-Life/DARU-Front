/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

// custom-hooks
// import useResize from "../../asset/js/useResize";

// components
import { ThumbnailBox, Thumbnail, ThumbnailRemoveButton } from "../../asset/css_in_js/thumbnailTheme";
import UserComment from "./Detail/UserComment";

// images
import BackButton from "../../asset/imgs/tab_back.svg";
import Like from "../../asset/imgs/img_like_green.svg";
import Shortcut from "../../asset/imgs/img_shortcut_green.svg";
import MenuListIcon from "../../asset/imgs/tab_list_user.svg";
import MenuList from "../../asset/imgs/tab_menu_list.svg";
import Arrow from "../../asset/imgs/img_arrow.svg";
import Avatar from "../../asset/imgs/img_avatar.svg";

function UserNewsDetail() {
  // const isMd = useResize();
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "800px" }}>
      <div className="detail-container">
        <button
          type="button"
          className="detail-button_back"
          aria-label="Back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
        <div className="detail-title"
        >
          나의 찻집 소식
        </div>
      </div>

      <div className="detail-box-article">
        {/* 시간 */}
        <div className="detail-article-time">
          <span className="detail-time">2022.02.10 22:57</span>
          <div className="detail-menu_tab"></div>
        </div>

        <div className="detail-article-content">
          {/* ~티하우스 */}
          <div className="detail-article-box-content-title">
            <div className="detail-article-icon"></div>
            <span style={{ paddingTop: "5px", fontWeight: 500, }}>00티하우스</span>

            <div className="detail-article-labels">
              <div style={{ background: `url(${Like}) no-repeat center` }}></div>
              <span>429</span>
              <div style={{ background: `url(${Shortcut}) no-repeat center` }}></div>
              <span>429</span>
            </div>
          </div>
          {/* 제목제목 */}
          <div className="detail-article-content-title">
            제목제목제목
          </div>

          <textarea name="" id="" cols="30" rows="10" readOnly defaultValue="asdasdasdasdasd"></textarea>
        </div>
        {/* 썸네일 */}

        <ThumbnailBox marginTop={"0"} marginLeft={"0"} marginBottom={"0"}>
          <Thumbnail style={{ width: "90px", height: "90px" }} backgroundUrl={"https://via.placeholder.com/150/d32776"} />
          <Thumbnail style={{ width: "90px", height: "90px" }} backgroundUrl={"https://via.placeholder.com/150/d32776"} />
          <Thumbnail style={{ width: "90px", height: "90px" }} backgroundUrl={"https://via.placeholder.com/150/d32776"} />
        </ThumbnailBox>

        <div>
          <div className="detail-article-box-comment-title">
            <span>댓글</span>
            <span style={{ fontWeight: 600, color: "#3DA38D" }}>(10개)</span>
          </div>
          <UserComment />

          <div>
            {/* 덧글 */}
            <div style={{ display: "flex", flexDirection: "row", minHeight: "130px", boxSizing: "border-box", background: `white`, width: "100%", }}>
              {/* 화살표 */}
              <div style={{ width: "10%", minHeight: "130px", }}>
                <div style={{ width: "25px", height: "22px", background: `url(${Arrow}) no-repeat center`, margin: "0 auto", marginTop: "20px" }}></div>
              </div>
              <div style={{ width: "90%" }}>
                <UserComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default UserNewsDetail;
