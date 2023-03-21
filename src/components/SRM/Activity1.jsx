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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">.lst-kix_6zag7q52jp8r-6>li:before{content:"\\0025cf  "}.lst-kix_6zag7q52jp8r-7>li:before{content:"\\0025cb  "}.lst-kix_6zag7q52jp8r-4>li:before{content:"\\0025cb  "}.lst-kix_6zag7q52jp8r-5>li:before{content:"\\0025a0  "}.lst-kix_6zag7q52jp8r-8>li:before{content:"\\0025a0  "}.lst-kix_jx9epwr9frzl-7>li:before{content:"\\0025cb  "}.lst-kix_jx9epwr9frzl-8>li:before{content:"\\0025a0  "}.lst-kix_jx9epwr9frzl-6>li:before{content:"\\0025cf  "}ul.lst-kix_ou1wf37a8sqt-7{list-style-type:none}.lst-kix_jx9epwr9frzl-4>li:before{content:"\\0025cb  "}ul.lst-kix_ou1wf37a8sqt-6{list-style-type:none}ul.lst-kix_ou1wf37a8sqt-5{list-style-type:none}ul.lst-kix_ou1wf37a8sqt-4{list-style-type:none}ul.lst-kix_ou1wf37a8sqt-3{list-style-type:none}ul.lst-kix_ou1wf37a8sqt-2{list-style-type:none}.lst-kix_jx9epwr9frzl-5>li:before{content:"\\0025a0  "}.lst-kix_6zag7q52jp8r-0>li:before{content:"\\0025cf  "}.lst-kix_6zag7q52jp8r-1>li:before{content:"\\0025cb  "}ul.lst-kix_ou1wf37a8sqt-1{list-style-type:none}.lst-kix_jx9epwr9frzl-1>li:before{content:"\\0025cb  "}ul.lst-kix_ou1wf37a8sqt-0{list-style-type:none}.lst-kix_6zag7q52jp8r-2>li:before{content:"\\0025a0  "}.lst-kix_6zag7q52jp8r-3>li:before{content:"\\0025cf  "}.lst-kix_jx9epwr9frzl-2>li:before{content:"\\0025a0  "}.lst-kix_jx9epwr9frzl-3>li:before{content:"\\0025cf  "}ul.lst-kix_ou1wf37a8sqt-8{list-style-type:none}ul.lst-kix_bpi0juz27hoy-5{list-style-type:none}.lst-kix_bpi0juz27hoy-2>li:before{content:"\\0025a0  "}.lst-kix_bpi0juz27hoy-3>li:before{content:"\\0025cf  "}ul.lst-kix_bpi0juz27hoy-4{list-style-type:none}ul.lst-kix_bpi0juz27hoy-3{list-style-type:none}ul.lst-kix_bpi0juz27hoy-2{list-style-type:none}ul.lst-kix_bpi0juz27hoy-1{list-style-type:none}ul.lst-kix_bpi0juz27hoy-0{list-style-type:none}.lst-kix_bpi0juz27hoy-1>li:before{content:"\\0025cb  "}.lst-kix_bpi0juz27hoy-5>li:before{content:"\\0025a0  "}.lst-kix_bpi0juz27hoy-4>li:before{content:"\\0025cb  "}ul.lst-kix_bpi0juz27hoy-8{list-style-type:none}ul.lst-kix_bpi0juz27hoy-7{list-style-type:none}ul.lst-kix_bpi0juz27hoy-6{list-style-type:none}ul.lst-kix_bsbaf2la4eso-0{list-style-type:none}ul.lst-kix_bsbaf2la4eso-2{list-style-type:none}ul.lst-kix_bsbaf2la4eso-1{list-style-type:none}.lst-kix_bpi0juz27hoy-6>li:before{content:"\\0025cf  "}.lst-kix_bpi0juz27hoy-7>li:before{content:"\\0025cb  "}.lst-kix_bpi0juz27hoy-8>li:before{content:"\\0025a0  "}ul.lst-kix_6zag7q52jp8r-6{list-style-type:none}ul.lst-kix_6zag7q52jp8r-7{list-style-type:none}ul.lst-kix_6zag7q52jp8r-4{list-style-type:none}ul.lst-kix_6zag7q52jp8r-5{list-style-type:none}ul.lst-kix_6zag7q52jp8r-2{list-style-type:none}ul.lst-kix_6zag7q52jp8r-3{list-style-type:none}ul.lst-kix_6zag7q52jp8r-0{list-style-type:none}ul.lst-kix_6zag7q52jp8r-1{list-style-type:none}ul.lst-kix_bsbaf2la4eso-4{list-style-type:none}.lst-kix_bsbaf2la4eso-2>li:before{content:"\\0025a0  "}ul.lst-kix_bsbaf2la4eso-3{list-style-type:none}ul.lst-kix_bsbaf2la4eso-6{list-style-type:none}ul.lst-kix_bsbaf2la4eso-5{list-style-type:none}ul.lst-kix_bsbaf2la4eso-8{list-style-type:none}.lst-kix_bsbaf2la4eso-3>li:before{content:"\\0025cf  "}.lst-kix_bsbaf2la4eso-4>li:before{content:"\\0025cb  "}ul.lst-kix_bsbaf2la4eso-7{list-style-type:none}ul.lst-kix_6zag7q52jp8r-8{list-style-type:none}ul.lst-kix_jx9epwr9frzl-0{list-style-type:none}ul.lst-kix_jx9epwr9frzl-2{list-style-type:none}ul.lst-kix_jx9epwr9frzl-1{list-style-type:none}ul.lst-kix_jx9epwr9frzl-4{list-style-type:none}ul.lst-kix_jx9epwr9frzl-3{list-style-type:none}.lst-kix_bsbaf2la4eso-1>li:before{content:"\\0025cb  "}ul.lst-kix_jx9epwr9frzl-6{list-style-type:none}ul.lst-kix_jx9epwr9frzl-5{list-style-type:none}ul.lst-kix_jx9epwr9frzl-8{list-style-type:none}ul.lst-kix_jx9epwr9frzl-7{list-style-type:none}.lst-kix_bsbaf2la4eso-0>li:before{content:"\\0025cf  "}.lst-kix_bpi0juz27hoy-0>li:before{content:"\\0025cf  "}.lst-kix_ou1wf37a8sqt-7>li:before{content:"\\0025cb  "}.lst-kix_ou1wf37a8sqt-6>li:before{content:"\\0025cf  "}.lst-kix_ou1wf37a8sqt-8>li:before{content:"\\0025a0  "}.lst-kix_ou1wf37a8sqt-5>li:before{content:"\\0025a0  "}.lst-kix_jx9epwr9frzl-0>li:before{content:"\\0025cf  "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_bsbaf2la4eso-5>li:before{content:"\\0025a0  "}.lst-kix_bsbaf2la4eso-6>li:before{content:"\\0025cf  "}.lst-kix_ou1wf37a8sqt-0>li:before{content:"\\0025cf  "}.lst-kix_ou1wf37a8sqt-1>li:before{content:"\\0025cb  "}.lst-kix_ou1wf37a8sqt-3>li:before{content:"\\0025cf  "}.lst-kix_ou1wf37a8sqt-2>li:before{content:"\\0025a0  "}.lst-kix_ou1wf37a8sqt-4>li:before{content:"\\0025cb  "}.lst-kix_bsbaf2la4eso-8>li:before{content:"\\0025a0  "}.lst-kix_bsbaf2la4eso-7>li:before{content:"\\0025cb  "}ol{margin:0;padding:0}table td,table th{padding:0}.c5{background-color:#ffffff;color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Arial";font-style:normal}.c0{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c13{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:3pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c4{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c14{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:26pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{padding-top:12pt;padding-bottom:12pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c8{font-weight:400;text-decoration:none;vertical-align:baseline;font-family:"Arial";font-style:italic}.c9{font-weight:700;text-decoration:none;vertical-align:baseline;font-family:"Arial";font-style:normal}.c12{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c11{padding:0;margin:0}.c7{color:#ffffff;font-size:14pt}.c3{margin-left:36pt;padding-left:0pt}.c6{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c12 doc-content"><p class="c2 title" id="h.pv5ojbvo1ozj"><span class="c14">Activity</span></p><p class="c1 c6"><span class="c13"></span></p><p class="c1"><span class="c8 c7">How did the authors use both Qualitative and Quantitative assessment approaches? What benefits did each approach yield?</span></p><ul class="c11 lst-kix_bsbaf2la4eso-0 start"><li class="c1 c3 li-bullet-0"><span class="c4">Qualitative</span></li></ul><ul class="c11 lst-kix_bsbaf2la4eso-1 start"><li class="c0 li-bullet-0"><span class="c4">User interviews and people interactions</span></li></ul><ul class="c11 lst-kix_bsbaf2la4eso-0"><li class="c1 c3 li-bullet-0"><span class="c4">Quantitative</span></li></ul><ul class="c11 lst-kix_bsbaf2la4eso-1 start"><li class="c0 li-bullet-0"><span class="c4">Theoretical models used, i.e., Partial least squares (PLS), correlation matrix, and Average Variance Extracted.</span></li></ul><p class="c1 c6"><span class="c4"></span></p><p class="c1"><span class="c8 c7">What do the authors list as the advantages of involving users in the risk management process?</span></p><ul class="c11 lst-kix_jx9epwr9frzl-0 start"><li class="c1 c3 li-bullet-0"><span class="c4">More organizational awareness</span></li><li class="c1 c3 li-bullet-0"><span class="c4">Security risk management aligned more with business objectives and values.</span></li><li class="c1 c3 li-bullet-0"><span class="c4">Users are more accepting of the system built with the risks accepted than if there was no user participation (Spears &amp; Barki 2010, p. 509)</span></li></ul><p class="c1 c6"><span class="c4"></span></p><p class="c1"><span class="c8 c7">Based on the findings of the research,</span></p><p class="c1 c6"><span class="c8 c7"></span></p><p class="c1"><span class="c8 c7">How will the lack of user access affect the risk assessment you will carry out as part of your assessment?</span></p><ul class="c11 lst-kix_ou1wf37a8sqt-0 start"><li class="c1 c3 li-bullet-0"><span class="c4">Awareness in the organization would be limited as the users might be unaware of the existing processes and the risks involved.</span></li><li class="c1 c3 li-bullet-0"><span class="c4">Risk assessment might drift away from business objectives, causing financial loss to the organization. </span></li></ul><p class="c1 c6"><span class="c8 c7"></span></p><p class="c1"><span class="c7 c8">Will it affect the choice of Qualitative vs. Quantitative assessment methods you utilize?</span></p><ul class="c11 lst-kix_6zag7q52jp8r-0 start"><li class="c1 c3 li-bullet-0"><span class="c7">Yes, as quantitative assessment relies on more detailed data to use the different models to carry out a risk assessment, it would be harder to use quantitative methods without enough input leading to choosing qualitative risk analysis. (</span><span class="c7">Team, R.M. (2019)</span><span class="c4">)</span></li></ul><p class="c1 c6"><span class="c8 c7"></span></p><p class="c1 c6"><span class="c8 c7"></span></p><p class="c1"><span class="c8 c7">How might you mitigate any issues encountered?</span></p><ul class="c11 lst-kix_bpi0juz27hoy-0 start"><li class="c1 c3 li-bullet-0"><span class="c4">State your limitations according to the available data.</span></li><li class="c1 c3 li-bullet-0"><span class="c7">Have external audits of the risk analysis to avoid biases (</span><span class="c7">&#268;ular, M. et al., 2020, p.1014</span><span class="c7">)</span><span class="c4">.</span></li></ul><p class="c1 c6"><span class="c4"></span></p><p class="c1 c6"><span class="c4"></span></p><p class="c1"><span class="c7 c9">References</span></p><p class="c1 c6"><span class="c9 c7"></span></p><p class="c1"><span class="c7">&#268;ular, M., Slapni&#269;ar, S. and Vuko, T., 2020. The effect of internal auditors&rsquo; engagement in risk management consulting on external auditors&rsquo; reliance decision. </span><span class="c7">European Accounting Review</span><span class="c7">, </span><span class="c7">29</span><span class="c4">(5), pp.999-1020.</span></p><p class="c1 c6"><span class="c4"></span></p><p class="c1"><span class="c7">Spears, J.L. and Barki, H., 2010. User participation in information systems security risk management. </span><span class="c7">MIS quarterly</span><span class="c4">, pp.503-522.</span></p><p class="c1 c6"><span class="c4"></span></p><p class="c10"><span class="c7">Team, R.M. (2019) </span><span class="c7">Qualitative &amp; Quantitative Risk Assessment process</span><span class="c7">, </span><span class="c7">ComplianceBridge</span><span class="c4">. Available at: https://compliancebridge.com/quantitative-risk-assessment/ (Accessed: March 18, 2023). </span></p><p class="c1 c6"><span class="c5"></span></p></body></html>
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

function Activity1() {
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
            <Header title="SRM Activity 1" />
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

export default Activity1;
