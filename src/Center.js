 import React, { Component } from "react";
 import Slider from 'react-slick';
import f1 from './i/f1.png';
import f2 from './i/f2.png';
import bn from './i/bn.png';
import vid from './i/vid.png';
import Ca from './Ca';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import To from "./To";
const set={
dots:true, infinite:true, speed:1000, slidesToscroll:1, slidesToShow:1,
    autoplay:true, autoResize:false,
    dotsClass:"slick-dots",
 arrows:false,
};
const seti={
dots:true, infinite:true, speed:1000, slidesToscroll:1, slidesToShow:4,
    autoplay:true, autoResize:false,
    dotsClass:"slick-dots",
 arrows:false,
};


const j1=require('./i/j/j1.jpg');
const j2=require('./i/j/j2.png');
const j3=require('./i/j/j3.jpg');
const j4=require('./i/j/j4.jpg');
const j5=require('./i/j/j5.jpg');
const j6=require('./i/j/j6.jpg');
const j7=require('./i/j/j7.jpg');
const j8=require('./i/j/j8.jpg');
const j9=require('./i/j/j9.jpg');
const j10=require('./i/j/j10.jpg');
const j11=require('./i/j/j11.jpg');
const j12=require('./i/j/j12.jpg');
const j13=require('./i/j/j13.jpg');
const j14=require('./i/j/j14.jpg');

const k1=require('./i/k/k1.jpg');
const k2=require('./i/k/k2.jpg');
const k3=require('./i/k/k3.jpg');
const k4=require('./i/k/k4.jpeg');
const k5=require('./i/k/k5.png');
const k6=require('./i/k/k6.jpg');
const k7=require('./i/k/k7.jpg');
const k8=require('./i/k/k8.jpg');
const k9=require('./i/k/k9.png');
const k10=require('./i/k/k10.jpg');
const k11=require('./i/k/k11.png');
const k12=require('./i/k/k12.jpg');
const k13=require('./i/k/k13.jpg');
const k14=require('./i/k/k14.jpeg');
const k15=require('./i/k/k15.jpeg');
const k16=require('./i/k/k16.jpeg');

const l1=require('./i/l/l1.png');
const l2=require('./i/l/l2.png');
const l3=require('./i/l/l3.png');
const l4=require('./i/l/l4.jpg');
const l5=require('./i/l/l5.jpg');
const l6=require('./i/l/l6.jpg');
const l7=require('./i/l/l7.jpg');
const l8=require('./i/l/l8.jpg');
const l9=require('./i/l/l9.jpg');
const l10=require('./i/l/l10.jpg');
const l11=require('./i/l/l11.jpg');
const l12=require('./i/l/l12.jpg');

const n1=require('./i/n/n1.png');
const n2=require('./i/n/n2.png');
const n3=require('./i/n/n3.png');
const n4=require('./i/n/n4.jpeg');
const n5=require('./i/n/n5.png');
const n6=require('./i/n/n6.jpg');
const n7=require('./i/n/n7.jpg');
const n8=require('./i/n/n8.jpg');
const n9=require('./i/n/n9.jpg');
const n10=require('./i/n/n10.jpg');
const n11=require('./i/n/n11.jpg');
const n12=require('./i/n/n12.jpg');
const n13=require('./i/n/n13.jpg');
const n14=require('./i/n/n14.jpg');
const n15=require('./i/n/n15.jpg');
const n16=require('./i/n/n16.jpg');
const n17=require('./i/n/n17.jpg');
const n18=require('./i/n/n18.jpg');
const n19=require('./i/n/n19.jpg');
const n20=require('./i/n/n20.png');
const n21=require('./i/n/n21.jpg');

const x1=require('./i/x/x1.jpg');
const x2=require('./i/x/x2.jpg');
const x3=require('./i/x/x3.jpg');
const x4=require('./i/x/x4.jpg');
const x5=require('./i/x/x5.jpg');
const x6=require('./i/x/x6.jpg');
const x7=require('./i/x/x7.jpg');
const x8=require('./i/x/x8.jpg');
const x9=require('./i/x/x9.jpg');
const x10=require('./i/x/x10.jpg');
const x11=require('./i/x/x11.jpg');
const x12=require('./i/x/x12.jpg');
const x13=require('./i/x/x13.jpg');
const x14=require('./i/x/x14.jpg');
const x15=require('./i/x/x15.jpg');
const x16=require('./i/x/x16.jpg');

