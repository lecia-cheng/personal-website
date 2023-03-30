import { Container, Row, Col} from "react-bootstrap";

export const Skills = () => {
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Java | Python | JavaScript | HTML | CSS | TypeScript | Figma | SQL | React
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}