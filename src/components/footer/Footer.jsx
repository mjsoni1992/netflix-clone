import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Questions? Call <a href="tel:1-800-040-4015">1-800-040-4015</a></p>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Speed Test</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Speed Test</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Speed Test</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Speed Test</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="languageWrapper">
                            <div className="selectLanguageWrapper d-inline">
                                <span className="earthIcon"><LanguageIcon /></span>
                                <select className="languageSwitcher">
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                                <span className="selectDownIcon"><ArrowDropDownIcon /></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
