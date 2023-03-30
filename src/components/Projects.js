import {Container, Row, Col} from "react-bootstrap";

import misoimage from "../assets/img/miso.png";
import nourishNowimage from "../assets/img/nourishNow.png";
import battleshipimage from "../assets/img/battleship.png";
import avenirimage from "../assets/img/avenirmatch.png";
import liftmateimage from "../assets/img/liftmate.png";
import photosweep from "../assets/img/photosweep.png";

export const Projects = () => {
    return(
        <section className="project" id="projects">
            <Container>
                <div>
                    <h1>
                        Projects
                    </h1>
                </div>
                <Row>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={misoimage} alt="Miso" />
                            <div className="prog-txtx">
                                <h4>Miso</h4>
                                <h5>Won ‘Best Hack to Promote Female Empowerment within STEM’ at UofTHacks </h5>
                                <span className="span">Miso is an AI that detects sexism and toxicity in text messages and warns the sender of their behaviour. It can be integrated into Discord as a bot or used directly on the website
                                Implemented the Co:here Toxicity Detection API in our own custom machine learning model on Co:here
                                Using Python, Discord API, and JSON, to developed a Discord Bot that users can implement
                                 We hope to reduce misogyny within tech communities so that women feel more empowered and encouraged to join STEM!</span>
                                <a href="https://github.com/lyriao/Miso" target="_blank">
                                    <button>Github</button>
                                    <a href="https://devpost.com/software/miso" target="_blank">
                                        <button>Click to Learn More!</button>
                                    </a>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={nourishNowimage} alt="nourishNow" />
                            <div className="prog-txtx">
                                <h4>nourishNow</h4>
                                <h5>Won Second in 'Zero Hunger' at MapleHacks</h5>
                                <span>norishNow is an online website that utilizes machine learning, AI and React to bridge the gap in food disparity that women, infants, and children (WIC) face within the US. norishNow 
                                enables charity donors to visualize, predict, and encourage them to take action against food disparity within highly affected WIC communities.
                                Donors will be able to get a better understanding of what foods are necessary and make a bigger impact on the lives of WIC and hungry communities.</span>
                                <a href="https://github.com/lyriao/nourishNow" target="_blank">
                                    <button>Github</button>
                                    <a href="https://devpost.com/software/norishnow" target="_blank">
                                        <button>Click to Learn More!</button>
                                    </a>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={battleshipimage} alt="Battleship" />
                            <div className="prog-txtx">
                                <h4>Battleship</h4>
                                <span>Utilized model-view-controller architecture as well as industry-standard code-sharing platforms such as GitHub to create a group project based on Battleship for ICS-4U1
                                Implemented UX design through Figma and Java Swing programming to add real-time multiplayer features to the application
                                </span>
                                <a href="https://github.com/lyriao/Battleship" target="_blank">
                                    <button>Github</button>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                <div>
                    <h2>
                        Figma Projects
                    </h2>
                </div>
                <Row>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={avenirimage} alt="Avenir Match" />
                            <div className="prog-txtx">
                                <h4>Avenir Match</h4>
                                <span>Avenir Match is an intuitive app that allows employees and employers to match with each other in an unbiased selection process based solely on your competency.
                                Users can create a unique profile that features their skills, experiences, and personality anonymously. 
                                Then by partnering with various employers, recruiters will have access to the platform and be able to view each candidate’s profiles and filter through them for different positions. 
                                The user will then have a list of job applications that are appropriate for them and employees and employers alike can match or reject each other based on this information. 
                                </span>
                                <a href="https://www.figma.com/file/CKvFG40CAv2zSpG1yeaZS6/Avenir-Match?node-id=0%3A1&t=z1WVyFzet9be7itd-1" target="_blank">
                                    <button>Figma Link!</button>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={liftmateimage} alt="Lift Mate" />
                            <div className="prog-txtx">
                                <h4>Lift Mate</h4>
                                <span>An app interface designed for Lift Mate, a robot that traps your phone for a set period of time, and runs away if you try to get 
                                    your phone back before the time limit is up. Once the timer is finished, then the user will finally be able to utilize their phone again. 
                                    We created this product as a way to cure our procrastination, as it is a major issue among students especially, when we easily get distracted 
                                    by the apps and games that our glowing rectangle has to offer. </span>
                                <a href="https://www.figma.com/file/GJZTCq1ThhZDvW1TG5Cv7y/LIFTMATE?node-id=0%3A1&t=UZ6Lrbt4YCMZoguJ-1" target="_blank">
                                    <button>Figma Link!</button>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="prog-imgbox">
                            <img src={photosweep} alt="PhotoSweep" />
                            <div className="prog-txtx">
                                <h4>PhotoSweep</h4>
                                <span>This is PhotoSweep's website interface design. PhotoSweep is used to organize your photo album, as we are aware of how messy 
                                    it is able to get. Based on personal experiences, we decided to created a product that was simple, yet very practical. Users
                                    are able to input the set of photos that they would like to get cleaned, PhotoSweep will then filter through the blurry and 
                                    duplicate photos in order to determine which ones to keep. In the end, it was then ask the user to confirm the deletion of a
                                    set of photos, and users are able to go through those photos to see if they would still like to keep any.
                                </span>
                                <a href="https://www.figma.com/file/QyPzwC4cSjxD8g3UjhogK6/PhotoSweep?node-id=0%3A1&t=vVAU5ci7AoMsGhEA-1" target="_blank">
                                    <button>Figma Link!</button>
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}