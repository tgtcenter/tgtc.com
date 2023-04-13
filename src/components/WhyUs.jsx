import Card from "./Card";

import React from 'react'

export default function WhyUs() {
  return (
    <div className="why-us">
      <div class="why-head" data-aos="fade-up" data-aos-delay="300">
        <h1>Why T G T C</h1>
        <h3>हम टैली सीखते नहीं है, टैली के साथ खेलते हैं.</h3>
      </div>
      <div class="service">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
