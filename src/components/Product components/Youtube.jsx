import React from "react";
import Header from "../Home page components/Header";
import Footer from "../Home page components/Footer";

function Youtube(){
    return(
        <div>
            <Header />
            <section id="product-card">
    <div class="back">
        <p onClick={() => window.location.replace("/#product")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg> ย้อนกลับ</p>
    </div>

    <div class="productList">
        <img class="poster" alt="สินค้าnetflix" src="../images/youtube.png"/>
    </div>

    <div class="titleCard">
        <h2>Youtube Premium</h2>
        <ul class="shop-product sub-card">
            <li>
                <img class="product-pic" src="../images/ยูทูป30วัน.png" alt="netflix"/>
              
                <ul>Youtube Premium 30วัน
                    <li>30วัน 69บาท</li>
                </ul>
                <button>สั่งซื้อ</button>
            </li>
            <li>
                <img class="product-pic" src="../images/ยูทูป60วัน.png" alt="netflix"/>
                <ul>Youtube Premium 60วัน
                    <li>60วัน 138บาท</li>
                </ul>
               <button>สั่งซื้อ</button>
            </li>
        </ul>
    </div>
    </section>

    <Footer />
        </div>
    );
}

export default Youtube;