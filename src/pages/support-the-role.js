import * as React from "react";
import Header from "../components/Header";
import "../css/index.css";

const SupportTheRolePage = () => {
    return(
    <main className="pageStyles">
        <Header/>
        <h1 className="headingStyles">
            <span className="headingAccentStyles">Support: The Role</span>
        </h1>
        <p className="pageParagraphStyles">
        When we think about support, the first thing that comes to mind is customer support - a team dedicated to helping customers have the best possible experience. I think support is much more than that.
        </p>
        <p className="pageParagraphStyles">
        In my opinion, support encompasses all activities designed to provide assistance to any individual interacting with or building the product. The essence of support is delivering timely and accurate guidance, increasing the value its recipients draw from and deposit to the product.
        </p>
        <p className="pageParagraphStyles">
        A free-tiered user, junior engineer, head of product and even the CEO need some type of support mechanism in order to understand the product deeply enough to succeed. Traditional customer support teams are unsurprisingly well positioned to deliver this, yet, considered a cost center, they often lack the resources to fully cover customer needs. Extending beyond seems like a far-fetched dream. The first step in unlocking the full potential of support is acknowledging that everyone interacting with the product needs support.
        </p>
        <p className="pageParagraphStyles">
        Excellent support systems serve customers directly, by carefully orchestrating the experiences of situations when support is needed; and indirectly, by ensuring the product is built from a position of knowledge and deep understanding of the customer needs and hurdles.
        </p>
        <p className="pageParagraphStyles">
        Businesses today essentially understand this, and the common sense approach of having each department construct their own siloed support system yielded the industry standards we see today. My experience thought me that better-supported departments (and businesses!) outperform those with less support, resulting in discrepancies in overall product quality that can be difficult to detect and address. If all of these support systems were purposefully unified and continuously iterated upon, could industry standards be disrupted? I believe so.
        </p>
        <p className="pageParagraphStyles">
        Any role that collects, utilizes and distributes knowledge to help their end-user is inherently a support role. Faced with sets of tasks and procedures aimed at enhancing their user's experience, these support teams continuously improve quality and turnaround speed. While the subject matter can wildly differ within the scope of a single business, along with the suitable profile of an individual delivering a type of support needed - the underlying paradigm of excellence and continuous improvement remain constant.
        </p>
        <p className="pageParagraphStyles">
        Not aligning your support teams along a common set of principles, metrics, and philosophy is industry-standard - yet it led many to churn, stifled growth, the subpar situation we explored in the previous post and experienced more than once ourselves. On the other hand, the benefits of a unified approach to support could potentially lead to exponential growth.    
        </p>
    </main>
    )
}

export default SupportTheRolePage;

export const Head = () => <title>Support: The Role</title>