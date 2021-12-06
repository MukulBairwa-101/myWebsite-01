import {BsFacebook,BsInstagram,AiFillYoutube,AiOutlineTwitter,BsLinkedin, BsYoutube} from "react-icons/all";

const Data = [{
    id:1,
    title:"Knowledge",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://www.manglamgroup.com/wp-content/uploads/2015/07/Knowledge.png",
},
{
    id:2,
    title:"Comprehension",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://manglamgroup.com/wp-content/uploads/2015/07/icon-about-6.png",
},
{
    id:3,
    title:"Analysis",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://www.manglamgroup.com/wp-content/uploads/2015/07/Analysis1.png",
},
{
    id:4,
    title:"Application",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://www.manglamgroup.com/wp-content/uploads/2015/07/Application.png",
},
{
    id:5,
    title:"Synthesis",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://www.manglamgroup.com/wp-content/uploads/2015/07/Synthesis.png",
},
{
    id:6,
    title:"Evaluation",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque. Quod illum eos temporibus quo.",
    img:"https://manglamgroup.com/wp-content/uploads/2015/07/icon-about-2.png",
}

];


const quickLinks=["Home","Projects","Corporate","Newsletter","Contact Us","Blog"];
const cities =["jaipur", "Alwar","Bikaner","Goa","Bhilwara","Udaipur"];
const socialLinks =[{
    id:1,
    icon:BsFacebook,
    link:"https://www.facebook.com/manglamgroup"
},
{
    id:2,
    icon:BsInstagram,
    link:"https://www.instagram.com/manglam_group/"
},
{
    id:3,
    icon:AiFillYoutube,
    link:"https://www.youtube.com/user/manglamgroup"
},
{
    id:4,
    icon:AiOutlineTwitter,
    link:"https://twitter.com/manglamgroup"
},
{
    id:5,
    icon:BsLinkedin,
    link:"https://www.linkedin.com/company/manglamgroupjaipur/"
}
]

const projects =[{
    id:1,
    src:"https://www.manglamgroup.com/wp-content/uploads/2021/09/Slide-1-700x400.jpg",
    txt:"Manglam’s Garden City | Premium 3BHK in Mansarovar Jaipur",
    link:"https://www.manglamgroup.com/portfolio/manglams-garden-city/"
},
{
    id:2,
    src:"https://www.manglamgroup.com/wp-content/uploads/2021/07/Woodland-Park-Bird-View-700x400.jpg",
    txt:"Manglam 14 Woodland Park",
    link:"https://www.manglamgroup.com/portfolio/woodland-park-mansarovar/"
},
{
    id:3,
    src:"https://www.manglamgroup.com/wp-content/uploads/2021/06/Neemrana-16-700x400.jpeg",
    txt:"Manglam’s Rambagh – Premium Integrated Township in Neemrana",
    link:"https://www.manglamgroup.com/portfolio/manglams-rambagh-premium-integrated-township-in-neemrana/"
},
{
    id:4,
    src:"https://www.manglamgroup.com/wp-content/uploads/2021/08/Park-Infinia-Elevation-2-700x400.jpeg",
    txt:"Manglam’s Park Infinia",
    link:"https://www.manglamgroup.com/portfolio/manglams-park-infinia/"
},]

export  { Data,socialLinks ,cities,quickLinks,projects};