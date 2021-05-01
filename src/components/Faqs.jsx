import React from 'react'
import faqsData from "../datas/faqs.json";
import FaqItem from "../components/FaqItem";
const Faqs = () => {



    return (
        <section className="faqsSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h2>Frequently Asked Questions</h2>
                        {faqsData.map((item) =>
                            <>
                                <FaqItem header={item.header} body={item.body} />
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
