import React from "react";

function Status() {
    return(
        <section id="status">
        <h2>สถานะร้านค้า</h2>

        <ul className="weflix-status">
            <li className="card-large">ผู้ใช้ทั้งหมด
                <p>100</p>
            </li>
            <li className="card-large">สินค้าทั้งหมด
                <p>100</p>
            </li>
            <li className="card-large">สินค้าในสต๊อก
                <p>100</p>
            </li>
            <li className="card-large">ขายแล้วทั้งหมด
                <p>100</p>
            </li>
        </ul>
    </section>
    );
}

export default Status;