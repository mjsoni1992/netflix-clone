import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";


const Header = () => {

    const { currentUser, signout } = useAuth();




    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/"><img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="NetFlix Logo" /></Link>
                    </div>
                    <div className="col-md-9">
                        <div className="languageWrapper text-right">
                            <div className="selectLanguageWrapper d-inline">
                                <span className="earthIcon"><LanguageIcon /></span>
                                <select className="languageSwitcher">
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                                <span className="selectDownIcon"><ArrowDropDownIcon /></span>
                            </div>
                            <div className="signInUpLinksWrapper d-inline">

                                {!currentUser ? <Link to="/signin"><button>Sign In</button> </Link> : <button onClick={signout}>Sign Out</button>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
