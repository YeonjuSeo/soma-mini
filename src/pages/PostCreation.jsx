import React, { useState } from "react";
import "../css/PostCreationPage.scoped.css";

const PostCreation = ({ setModalOn, addPost }) => {
  const [previewURL, setPreviewURL] = useState("add.png");
  const [text, setText] = useState("");

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="modal">
      <div className="bg" />
      <div className="modalBox">
        <img
          className="backBnt"
          src="back.png"
          onClick={() => {
            setModalOn(false);
          }}
        />
        <p className="modalTitle">새 게시물 만들기</p>
        <div className="line" />
        <div className="formBox">
          <div className="imageForm">
            <label className="input-file-button" for="fileInput">
              <img className="preview" src={previewURL} />
            </label>
            <input type="file" id="fileInput" onChange={handleFileOnChange} />
          </div>
          <div className="line2" />
          <div className="textForm">
            <textarea
              placeholder="문구 입력..."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <div className="line" />
            <button
              className="creationButton"
              onClick={() => {
                if (previewURL === "add.png") {
                  alert("이미지를 업로드 해주세요!");
                  return;
                }

                setModalOn(false);
                addPost(previewURL, text);
              }}
            >
              게시하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
