import React from "react";

import Like from "../../../asset/imgs/img_like_green.svg";
import MenuList from "../../../asset/imgs/tab_menu_list.svg";
function UserComment() {
    return (
        <div className="detail-box-comment">
            <div className="detail-box-inner-comment">
                <div style={{ display: "flex", marginRight: "auto" }}>
                    <div className="detail-article-icon" style={{ marginRight: "5px" }} />
                    <span style={{ paddingTop: "7px", fontSize: "14px", fontWeight: 500 }}>작성자 이름</span>
                    <span style={{ marginLeft: "5px", paddingTop: "7px", color: "#828382" }}>2022.02.10 22:57</span>

                </div>
                <div style={{
                    display: "flex", marginLeft: "auto", alignItems: "center",
                }}
                >
                    <div style={{ width: "16px", height: "14px", background: `url(${Like}) no-repeat center` }} />
                    <span style={{ color: "#828382", margin: "0px 5px", paddingTop: "4px" }}>429</span>

                    <div style={{
                        marginLeft: "auto", marginRight: "5px", background: `url(${MenuList}) no-repeat center`, width: "20px", height: "30px",
                    }}
                    />
                </div>
            </div>
            <textarea name="" id="" cols="30" rows="10" readOnly defaultValue="asdasdasdasdasd" />
        </div>
    );
}

export default UserComment;
