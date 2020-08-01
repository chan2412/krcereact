 import React, { Component } from "react";
 import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const set={
dots:true, infinite:true, speed:1000, slidesToscroll:1, slidesToShow:1,
    autoplay:true, autoResize:false,
    dotsClass:"slick-dots",
 arrows:false,
};
const i1=require('./i/i1.jpg');
const i2=require('./i/i2.jpg');
const i3=require('./i/i3.jpg');
const i4=require('./i/i4.jpg');
const i5=require('./i/i5.jpg');
const i6=require('./i/i6.jpg');
const i7=require('./i/i7.jpg');
const i8=require('./i/i8.jpg');
const i9=require('./i/i9.jpg');
const i10=require('./i/i10.jpg');
const i11=require('./i/i11.jpg');
const i12=require('./i/i12.jpg');
export default class To extends Component {
render(){
  return(
    <div class="oo1">
    <div style={{backgroundColor:"#f2982d",width:"25%", height:"100%",position:"absolute",top:"0%"}}>
         <h5>News &Events</h5>
     <marquee direction="up" class="mq" >
<p>For Online Admission - Contact</p><hr/>
<p>VIRTUAL INTERNATIONAL CONFERENCE ON RECENT TRENDS IN MATERIALS AND MANUFACTURING(VICRTMM 2020)</p><hr/>
<p>ECE DEPARTMENT ACHIEVEMENTS</p><hr/>
<p>VIRTUAL INTERNATIONAL CONFERENCE ON POWER INITIATIVE ICPI 2020</p><hr/>
<p>MBA ADMISSION 2020</p><hr/>
<p>PG (M.E) ADMISSION 2020</p><hr/>
<p>UG LATERAL ENTRY ADMISSION 2020</p><hr/>
<p>KRGI-ETMS (Eligible Test Merit Scholarship)2020</p><hr/>
<p>ADMISSION REGISTRATION FORM 2020-2021</p><hr/>
<p>STUDENT'S EXNORA OF KRCE CONDUCTED FACE PAINTING AND PHOTOGRAPHY COMPETITION ON 21 AND 22 FEB 2020</p><hr/>
<p>NATIONAL LEVEL CHAMPIONSHIP IN SOLAR CAR EVENT(SUVC) 2020</p><hr/>
<p>GRADUATION DAY 2020 LIVE STREAMING</p><hr/>
<p>VIRTUAL INTERNATIONAL CONFERENE ON POWER INITIATIVE ICPI 2002</p><hr/>
<p>EVS CLUB and Student's Exnora Organised a field visit at karaivetti BIRDS SANCTUARY on 13.2.2020</p><hr/>
<p>EVS CLUB Organised a Special Program for Students of TELC Ponnagar Aalayam Orphanage School, Ponmalaipatti on 20.2.2020</p><hr/>
<p>ACTIVITIES CONDUCTED ON BEHALF OF SWACHHTA PAKHWADA 2020.</p><hr/>
<p>Value Added Course conducted on Embedded Systems for 6 days in Department of ECE.</p><hr/>
<p>Department of ECE organized "Three days Entrepreneurship Awareness Camp" from 20 to 22 Jan 2020</p><hr/>
<p>Department of ECE organizes "Two day national level workshop and symposium" on 7 and 8 feb 2020</p><hr/>
<p>Department of ECE organized "Three days Entrepreneurship Awareness Camp" from 27 to 29 Jan 2020</p><hr/>
<p>ISTE INAUGURATION FUNCTION ON 15th FEBRUARY 2020</p><hr/>
<p>DST-NIMAT SPONSORED ENTERPRENEURSHIP AWARENESS CAMP</p><hr/>
<p>NOVEL CORONA VIRUS AWARENESS PROGRAM</p><hr/>
<p>CSE ACHIEVEMENT IN TCS ENQUODE 2019</p><hr/>
<p>EVS CLUB ORGANIZED ON EVENT ART FROM WASTE ON 20.9.19</p><hr/>
<p>INAUGURAL FUNCTION OF IEEE STUDENT BRANCH AND SOCIETY HELD ON 25.01.2020</p><hr/>
<p>NATIONAL LEVEL TECHNICAL SYMPOSIUM ON "ROBOTICS AND AUTOMATION"</p><hr/>
<p>CSE WORKSHOP PYDROID 2020</p><hr/>
<p>CERTIFICATE OF APPRECIATION IN IEEE CONFERENCE</p><hr/>
<p>TWO DAYS NATIONAL WORKSHOP ON ENERGY MANAGEMENT AND POWER QUALITY ISSUES ON RENEWABLE ENERGY SYSTEMS</p><hr/>
<p>EXCHANGE OF MOU FROM NIT,TIRUCHIRAPALLI DIRECTOR FOR SIEMENS CENTRE OF EXCELLENCE IN MANUFACTURING</p><hr/>
<p>ARIIA 2020 REPORT</p><hr/>
<p>KRCE HAS AWARDED WITH RESEARCH CENTRE FOR 3 DEPARTMENTS (EEE,ECE,MECH)</p><hr/>
<p>THE COLLEGE MANAGEMENT AND PRINCIPAL HAS TAKEN DENGUE FEVER PREVENTING MEASURES BY PROVIDING 'NILAVEMBU KASHAYAM' FOR ALL THE STUDENTS AND FACULTY MEMBERS.</p><hr/>
<p>ANNA UNIVERSITY ZONE XIV SPORTS ACHIEVEMENT - BASKET BALL AND TABLE TENNIS</p><hr/>
<p>MHRD - IIC ORGANISED INNOVATION DAY CAMPAIGN IN VIEW OF Dr.A.P.J.ABDUL KALAM BIRTH ANNIVERSARY AT OUR CAMPUS ON 15.10.2019.</p><hr/>
<p>B.RAKSHITHA OF III-B SECURED SECOND PLACE IN THE ELOCUTION COMPETITION HELD IN VIEW OF DR.A.P.J.ABDUL KALAM BIRTH ANNIVERSARY (INNOVATION DAY) AT INSTITUTION OF ENGINEERS (INDIA), TRICHY LOCAL CENTRE ON 15.10.2019.</p><hr/>
<p>MOU SIGNING CEREMONY BETWEEN TIDITSSIA TRICHY AND K.RAMAKRISHNAN COLLEGE OF ENGINEERING ON 14.09.2019.</p><hr/>
<p>MHRD IIC INDIA FIRST LEADERSHIP TALK SERIES ON 22.08.19 AT KRCE, TRICHY</p><hr/>
<p>EVS CLUB INAUGURAL FUNCTION HELD ON 22.08.2019.</p><hr/>
<p>ONE STUDENT ONE TREE PLANTATION CAMPAIGN ON 15.08.2019</p><hr/>
<p>ANNA UNIVERSITY ZONE XIV OVERALL CHAMPIONSHIP AWARD 2018 - 2019.</p><hr/>
<p>UGC(2f) and 12(b) status Achieved.</p><hr/>
<p>ANNA UNIVERSITY ACADEMIC PERFORMANCE APR/MAY & NOV/DEC 2018</p><hr/>
<p>AUTO CLUB SAE - TN45 MOTORSPORTS ACHIEVEMENTS</p><hr/>
    </marquee>
</div>
<div class="toi" style={{backgroundColor:"white",width:"75%", height:"100%",position:"absolute",top:"0%",
right:"0%"}}>
<Slider {...set}>
    <img class='xi' src={i1} alt="z" width="500" height="393"  />
    <img class='xi' src={i2} alt="z" width="500" height="393"  />
    <img class='xi' src={i3} alt="z" width="500" height="393"   />
    <img class='xi' src={i4} alt="z" width="500" height="393"   />
    <img class='xi' src={i5} alt="z" width="500" height="393"  />
    <img class='xi' src={i6} alt="z" width="500" height="393"  />
    <img class='xi' src={i7} alt="z" width="500" height="393" />
    <img class='xi' src={i8} alt="z" width="500" height="393" />
    <img class='xi' src={i9} alt="z" width="500" height="393" />
    <img class='xi' src={i10} alt="z" width="500" height="393" />
    <img class='xi' src={i11} alt="z" width="500" height="393" />
    <img class='xi' src={i12} alt="z" width="500" height="393" />
    </Slider>
</div>

  </div>);}};