const v1=require('./no/1550819060.png');
const v2=require('./no/1550819082.png');
const v3=require('./no/1550819235.bmp');
const v4=require('./no/1550819357.bmp');
const v5=require('./no/1550819425.bmp');
const v6=require('./no/1550819587.bmp');
const v7=require('./no/1550819632.bmp');
const v8=require('./no/1550819738.bmp');
const v9=require('./no/1550819823.bmp');
const v10=require('./no/1573199940.jpeg');
const v11=require('./no/1573200030.jpg');
const v12=require('./no/1573200327.jpg');
const v13=require('./no/1573200366.jpeg');
const v14=require('./no/1573200390.jpeg');
const v15=require('./no/1573200417.jpg');
const v16=require('./no/1573200449.jpg');
const v17=require('./no/1573200473.jpg');
const v18=require('./no/1550204090.png');
const v19=require('./no/1550204067.png');
const v20=require('./no/1550204045.png');
const v21=require('./no/1550204013.png');
const v22=require('./no/1550204154.png');
const v23=require('./no/1550204188.png');
const v24=require('./no/1550204214.png');
const v25=require('./no/1550204235.png');
const v26=require('./no/1550204248.png');
const v27=require('./no/1550204730.png');
const v28=require('./no/1550204750.png');
const v29=require('./no/1550204766.png');
const v30=require('./no/1550204782.png');
const v31=require('./no/1550204797.png');
const v32=require('./no/1550204812.png');
const v33=require('./no/1550225570.jpg');
const v34=require('./no/1550818418.bmp');

