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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c7{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c6{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c4{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c3{color:#ffffff;font-style:italic}.c2{height:11pt}.c5{color:#ffffff}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c4 doc-content"><p class="c1"><span class="c0">Industry 4.0 brought digital transformation to existing business models to automate tasks, increase energy efficiency, easily accessible systems, and use data to generate more business value (Lasi h. et al., 2014). This revolution has taken the industry into a new era dominated by digital technologies, i.e., the Internet of Things (IoT), Cloud Computing, and big data(Dalenogare, L.S et al., 2018, p.383).</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">However, these technologies have numerous challenges and risks that significantly impact their use of these advanced technologies. For instance, SMEs need to factor in considerable amounts of investments and increase by 50% in contrast to not implementing them (Raj, A. et al., 2020, p.107459).</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Also, the new technologies used in critical infrastructure pose a significant risk to public safety, which impacts economic, environmental, and social sustainability(Wisniewski M et al., 2022, p. 82718).</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Additionally, I agree with the post from Steve about the complexity of implementing these technologies being one of the biggest hurdles for many companies. As Steve mentioned, &quot;Over 30% of projects are canceled before completion,&quot; which is shockingly one of the considerable risks seen for a company.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Industry 4.0 comprises many great promises to bring positive changes in our society, but at the same time, many risks are present. Therefore the process of risk identification must be carried out, which helps to enhance the system with better preparation, prevent threats, and create a failure protection mechanism(Tupa, J. et al., 2017). Fig 1 below depicts an example of a simple process of risk analysis that can be conducted.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">In conclusion, risk analysis is an essential step toward utilizing the perks of Industry 4.0. To conduct an analysis, the analyst should first determine the scope and the asset, and then the risks are concerned. Consequently, the mitigations for the identified risks are then documented and implemented. The risk analysis can be either qualitative or quantitative, such as open fair, or be used together to assess the risk more detailedly (Spears, J. &amp; Barki, H, 2010, p.506). </span></p><p class="c1"><span class="c0">&nbsp;</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 526.02px; height: 327.53px;"><img alt="" src="/images/srm_d1_summary.jpg" style="width: 526.02px; height: 327.53px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Fig1: Risk analysis Process(Tupa, J. et al., 2017)</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><h2 class="c7" id="h.djrpu05hkfmh"><span class="c5 c6">References</span></h2><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Dalenogare, L.S., Benitez, G.B., Ayala, N.F. and Frank, A.G., 2018. The expected contribution of Industry 4.0 technologies for industrial performance. International Journal of production economics, 204, pp.383-394.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Lasi, H., Fettke, P., Kemper, H.G., Feld, T. and Hoffmann, M., 2014. Industry 4.0. Business &amp; information systems engineering, 6, pp.239-242.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Raj, A., Dwivedi, G., Sharma, A., de Sousa Jabbour, A.B.L. and Rajak, S., 2020. Barriers to adopting industry 4.0 technologies in the manufacturing sector: An inter-country comparative perspective. International Journal of Production Economics, 224, p.107546.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c5">Spears, J. &amp; Barki, H. (2010) User Participation in Information Systems Security Risk Management. </span><span class="c3">MIS Quarterly</span><span class="c0">&nbsp;34(3): 503.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Tupa, J., Simota, J. and Steiner, F., 2017. Aspects of risk management implementation for Industry 4.0. Procedia manufacturing, 11, pp.1223-1230.</span></p><p class="c1"><span class="c0">Wisniewski, M., Gladysz, B., Ejsmont, K., Wodecki, A. and Van Erp, T., 2022. Industry 4.0 solutions impacts on critical infrastructure safety and protection&ndash;a systematic literature review. IEEE Access.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p></body></html>
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

function SRMD1Summary() {
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
            <Header title="SRM Discussion 1 Summary Post" />
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

export default SRMD1Summary;
