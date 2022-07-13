
/* eslint-disable */
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// custom-hooks
import useResize from '../../asset/js/useResize';


// component
import CheckBox from '../../components/CheckBox';
import { ThumbnailBox, Thumbnail, ThumbnailRemoveButton } from '../../asset/css_in_js/thumbnailTheme';

const UserNewsWrite = () => {
    const navigate = useNavigate();
    const isMd = useResize();
    const [checkHide, setCheckHide] = useState(true);
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
                    글쓰기
                </div>
            </div>
            <div className="detail-box-article">
                <input type="text" name="" id="" style={{border: "1px solid #338F6C", boxSizing: "border-box", width:"100%", padding: "10px", height:"50px", borderRadius: "5px", fontSize: "16px", marginBottom:"10px", marginTop:"10px"}} placeholder="제목을 입력해주세요(최대 18자)"/>
                <textarea name="" id="" cols="30" rows="10" style={{resize: "none", borderRadius: "5px", border: "1px solid #338F6C", width: "100%", height: "200px", fontSize:"16px", marginBottom:"10px"}} placeholder="" defaultValue="내용을 입력해 주세요"></textarea>
                <CheckBox title="체크 시, 이 글은 커뮤니티에서 보이지 않습니다." checked={checkHide} setChangeValue={setCheckHide} />

                <ThumbnailBox marginLeft={"0"} marginBottom={"50px"}>
                    <Thumbnail backgroundUrl="https://via.placeholder.com/600/24f355" style={{width:"70px", height:"70px"}}>
                        <ThumbnailRemoveButton/>
                    </Thumbnail>
                    <Thumbnail backgroundUrl="https://via.placeholder.com/600/24f355" style={{width:"70px", height:"70px"}}>
                        <ThumbnailRemoveButton/>
                    </Thumbnail>
                    <Thumbnail backgroundUrl="https://via.placeholder.com/600/24f355" style={{width:"70px", height:"70px"}}>
                        <ThumbnailRemoveButton/>
                    </Thumbnail>
                    <Thumbnail backgroundUrl="https://via.placeholder.com/600/24f355" style={{width:"70px", height:"70px"}}>
                        <ThumbnailRemoveButton/>
                    </Thumbnail>
                    <Thumbnail backgroundUrl="https://via.placeholder.com/600/24f355" style={{width:"70px", height:"70px"}}>
                        <ThumbnailRemoveButton/>
                    </Thumbnail>    
                </ThumbnailBox>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <input type="file" name="" id="userPhoto" multiple={true} style={{display:"none"}}/>
                    <label className="white-btn" style={{ margin:isMd === "md" && "0 auto",width:"100%", maxWidth:"320px", lineHeight: "52px"}} htmlFor="userPhoto">사진 첨부</label>
                    <span style={{ marginBottom: "20px", color:"#6A6A6A" }}>※ 사진 첨부는 최대 5개까지 가능합니다</span>
                    <button className="green-btn __md" style={{width: "100%",maxWidth: "320px"}}>작성하기</button>
                </div>
            </div>
        </div>
    );
};

export default UserNewsWrite;
