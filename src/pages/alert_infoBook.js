import React from "react";

function Alert_infoBook() {
  return (
    <div className="alert_infoBook">
      <div className="about" style={{ borderBottomStyle: 1, solid: "#ebe9ea" }}>
        "About this book"
      </div>
      <div
        className="info_content"
        style={{ boxSizing: "border-box", display: "block" }}
      >
        <div
          className="image_info"
          style={{ textAlign: "center", marginBottom: 10, display: "block" }}
        >
          <img src="./imo.png " alt="simple imge"></img>
        </div>
      </div>
      <div className="about-content">
        <div className="title-wrapper">
          <div
            style={{
              fontSize: 12,
              color: "#d8d5d5",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            Title
          </div>
          <div className="descrip"> explain the book title</div>
        </div>

        <div className="auther-wrapper">
          <div
            style={{
              fontSize: 12,
              color: "#d8d5d5",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            Auther
          </div>
          <div className="descrip">
            {" "}
            all the auther of books:auther1, auther2,...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert_infoBook;
