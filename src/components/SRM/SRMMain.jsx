import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import Accordion from 'react-bootstrap/Accordion';
import {
  Container, Col, Row, ListGroup, Button,
} from 'react-bootstrap';
import Fade from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';
import rehypeRaw from 'rehype-raw';
import { Link } from 'react-router-dom';
import Header from '../Header';
import endpoints from '../../constants/endpoints';
import FallbackSpinner from '../FallbackSpinner';
import '../../css/about.css';
import '../../css/srm_bootstrap.css';
import { v4 as uuid } from 'uuid';

const styles = {
  introTextContainer: {
    margin: 50,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
    marginBottom: 50,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  header: {
    margin: '100px 0 50px 0',
  },
  unitText: {
    padding: '50px 0 0 0',
  },
};

function SRMMain() {
  const [data, setData] = useState(null);
  const theme = useContext(ThemeContext);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
      rehypePlugins={[rehypeRaw]}
    />
  );

  useEffect(() => {
    fetch(endpoints.srmMain, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const outcomeLength = data ? data.outcome.length : 3;
  return (
    <>
      <Header title="Security and Risk Management" />
      <div>
        <Container className="about-screen-body-container">
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    <h2 style={styles.header}>Module Learning Outcomes</h2>
                    <ListGroup as="li" numbered>
                      {data.outcome?.slice(0, outcomeLength).map((outcome) => (
                        <ListGroup.Item
                          key={uuid()}
                          style={{
                            backgroundColor: theme.background,
                            color: theme.color,
                          }}
                        >
                          {outcome}
                        </ListGroup.Item>
                      ))}
                      <a href={data.githubLink}>
                        <Button
                            key={uuid()}
                            style={styles.buttonStyle}
                            variant={'outline-' + theme.bsSecondaryVariant}
                            className="artefact-button"
                        >
                          Check out all artefacts
                        </Button>
                      </a>
                    </ListGroup>
                  </Col>
                </Row>
                <hr />
                <h3> Units in Details</h3>
                {data.units?.map((unit) => (
                 <Row>
                   <Col style={styles.introTextContainer}>
                     <Accordion
                       style={{
                        backgroundColor: theme.background,
                        color: theme.color,
                      }}
                      key={uuid()}
                     >
                       <Accordion.Item
                           eventKey={uuid()}
                           style={{
                            backgroundColor: theme.background,
                            color: theme.color,
                          }}
                           key={uuid()}
                       >
                         <Accordion.Header style={{
                           backgroundColor: theme.background,
                           color: theme.color,
                         }}>{unit.title}</Accordion.Header>
                         <Accordion.Body>
                           <div>
                             <h2 style={styles.header}>{unit.title}</h2>
                             <h4>Learning Outcomes</h4>
                             <ListGroup as="li" numbered>
                               {unit.outcome?.slice(0, outcomeLength).map((outcome) => (
                                   <ListGroup.Item
                                       key={outcome}
                                       style={{
                                         backgroundColor: theme.background,
                                         color: theme.color,
                                       }}
                                   >
                                     {outcome}
                                   </ListGroup.Item>
                               ))}
                             </ListGroup>
                             {unit.details?.map((detail) => (
                                 detail && (
                                     <div
                                         style={styles.unitText}
                                         key={detail.route}
                                     >
                                       {parseIntro(detail.activity)}
                                       {detail.route &&
                                           <Link to={detail.route}>
                                             <Button
                                                 key={detail.route}
                                                 style={styles.buttonStyle}
                                                 variant={'outline-' + theme.bsSecondaryVariant}
                                             >
                                               Learn More
                                             </Button>
                                           </Link>
                                       }
                                       {detail.downloadLink &&
                                           <a href={detail.downloadLink}>
                                             <Button
                                                 key={detail.route}
                                                 style={styles.buttonStyle}
                                                 variant={'outline-' + theme.bsSecondaryVariant}
                                             >
                                               Link
                                             </Button>
                                           </a>
                                       }
                                     </div>
                                 )
                             ))}
                           </div>
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>
                   </Col>
                 <hr />
                 </Row>
                ))}
                <Row>
                  <Col style={styles.introTextContainer}>
                    <h2 style={styles.header}>Reflections</h2>
                    {parseIntro(data.about)}
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

export default SRMMain;
