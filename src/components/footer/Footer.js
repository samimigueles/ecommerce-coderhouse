import React from "react";

function Footer() {
  return (
    <div
      className="main-footer"
      style={{
        color: "brown",
        textAlign: "center",
        display: "inlineBlock",
        alignItems: "center",
      }}
    >
      <div className="footer-middle" />
      <div className="cointainer">
        <div className="row">
          {/* Column1 */}
          <div className="col-md-3 col-sm-6">
            <h4>RollTech</h4>
            <ul
              className="list-unstyled"
              style={{
                textAlign: "center",
                display: "inlineBlock",
                alignContent: "center",
              }}
            >
              <li>IoT</li>
              <li>Education</li>
              <li>Robotic</li>
              <li>Open Source</li>
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="footer.bottom">
          <p className="text.xs.center">
            &copy;{new Date().getFullYear()} Ecommerce App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
