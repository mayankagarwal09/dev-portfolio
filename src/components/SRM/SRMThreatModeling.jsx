import React, {useState, useEffect, useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import {
    Container, Col, Row, ListGroup, Button,
} from 'react-bootstrap';
import Fade from 'react-awesome-reveal';
import {ThemeContext} from 'styled-components';
import rehypeRaw from 'rehype-raw';
import Header from '../Header';
import endpoints from '../../constants/endpoints';
import '../../css/about.css';

const source = {
    html: `
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c5{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c1{color:#ffffff;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c6{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c3{font-size:13pt;color:#ffffff;font-weight:700}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c6 doc-content"><p class="c0"><span class="c4"></span></p><p class="c2"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 601.70px; height: 390.67px;"><img alt="" src="/e-portfolio/images/srm_dfd_unit4_airport.png" style="width: 601.70px; height: 390.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c2"><span class="c5">Fig 1: Simplified DFD Level 0 for an International Airport in the USA</span></p><p class="c0"><span class="c4"></span></p><p class="c0"><span class="c4"></span></p><p class="c2"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 601.70px; height: 282.67px;"><img alt="" src="/e-portfolio/images/srm_attack_tree_unit4_airport.png" style="width: 601.70px; height: 282.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c0"><span class="c5"></span></p><p class="c0"><span class="c5"></span></p><p class="c2"><span class="c5">Fig 2: Attack tree for The International airport</span></p><p class="c0"><span class="c5"></span></p><p class="c0"><span class="c5"></span></p><p class="c0"><span class="c5"></span></p><p class="c0"><span class="c5"></span></p><p class="c0"><span class="c5"></span></p><p class="c2"><span class="c1">References</span></p><p class="c0"><span class="c7"></span></p><p class="c2"><span class="c3">Chawdhry, P.K., 2009, December. Risk modeling and simulation of airport passenger departures process. In </span><span class="c3">Proceedings of the 2009 Winter Simulation Conference (WSC)</span><span class="c1">&nbsp;(pp. 2820-2831). IEEE.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Shostack, A. (2018). Threat modeling : designing for security. Wiley &amp; sons ltd.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Spring, J., Hatleback, E., Householder, A., Manion, A. &amp; Shick, D. (2021) Time to Change the CVSS? IEEE Security &amp; Privacy, 19(2), pp.74&ndash;78.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c3">Ovchenkov, N.I. and Fadeev, R.S., 2020. Airport vulnerability model in civil aviation. </span><span class="c3">Security &amp; Future</span><span class="c3">, </span><span class="c3">4</span><span class="c1">(1), pp.3-5.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Threat Modelling CookBook (OWASP).</span></p></body></html>
`
};
const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.2em',
        fontWeight: 500,
        marginBottom: 20,
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

function SRMThreatModeling() {
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
            <Header title="SRM Threat Modeling Activity" />
            <div>
                <Container className="about-screen-body-container">
                    <Fade>
                        <Row>
                            <Col>
                                <div dangerouslySetInnerHTML={{ __html: source.html }} />
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </div>
        </>
    );
}

export default SRMThreatModeling;
