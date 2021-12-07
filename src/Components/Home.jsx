import React ,{useState}from 'react'
import Navigation from './Navigation'
import Mission from './RoutingComponent/Mission';
import Vision from './RoutingComponent/Vision'
import Values from './RoutingComponent/Values';
import Footer from "./Footer";
import {Data} from "./Data"
import Projects from './Projects';
const Home = () => {
    const[data1,setData1]= useState(true);
    const[data2,setData2]= useState(false);
    const[data3,setData3]= useState(false);

    const handleController1 =()=>{
        setData1(true);
        setData2(false);
        setData3(false);
    }
    const handleController2 =()=>{
        setData1(false);
        setData2(true);
        setData3(false);
    }
    const handleController3 =()=>{
        setData1(false);
        setData2(false);
        setData3(true);
    }
    return (
        <div>
            <Navigation />
            
            <div className="render_data_wrapper">
                    {
                        data1?<Vision /> : data2 ? <Mission /> :<Values />
                    }
            </div>
            <div className="component_links">
                <div onClick={handleController1}><span >Vision</span></div>
                <div onClick={handleController2}><span >Mission</span></div>
                <div onClick={handleController3}><span >Values</span></div>
                 
                 
            </div>   
            <section className="process">
                <h3>WORK CYCLE PHILOSOPHY</h3>
                <div className="process_d">
                {
                        Data.map((el,id)=>{
                            return(
                                <div className="carriage">
                                    <div className="icon">
                                        <img src={el.img} alt="image_icon" />
                                    </div>
                                    <div className="description">
                                        <h4>{el.title}</h4>
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                       
            </section>      
            <Projects />
            <Footer />      
        </div>
    )
}

export default Home;
