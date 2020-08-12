import React from 'react'
import style from 'styled-components';

function Footer() {
    return (
        <div className="main-footer" style={{color: 'brown'}}>
            <div className = "footer-middle" />
            <div className="cointainer">
                <div className="row">
                    {/* Column1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Some Text</h4>
                        <ul className="list-unstyled">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Some Text</h4>
                        <ul className="list-unstyled">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Some Text</h4>
                        <ul className="list-unstyled">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>
                    </div>
                    {/* Column4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Some Text</h4>
                        <ul className="list-unstyled">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
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
    )
}

export default Footer;

/* const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark)
}


`; */