export default class Center extends Component {
 
render(){
	return(
<div class='s'>
<div class='nav'>
   <a class='fa active'  >HOME</a>
   <a class='fa' >ABOUT US <i class="arrow down"></i>
   <ul>
   <li ><a ><i class="arrow right"></i>About Campus</a></li>
   <li><a><i class="arrow right"></i>Chairman's Message </a></li>
   <li><a><i class="arrow right"></i>Executive director's Message </a></li>
   <li><a><i class="arrow right"></i>principal's Message </a></li>
   <li><a><i class="arrow right"></i>Governing Board</a></li>
     </ul>
     </a>
     <a class='fa'  >ACADEMICS</a>
<a class='fa'>COURSES OFFERED <i class="arrow down"></i>
   <ul>
   <li ><a class='ma' href="javascript:void(0);" ><i class="arrow right"></i>Under graduate
   <ul><li ><a href="javascript:void(0);" ><i class="arrow right"></i>Computer Science and Engg</a></li>
   <li><a href="javascript:void(0);"><i class="arrow right"></i>Electronics and Communication Engg</a></li>
   <li><a href="javascript:void(0);"><i class="arrow right"></i>Electricals and Electronics Engg</a></li>
   <li><a href="javascript:void(0);"><i class="arrow right"></i>Mechanical Engg </a></li>
   <li><a href="javascript:void(0);"><i class="arrow right"></i>Science and Humanities</a></li>
     </ul></a>
   </li>
   <li><a class='ma' href="javascript:void(0);"><i class="arrow right"></i>Post graduate
   <ul><li ><a><i class="arrow right"></i>Communication Systems</a></li>
   <li><a ><i class="arrow right"></i>Engineering Designs</a></li>
   <li><a ><i class="arrow right"></i>Computer Science & Engg.</a></li>
   <li><a><i class="arrow right"></i>Power System Engineering</a></li>
   <li><a ><i class="arrow right"></i>Master of Business Administration (MBA)</a></li>
     </ul></a>
   </li>
     </ul>
     </a>
     <a class='fa' >PLACEMENT<i class="arrow down"></i>
     <ul><li ><a><i class="arrow right"></i>Placement Details</a></li>
   <li><a ><i class="arrow right"></i>Center for Foreign Languages</a></li>
   <li><a><i class="arrow right"></i>Alumni</a></li>
     </ul></a>

     <a class='fa'  >RESEARCH<i class="arrow down"></i>
<ul><li ><a ><i class="arrow right"></i>NPTEL</a></li>
   <li><a ><i class="arrow right"></i>IPR</a></li>
   <li><a ><i class="arrow right"></i>Research & Develop</a></li>
     </ul></a>

     <a class='fa'>IQAC<i class="arrow down"></i>
<ul><li ><a ><i class="arrow right"></i>  HR Policy</a></li>
   <li><a><i class="arrow right"></i>IQAC</a></li>
     </ul></a>
     <a class='fa' >CAMPUS LIFE<i class="arrow down"></i>
<ul>
<li ><a  ><i class="arrow right"></i>NSS/YRC/RRC</a></li>
<li ><a  ><i class="arrow right"></i> Sports</a></li>
<li ><a  ><i class="arrow right"></i> Hostel</a></li>
<li ><a  ><i class="arrow right"></i>Transport</a></li>
<li ><a  ><i class="arrow right"></i>Gymnasium</a></li>
<li ><a  ><i class="arrow right"></i> Central Library</a></li>
   <li><a  ><i class="arrow right"></i>SAE - TN45 Motorsports</a></li>
   <li><a  ><i class="arrow right"></i>Clubs</a></li>
   <li><a  ><i class="arrow right"></i>Cafeteria</a></li>
   <li><a  ><i class="arrow right"></i>ATM</a></li>
     </ul></a>
   <a class='fa'  > NIRF</a>
   <a class='fa'  >ONLINE FEE PAYMENT</a>
   <a class='fa'  > CONTACTS</a>
   </div>
   <To/>
  <div class='wel'>
   <img  src={bn} alt="x" width="120" height="100" />
   <br/>
   <h2 style={{textAlign:"center",fontFamily:"lora serif",fontSize:"22px",fontHeight:"10px",letterSpacing:"1%"}}>
   WELCOME TO K.RAMAKRISHNAN COLLEGE OF ENGINEERING</h2>
   </div>
   <div class ="wa">
 <p style={{textAlign:"justify",fontSize:"16.5px",width:"92%"}}>Established in the year 2008 K. Ramakrishnan college of Engineering is a leading Engineering college
   affiliated to Anna University, Chennai, providing valuable courses. K.RAMAKRISHNAN COLLEGE OF ENGINEERING,
   TIRUCHIRAPALLI, is located in the famous temple town of Shri Samayapuram Mariyamman temple,
    on the sprawling campus of 30 acres with a panoramic and pleasant view.</p><br/>
    <div class='q'> <img style={{position:"absolute",left:"31%"}} src={f1} alt="e" width="150" height="120"/>
    <br/><h4 style={{position:"absolute",top:"48%",left:"42%",fontFamily:"lora serif"}} >VISION</h4>
    <p style={{position:"absolute",top:"65%",textAlign:"justify",
    fontSize:"16.5px"}}>" To achieve a prominent position among the top technical institutions "</p></div>
   <div class ='q1'>
     <img style={{position:"absolute",left:"31%"}} src={f2} alt="e" width="150" height="120"/><br/>
   <h4 style={{position:"absolute",top:"28%",left:"42%",fontFamily:"lora serif"}} >MISSION</h4>
    <p style={{position:"absolute",top:"39%",textAlign:"justify",fontSize:"16.5px"}}>"To bestow standard technical education par excellence through state of the art infrastructure, competent faculty and high ethical standards.
    <br/>To nurture research and entrepreneurial skills among students in cutting edge technologies.<br/>
    To provide education for developing high-quality professionals to transform the society."</p>
</div>
   </div>
   <div class='my'>
   <iframe width="350" height="380" src="https://www.youtube.com/embed/mx2G42nbL64"></iframe>
   </div>
   <div class='oo'><h2 style={{position:"absolute",top:"-1%",left:"23%"}}>RANK HOLDERS</h2>
   <div style={{position:"absolute",top:"13%",left:"3%",backgroundColor:"white",width:"700px",height:"300px"}}>
   <div style={{position:"absolute",top:"0%",right:"0%",backgroundColor:"white",width:"100%",height:"325px"}}>
    <Slider {...seti}>
    <img class='v1' src={v1} alt="z" width="250" height="210" />
    <img class='v2' src={v2} alt="z" width="250" height="210" />
    <img class='v3' src={v3} alt="z" width="500" height="210"/>
    <img class='v4' src={v4} alt="z" width="500" height="210" />
    <img class='v5' src={v5} alt="z" width="500" height="210" />
    <img class='v6' src={v6} alt="z" width="500" height="210"  />
    <img class='v7' src={v7} alt="z" width="500" height="210" />
    <img class='v8' src={v8} alt="z" width="500" height="210" />
    <img class='v9' src={v9} alt="z" width="500" height="210" />
    <img class='v1' src={v10} alt="z" width="250" height="210" />
    <img class='xi' src={v11} alt="z" width="250" height="210" />
    <img class='xi' src={v12} alt="z" width="250" height="210" />
    <img class='xi' src={v13} alt="z" width="250" height="210" />
    <img class='xi' src={v14} alt="z" width="250" height="210" />
    <img class='xi' src={v15} alt="z" width="250" height="210" />
    <img class='xi' src={v16} alt="z" width="250" height="210" />
    <img class='xi' src={v17} alt="z" width="250" height="210" />
    <img class='xi' src={v18} alt="z" width="250" height="210" />
    <img class='xi' src={v19} alt="z" width="250" height="210" />
    <img class='xi' src={v20} alt="z" width="250" height="210"/>
    <img class='xi' src={v21} alt="z" width="250" height="210" />
    <img class='xi' src={v22} alt="z" width="250" height="210" />
    <img class='xi' src={v23} alt="z" width="250" height="210" />
    <img class='xi' src={v24} alt="z" width="250" height="210" />
    <img class='xi' src={v25} alt="z" width="250" height="210" />
    <img class='xi' src={v26} alt="z" width="250" height="210"/>
    <img class='xi' src={v27} alt="z" width="250" height="210"/>
    <img class='xi' src={v28} alt="z" width="250" height="210"/>
    <img class='xi' src={v29} alt="z" width="250" height="210"/>
    <img class='xi' src={v30} alt="z" width="250" height="210"/>
    <img class='xi' src={v31} alt="z" width="250" height="210"/>
    <img class='xi' src={v32} alt="z" width="250" height="210"/>
    <img class='xi' src={v33} alt="z" width="250" height="210" />
    <img class='xi' src={v34} alt="z" width="250" height="210"/>
    </Slider>
   </div>
   </div>
   <h2 style={{position:"absolute",top:"-1%",right:"13%"}} >EVENT GALLERY</h2>
   <div style={{position:"absolute",top:"13%",right:"3%",backgroundColor:"white",width:"500px",height:"300px"}}>
    <Slider {...set}>
    <img class='xi' src={j1} alt="z" width="500" height="300" />
    <img class='xi' src={j2} alt="z" width="500" height="300" />
    <img class='xi' src={j3} alt="z" width="500" height="300"/>
    <img class='xi' src={j4} alt="z" width="500" height="300" />
    <img class='xi' src={j5} alt="z" width="500" height="300" />
    <img class='xi' src={j6} alt="z" width="500" height="300"  />
    <img class='xi' src={j7} alt="z" width="500" height="300" />
    <img class='xi' src={j8} alt="z" width="500" height="300" />
    <img class='xi' src={j9} alt="z" width="500" height="300" />
    <img class='xi' src={j10} alt="z" width="500" height="300" />
    <img class='xi' src={j11} alt="z" width="500" height="300" />
    <img class='xi' src={j12} alt="z" width="500" height="300" />
    <img class='xi' src={j13} alt="z" width="500" height="300" />
    <img class='xi' src={j14} alt="z" width="500" height="300" />
    </Slider>
   </div>
   </div>
   <div class='o1'>
<h2 style={{position:"absolute",top:"-1%",left:"23%"}}>OUR RECRUITERS</h2>
   <div style={{position:"absolute",top:"40%",left:"3%",borderWidth: "3px",
   border:"double",padding:"5px",
  borderColor:"black",backgroundColor:"white",width:"700px",height:"100px"}}>
<Slider dots={true} infinite={true} speed={1000} slidesToscroll={1} slidesToShow={4}
    autoplay={true} autoplaySpeed={3000} pauseOnHover={false}
 arrows={false} >
<img class="xi" src={n1} alt="kov" />
<img class="xi" src={n2} alt="kov" />
<img class="xi" src={n3} alt="kov"/>
<img class="xi" src={n4} alt="kov" />
<img class="xi" src={n5} alt="kov"/>
<img class="xi" src={n6} alt="kov"/>
<img class="xi" src={n7} alt="kov" />
<img class="xi" src={n8} alt="kov" />
<img class="xi" src={n9} alt="kov" />
<img class="xi" src={n10} alt="kov" />
<img class="xi" src={n11} alt="kov" />
<img class="xi" src={n12} alt="kov" />
<img class="xi" src={n13} alt="kov" />
<img class="xi" src={n14} alt="kov" />
<img class="xi" src={n15} alt="kov" />
<img class="xi" src={n16} alt="kov" />
<img class="xi" src={n17} alt="kov" />
<img class="xi" src={n18} alt="kov" />
<img class="xi" src={n19} alt="kov" />
<img class="xi" src={n20} alt="kov" />
<img class="xi" src={n21} alt="kov" />
</Slider>
   </div>
   <h2 style={{position:"absolute",top:"-1%",right:"16%"}} >ACTIVITIES</h2>
  <div class='emma'> <div style={{position:"absolute",top:"13%",right:"3%",backgroundColor:"white",width:"500px",height:"300px"}}>
    <Slider dots={true} infinite={true} speed={1000} slidesToscroll={5} slidesToShow={1}
    autoplay={true}
 arrows={false}
 appendDots={dots => <ul>{dots}</ul>}
      >
    <img class='xi' src={k1} alt="z" width="500" height="300" />
    <img class='xi' src={k2} alt="z" width="500" height="300" />
    <img class='xi' src={k3} alt="z" width="500" height="300"/>
    <img class='xi' src={k4} alt="z" width="500" height="300" />
    <img class='xi' src={k5} alt="z" width="500" height="300" />
    <img class='xi' src={k6} alt="z" width="500" height="300"  />
    <img class='xi' src={k7} alt="z" width="500" height="300" />
    <img class='xi' src={k8} alt="z" width="500" height="300" />
    <img class='xi' src={k9} alt="z" width="500" height="300" />
    <img class='xi' src={k10} alt="z" width="500" height="300" />
    <img class='xi' src={k11} alt="z" width="500" height="300" />
    <img class='xi' src={k12} alt="z" width="500" height="300" />
    <img class='xi' src={k13} alt="z" width="500" height="300" />
    <img class='xi' src={k14} alt="z" width="500" height="300" />
    </Slider>
   </div>
   </div>
   </div>
   <div class='o2'>
<h2 style={{position:"absolute",top:"-1%",left:"49%"}}>GALLERY</h2>
<div class='g-c'>
<img class='gi' src={x1} />
<img class='gi' src={x2} />
<img class='gi' src={x3} />
<img class='gi' src={x4} />
<img class='gi' src={x5} />
<img class='gi' src={x6} />
<img class='gi' src={x7} />
<img class='gi' src={x8} />
<img class='gi' src={x9} />
<img class='gi' src={x10} />
<img class='gi' src={x11} />
<img class='gi' src={x12} />
<img class='gi' src={x13} />
<img class='gi' src={x14} />
<img class='gi' src={x15} />
<img class='gi' src={x16} />

</div>
   </div>
   <div class='o3'>
   <h2 style={{position:"absolute",top:"-1%",left:"45%"}}>MEMBERSHIP</h2>
   <div style={{position:"absolute",top:"25%",right:"12.5%",
   borderWidth: "3px",
   border:"double",padding:"5px",
  borderColor:"black",backgroundColor:"white",width:"1000px",height:"200px"}}>
    <Slider dots={true} infinite={true} speed={1000} slidesToscroll={1} slidesToShow={5}
    autoplay={true}
    arrows={false}
 appendDots={dots => <ul>{dots}</ul>}
      >
    <img class='xi' src={l1} alt="z" width="150" height="200" />
    <img class='xi' src={l2} alt="z" width="150" height="200" />
    <img class='xi' src={l3} alt="z" width="150" height="200"/>
    <img class='xi' src={l4} alt="z" width="150" height="200" />
    <img class='xi' src={l5} alt="z" width="150" height="200" />
    <img class='xi' src={l6} alt="z" width="150" height="200"  />
    <img class='xi' src={l7} alt="z" width="150" height="200" />
    <img class='xi' src={l8} alt="z" width="150" height="200" />
    <img class='xi' src={l9} alt="z" width="150" height="200" />
    <img class='xi' src={l10} alt="z" width="150" height="200" />
    <img class='xi' src={l11} alt="z" width="150" height="200" />
    <img class='xi' src={l12} alt="z" width="150" height="200" />
    </Slider>
   </div>
   </div>
   </div>
		)
}
};