import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/style/Home.css';
import Map from '../../components/image/client/map.jpg';

class Home extends Component {
    render(){
        return(
            <div>
            <div>
                <div className="sectiontitle">
                    <h1 className="statistic">Successfull statistics about us</h1>
                    <p>What we have achieved so far</p>
                    <span className="headerLine"></span>
                </div>
                <div id="projectFacts" className="sectionclassName">
                    <div className="fullWidth eight columns ">
                        <div className="projectFactsWrap ">
                            <div className="item wow fadeInUpBig animated animated" data-number="2825" >
                            
                                <p id="number1" className="number">12</p>
                                <span></span>
                                <p className="mark">TRADEMARK</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="3524" >
                            
                                <p id="number2" className="number">55</p>
                                <span></span>
                                <p className="mark">PATENT</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="1542" >
                            
                                <p id="number3" className="number">359</p>
                                <span></span>
                                <p className="mark">DESIGN</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="3457" >
                            
                                <p id="number4" className="number">246</p>
                                <span></span>
                                <p className="mark"> LEGITATION</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectiontitle">
                <h1 className="statistic">About Us</h1>
                <span className="headerLine"></span>
            </div>

                <div className="about container">
                    <div className="row">
                    <div className="col-md-5">
                        <img className="resposive" src={Map} alt=""/>
                    </div>
                    <div className="col-md-7 justify" >
                        <p className="article">Al-otaishan for intellectual property & technology "aipt" is a law consulting and intellectual property company in Riyadh, Saudi Arabia, which has been actively cooperating with GCC , The Middle East, africa and asia.</p> 
                        <p className="article">Its director is Lawyer Mohammad Al-otaishan, who holds a master's degree in intellectual property from the University of Washington, USA, and Mr. Lawyer Mohammed, who previously worked as a legal counsel for The Saudi Basic Industries Company. "SABIC" While in the company, he made a significant contribution to ExxonMobil v. SABIC, which is the biggest issue in the region in terms of losses, and is also one of the most complex issues in the Middle East.</p> 
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <p className="article">Intellectual property as the asset of "IP" is an essential part of the company's capital and, moreover, the formation of intellectual property, acquisition, appreciation, transfer and protection is more difficult than tangible ordinary assets.</p>
                        <p className="article">aipt provides its customers with comprehensive services at competitive prices for all intellectual property rights including trademarks, patents, patent forms, domain names, copyrights and trade secrets. Our office is located in Riyadh, Saudi Arabia, and we provide intellectual property services in conjunction with huge brands, models and patent agents from all gcc countries, middle east, Africa and Asia. "aipt" has achieved rapid spread with its services to more than 30 jurisdictions in the GCC, Middle East, Africa and Asia.</p>
                        <p className="article">The company's employees have great experience in the insurance and protection of all intellectual property rights such as trademarks, the possibility of searching, registering, follow-up, implementation, filing of lawsuits, renewals, waivers, licenses, modifications, trademark observation and response to the office's activities.</p>
                        <p className="article">Patents: Patent search, patent advice, registration, execution, litigation, waivers, annual payments, licenses, modifications and responsiveness to the office's activities.</p>
                        <p className="article">Designes: The possibility of searching, registering, executing, filing lawsuits, waivers, annual payments, licenses, modifications and responding to the activities of the office. .</p>
                        <p className="article"> Company membership:
                            <ul>
                            <li>International Trademark Association "INTA"</li>
                            <li>International Association for the Protection of Intellectual Property "AIPPI"</li>
                            <li> MARQUES</li>
                            </ul>
                        </p>
                        <p className="article">Our main policy is to provide comprehensive domestic and foreign services to our clients with a high level of professionalism and high competitive rates. Please visit our website to learn more about the services of "aipt" and to learn about the fees and see the high professional levels.</p>
                        </div>
                    </div>  
                    </div>
            </div>
            </div>
        )       
    }
}
export default Home;
