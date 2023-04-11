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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ul.lst-kix_99fbr5ml5r3e-7{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-6{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-5{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-4{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-8{list-style-type:none}.lst-kix_ouxcdpdfhbgc-8>li:before{content:"\\0025a0  "}.lst-kix_ouxcdpdfhbgc-7>li:before{content:"\\0025cb  "}ul.lst-kix_99fbr5ml5r3e-3{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-2{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-1{list-style-type:none}ul.lst-kix_99fbr5ml5r3e-0{list-style-type:none}.lst-kix_99fbr5ml5r3e-2>li:before{content:"\\0025a0  "}.lst-kix_99fbr5ml5r3e-3>li:before{content:"\\0025cf  "}.lst-kix_99fbr5ml5r3e-0>li:before{content:"\\0025cf  "}.lst-kix_99fbr5ml5r3e-1>li:before{content:"\\0025cb  "}.lst-kix_99fbr5ml5r3e-4>li:before{content:"\\0025cb  "}.lst-kix_99fbr5ml5r3e-5>li:before{content:"\\0025a0  "}.lst-kix_ouxcdpdfhbgc-0>li:before{content:"\\0025cf  "}.lst-kix_99fbr5ml5r3e-6>li:before{content:"\\0025cf  "}.lst-kix_99fbr5ml5r3e-7>li:before{content:"\\0025cb  "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_ouxcdpdfhbgc-4>li:before{content:"\\0025cb  "}.lst-kix_ouxcdpdfhbgc-2>li:before{content:"\\0025a0  "}ul.lst-kix_ouxcdpdfhbgc-2{list-style-type:none}.lst-kix_ouxcdpdfhbgc-6>li:before{content:"\\0025cf  "}.lst-kix_99fbr5ml5r3e-8>li:before{content:"\\0025a0  "}ul.lst-kix_ouxcdpdfhbgc-3{list-style-type:none}ul.lst-kix_ouxcdpdfhbgc-0{list-style-type:none}.lst-kix_ouxcdpdfhbgc-1>li:before{content:"\\0025cb  "}.lst-kix_ouxcdpdfhbgc-5>li:before{content:"\\0025a0  "}ul.lst-kix_ouxcdpdfhbgc-1{list-style-type:none}ul.lst-kix_ouxcdpdfhbgc-6{list-style-type:none}ul.lst-kix_ouxcdpdfhbgc-7{list-style-type:none}ul.lst-kix_ouxcdpdfhbgc-4{list-style-type:none}ul.lst-kix_ouxcdpdfhbgc-5{list-style-type:none}.lst-kix_ouxcdpdfhbgc-3>li:before{content:"\\0025cf  "}ul.lst-kix_ouxcdpdfhbgc-8{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c9{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c8{color:#ffffff;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c11{padding-top:0pt;padding-bottom:3pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:26pt;font-family:"Arial";font-style:normal}.c13{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c15{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c5{padding-top:12pt;padding-bottom:12pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c6{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c12{font-size:13pt;color:#ffffff;font-weight:700}.c10{padding:0;margin:0}.c3{margin-left:36pt;padding-left:0pt}.c14{color:#ffffff}.c4{height:14pt}.c2{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c6 doc-content"><h2 class="c9" id="h.8x65a92jkryu"><span class="c14 c15">Case Study Chosen: 1) &nbsp; Right to be Forgotten - 2017</span></h2><p class="c11 title" id="h.r45n4ubmzqjj"><span class="c14">Introduction</span><span class="c7">&nbsp;</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">In this case, study a complaint from a Lithuanian national, where an article was published in the news about his/her termination of employment in a government department due to fraudulent activities. This event occurred around ten years earlier, around 2007, and these articles were being returned by a particular search engine when the individual&#39;s name was searched.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">Therefore, a complaint was made to delete the links from the search engine results. However, the search engine company argued that it was professional wrongdoing by someone in public administration and that it was in the public interest for the data processing to be justified.</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">This case study delves into the rights of data processing objection rights of both the processor and the data subject. It shows cases where the processor can process the data, even when the subject objects it. </span></p><h3 class="c1 c4" id="h.tzdmostpk968"><span class="c8"></span></h3><h3 class="c1" id="h.n1ahwuv35hal"><span class="c8">Which aspect of GDPR:</span></h3><p class="c1"><span class="c0">The case study touches on different parts of the GDPR directive, such as:</span></p><ul class="c10 lst-kix_99fbr5ml5r3e-0 start"><li class="c1 c3 li-bullet-0"><span class="c0">&sect; 21.(1) GDPR Right to Object - The right to object at any time to processing data concerning him and her. The &sect; 21. (1) GDPR is at focus as the individual whose data is being processed by the search engine wants it to be removed and objects to it for further processing.</span></li><li class="c1 c3 li-bullet-0"><span class="c0">&sect; 21.(6) GDPR Right to Object - Similarly, the processor also has the right to object when data processing is necessary for reasons of public interest. The firm owning the search engine uses this section in the GDPR directive to argue why it can still process the individual&#39;s data.</span></li><li class="c1 c3 li-bullet-0"><span class="c0">&sect; 17.(1) GDPR Right to erasure - The data subject has the right to erasure when the grounds mentioned in this article are met. The individual tries to use this section to get her data deleted immediately from the search engine to prevent further damage to her reputation.</span></li></ul><h3 class="c1 c4" id="h.auc2r1alfhxe"><span class="c8"></span></h3><h3 class="c1" id="h.m8stwu3u4lqn"><span class="c8">Resolution :</span></h3><p class="c1"><span class="c0">A thorough investigation of the data subject was carried out, where various documents and proofs were presented. These documents proved that the accusations made in the articles were not all true and that the termination of the employment was voluntary. This proof made the data presented in the article inaccurate and incomplete. Therefore, the data subject could use &sect; 17. (1) GDPR Right to erasure and all the data listed in the search engine had to be delisted. The verdict of this case went in favor of the data subject as he/she could delete their data. </span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><h3 class="c1" id="h.iow404pkeu3c"><span class="c12">Mitigations:</span></h3><p class="c1 c2"><span class="c0"></span></p><ul class="c10 lst-kix_ouxcdpdfhbgc-0 start"><li class="c1 c3 li-bullet-0"><span class="c0">A Data Protection Officer will be designated who is responsible for ensuring that the organization is providing the organization&#39;s compliance with GDPR (Regulation, G.D.P., 2018).</span></li><li class="c1 c3 li-bullet-0"><span class="c0">Strictly apply &sect;24(1). GDPR, where the organization considers the nature, scope, implement rights of the data subject and defines the purpose of the data processing (Akhlaghpour S et al., 2021, pg.201). </span></li><li class="c1 c3 li-bullet-0"><span class="c0">Strictly apply &sect;25(1) GDPR, where the organization implements all the necessary technical aspects to guarantee the rights provided by GDPR (Akhlaghpour S et al., 2021, pg.202).</span></li></ul><p class="c1 c2"><span class="c0"></span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1"><span class="c0">References:</span></p><p class="c1"><span class="c0">Akhlaghpour, S., Hassandoust, F., Fatehi, F., Burton-Jones, A. and Hynd, A., 2021. Learning from Enforcement Cases to Manage GDPR Risks. MIS Quarterly Executive, 20(3).</span></p><p class="c5"><span class="c0">Chapter 3 &ndash; Rights of the Data Subject (2018) General Data Protection Regulation (GDPR). Available at: https://gdpr-info.eu/chapter-3/ (Accessed: April 7, 2023). </span></p><p class="c5"><span class="c0">Case studies: Data Protection Commission (no date) Case Studies | Data Protection Commission. Available at: https://dataprotection.ie/en/pre-gdpr/case-studies#201701 (Accessed: April 7, 2023). </span></p><p class="c1"><span class="c0">Regulation, G.D.P., 2018. General data protection regulation (GDPR). Intersoft Consulting, Accessed on October, 24(1).</span></p><p class="c1 c2"><span class="c0"></span></p></body></html>
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

function SRMGDPRCaseStudy() {
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
            <Header title="SRM Unit 5 GDPR Case Study" />
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

export default SRMGDPRCaseStudy;
