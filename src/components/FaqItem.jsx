import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const FaqItem = ({ header, body }) => {

    const [faqContent, setFaqContent] = useState(false);
    const handleClick = () => {
        setFaqContent(!faqContent);
    }


    return (
        <>
            <div className="accWrapper">
                {faqContent}
                <h3 onClick={handleClick}>
                    {header}
                    {faqContent ? <span><CloseIcon /></span> : <span><AddIcon /></span>}
                </h3>
                {faqContent ? <div className="accDesc">{body}</div> : ""}
            </div>
        </>
    )
}

export default FaqItem
