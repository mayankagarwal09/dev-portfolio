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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c7{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:italic}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c4{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c5{color:#ffffff;font-size:12pt}.c6{font-style:italic}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c4 doc-content"><p class="c2"><span class="c1">As already discussed, the CVSS framework is a remarkable tool that associates a severity score to known IT vulnerabilities. It has certain limitations due to the approach to calculating the scores being intransparent and subjective (Gallon, L., 2011). </span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">My initial suggestion towards improving the use of CVSS by applying action points (Spring, J. et al. 2021) in addition to the CVSS score might not be enough after hearing second opinions from my peers. In the discussion, Stella indicated that just using action points would still make the decision subjective, and the single use of this method will not change the limitations of subjectivity by a more significant factor. I agree with her on this statement that another solution must be used.</span></p><p class="c2"><span class="c1">&nbsp;</span></p><p class="c2"><span class="c1">As a possible solution, (Bol&iacute;var, H et al. 2019) shows for ranking the vulnerabilities calculated using CVSS 3.1 with the help of the multi-criteria decision-making (MCDM) technique, i.e. TOPSIS. Utilising TOPSIS, the vulnerabilities get the best and worst case and the corresponding weights that can be used for the decision matrix ranking the most critical vulnerabilities. This method will allow us to prioritise which vulnerabilities are more essential in the organisation and overcome the subjective limitations of using CVSS alone. Therefore, a quantitative analysis of the vulnerabilities can be done to get an objective result to make a better decision. </span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">In conclusion, CVSS is an excellent tool for understanding vulnerability, but its limitations and lack of contextual factors can lead to inaccurate judgments. Hence, it is crucial to consider an alternative framework or complement the CVSS framework with quantitative analysis techniques like MCDM or any other framework to analyse the system comprehensively.</span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">References</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c5">Bol&iacute;var, H., Parada, H.D.J., Roa, O. and Velandia, J., 2019, October. Multi-criteria decision making model for vulnerabilities assessment in cloud computing regarding common vulnerability scoring system. In </span><span class="c3">2019 Congreso Internacional de Innovaci&oacute;n y Tendencias en Ingenieria </span></p><p class="c2"><span class="c5 c6">(CONIITI)</span><span class="c1">&nbsp;(pp. 1-6). IEEE.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c5">Gallon, L., 2011, February. Vulnerability discrimination using cvss framework. In </span><span class="c5 c6">2011 4th IFIP International Conference on New Technologies, Mobility and Security</span><span class="c1">&nbsp;(pp. 1-6). IEEE.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Spring, J., Hatleback, E., Householder, A., Manion, A., and Shick, D., 2021. Time to Change the CVSS? IEEE Security &amp; Privacy, 19(2), pp.74-78.</span></p><p class="c0"><span class="c7"></span></p></body></html>
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

function SRMD2Summary() {
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
            <Header title="SRM Discussion 2 Summary Post" />
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

export default SRMD2Summary;
