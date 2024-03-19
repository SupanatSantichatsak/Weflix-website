import React from "react";

function Product(){

    return(
        <section id="product">
        <h2>สินค้าทั้งหมด</h2>
        <ul className="shop-product">
            <li>
                <img className="product-pic" src="./images/weflixจอมือถือ.png" alt="netflix"/>
              
                <ul>Netflix จอมือถือคอม
                    <li>1วัน 25บาท</li>
                    <li>7วัน 49บาท</li>
                    <li>30วัน 129บาท</li>
                    <li>60วัน 250บาท</li>
                </ul>
                <button onClick={() => window.location.replace("/Phone")}>ซื้อเลย <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg></button>
            </li>
            <li>
                <img className="product-pic" src="./images/weflixจอทีวี.png" alt="netflix"/>
                <ul>Netflix จอทีวี
                    <li>30วัน 149บาท</li>
                    <li>60วัน 290บาท</li>
                </ul>
                <button onClick={() => window.location.replace("/Television")}>ซื้อเลย <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg></button>
            </li>
            <li>
                <img className="product-pic" src="./images/weflixจอเมลส่วนตัว.png" alt="netflix"/>
                <ul>Netflix จอเมลส่วนตัว
                    <li>30วัน 189บาท</li>
                    <li>60วัน 370บาท</li>
                </ul>
                <button onClick={() => window.location.replace("/Mail")}>ซื้อเลย <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg></button>
            </li>
            <li>
                <img className="product-pic" src="./images/youtube.png" alt="netflix"/>
                <ul>Youtube Premium
                    <li>30วัน 69บาท</li>
                    <li>60วัน 138บาท</li>
                    <li>90วัน 207บาท</li>
                </ul>
                <button onClick={() => window.location.replace("/Youtube")}>ซื้อเลย <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg></button>
            </li>
        </ul>
    </section>
    );
}

export default Product;