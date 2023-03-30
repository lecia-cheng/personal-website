import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import headerImg from "../assets/img/parisday.JPG";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1200;

    useEffect(() => {
        let intervalId = setInterval(() =>{
            tick();
        }, delta)

        return () => { clearInterval(intervalId)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"Hi! I'm Lecia, a "}<span className="wrap">{text}</span></h1>
                        <p>I currently study Computer Science at the University of Western Ontario, and am starting a journey in the tech industry! I am currently looking for an Internship for this upcoming summer of 2023, please let me know if you are interested!</p>
                        <button onClick={() => console.log('connect')}>Let's connect :)</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/> 

                    </Col>
                </Row>
            </Container>
        </section>
    )
}