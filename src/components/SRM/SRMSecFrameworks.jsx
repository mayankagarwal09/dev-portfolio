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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ul.lst-kix_iw43yz50j2qw-3{list-style-type:none}ul.lst-kix_iw43yz50j2qw-2{list-style-type:none}ul.lst-kix_iw43yz50j2qw-5{list-style-type:none}ul.lst-kix_iw43yz50j2qw-4{list-style-type:none}ul.lst-kix_iw43yz50j2qw-7{list-style-type:none}ul.lst-kix_iw43yz50j2qw-6{list-style-type:none}.lst-kix_tycnkfyytw0b-7>li:before{content:"\\0025cb  "}.lst-kix_iw43yz50j2qw-1>li:before{content:"\\0025cb  "}ul.lst-kix_iw43yz50j2qw-8{list-style-type:none}.lst-kix_tycnkfyytw0b-8>li:before{content:"\\0025a0  "}.lst-kix_iw43yz50j2qw-0>li:before{content:"\\0025cf  "}ul.lst-kix_tycnkfyytw0b-0{list-style-type:none}ul.lst-kix_iw43yz50j2qw-1{list-style-type:none}ul.lst-kix_iw43yz50j2qw-0{list-style-type:none}.lst-kix_tycnkfyytw0b-2>li:before{content:"\\0025a0  "}.lst-kix_iw43yz50j2qw-6>li:before{content:"\\0025cf  "}.lst-kix_tycnkfyytw0b-3>li:before{content:"\\0025cf  "}.lst-kix_iw43yz50j2qw-5>li:before{content:"\\0025a0  "}.lst-kix_tycnkfyytw0b-6>li:before{content:"\\0025cf  "}.lst-kix_iw43yz50j2qw-2>li:before{content:"\\0025a0  "}.lst-kix_tycnkfyytw0b-4>li:before{content:"\\0025cb  "}.lst-kix_iw43yz50j2qw-4>li:before{content:"\\0025cb  "}.lst-kix_tycnkfyytw0b-5>li:before{content:"\\0025a0  "}.lst-kix_iw43yz50j2qw-3>li:before{content:"\\0025cf  "}.lst-kix_tycnkfyytw0b-0>li:before{content:"\\0025cf  "}.lst-kix_iw43yz50j2qw-8>li:before{content:"\\0025a0  "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_tycnkfyytw0b-1>li:before{content:"\\0025cb  "}.lst-kix_iw43yz50j2qw-7>li:before{content:"\\0025cb  "}ul.lst-kix_tycnkfyytw0b-3{list-style-type:none}ul.lst-kix_tycnkfyytw0b-4{list-style-type:none}ul.lst-kix_tycnkfyytw0b-1{list-style-type:none}ul.lst-kix_tycnkfyytw0b-2{list-style-type:none}ul.lst-kix_tycnkfyytw0b-7{list-style-type:none}ul.lst-kix_tycnkfyytw0b-8{list-style-type:none}ul.lst-kix_tycnkfyytw0b-5{list-style-type:none}ul.lst-kix_tycnkfyytw0b-6{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c2{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c7{font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c9{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c6{margin-left:108pt;padding-left:0pt}.c4{margin-left:36pt;padding-left:0pt}.c0{padding:0;margin:0}.c5{color:#ffffff}.c8{height:11pt}.c10{margin-left:18pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c9 doc-content"><p class="c3 c8"><span class="c1"></span></p><p class="c3"><span class="c1">Activity</span></p><p class="c3"><span class="c1">Read the article by Barafort et al (2018) and the blog by Kirvan (2021). Review the websites listed in the blog and then answer the following questions:</span></p><p class="c3 c8"><span class="c1"></span></p><p class="c3"><span class="c1">Which of the frameworks do you think would be applicable to the following organisations:</span></p><ul class="c0 lst-kix_iw43yz50j2qw-0 start"><li class="c3 c4 li-bullet-0"><span class="c1">International bank</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1 start"><li class="c2 li-bullet-0"><span class="c1">Assumptions : </span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-2 start"><li class="c3 c6 li-bullet-0"><span class="c1">As an international bank, it also does business in the EU.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">The bank offers online payment services.</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1"><li class="c2 li-bullet-0"><span class="c1">PCI-DSS</span></li><li class="c2 li-bullet-0"><span class="c1">GDPR</span></li><li class="c2 li-bullet-0"><span class="c1">Country specific frameworks in which the bank is running</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-0"><li class="c3 c4 li-bullet-0"><span class="c1">Large hospital.</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1 start"><li class="c2 li-bullet-0"><span class="c1">Assumptions:</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-2 start"><li class="c3 c6 li-bullet-0"><span class="c1">It is not a school medical center.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">It provides medical treatment to the general public.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">The hospital is based in the EU.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">The hospital is also consuming data of US citizens</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1"><li class="c2 li-bullet-0"><span class="c1">GDPR</span></li><li class="c2 li-bullet-0"><span class="c1">HIPAA</span></li><li class="c2 li-bullet-0"><span class="c1">PCI- SSC (If it is the US, as people pay with credit cards)</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-0"><li class="c3 c4 li-bullet-0"><span class="c1">Large food manufacturing factory.</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1 start"><li class="c2 li-bullet-0"><span class="c1">Assumptions:</span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-2 start"><li class="c3 c6 li-bullet-0"><span class="c1">The factory is in the EU or serves customers there.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">Uses automated machines.</span></li><li class="c3 c6 li-bullet-0"><span class="c1">The production facility is connected to the internet </span></li></ul><ul class="c0 lst-kix_iw43yz50j2qw-1"><li class="c2 li-bullet-0"><span class="c1">GDPR</span></li><li class="c2 li-bullet-0"><span class="c1">PCI- DSS</span></li></ul><p class="c3 c8 c10"><span class="c7 c5"></span></p><p class="c3 c10"><span class="c5 c7">Recommendations</span></p><ul class="c0 lst-kix_tycnkfyytw0b-0 start"><li class="c3 c4 li-bullet-0"><span class="c1">A Data Protection Officer will be designated who is responsible for ensuring that the organization is providing the organization&#39;s compliance with GDPR (Regulation, G.D.P., 2018).</span></li><li class="c3 c4 li-bullet-0"><span class="c1">Strictly apply &sect;24(1). GDPR, where the organization considers the nature, scope, implement rights of the data subject and defines the purpose of the data processing (Akhlaghpour S et al., 2021, pg.201). </span></li><li class="c3 c4 li-bullet-0"><span class="c1">Strictly apply &sect;25(1) GDPR, where the organization implements all the necessary technical aspects to guarantee the rights provided by GDPR (Akhlaghpour S et al., 2021, pg.202).</span></li><li class="c3 c4 li-bullet-0"><span class="c1">Carry out risk assessment analysis when new technologies or processes are added to the system.</span></li><li class="c3 c4 li-bullet-0"><span class="c1">Conduct regular audits from internal and external agents to ensure compliance with the applied frameworks, i.e., GDPR, HIPAA, and PCII (Saeed, S, et.al, 2020, pg. 1460).</span></li></ul><p class="c3 c8"><span class="c1"></span></p><p class="c3 c8"><span class="c1"></span></p><p class="c3 c8"><span class="c7 c5"></span></p><p class="c3 c8"><span class="c7 c5"></span></p><p class="c3 c8"><span class="c7 c5"></span></p><p class="c3"><span class="c7 c5">References</span></p><p class="c3 c8"><span class="c1"></span></p><p class="c3"><span class="c1">Akhlaghpour, S., Hassandoust, F., Fatehi, F., Burton-Jones, A. and Hynd, A., 2021. Learning from Enforcement Cases to Manage GDPR Risks. MIS Quarterly Executive, 20(3).</span></p><p class="c3 c8"><span class="c1"></span></p><p class="c3"><span class="c1">Regulation, G.D.P., 2018. General data protection regulation (GDPR). Intersoft Consulting, Accessed on October, 24(1).</span></p><p class="c3 c8"><span class="c1"></span></p><p class="c3"><span class="c5">Saeed, S., Hamawandy, N.M. and Omar, R., 2020. Role of internal and external audit in public sector governance. A case study of Kurdistan regional government. </span><span class="c5">International Journal of Advanced Science and Technology</span><span class="c5">, </span><span class="c5">29</span><span class="c5">(8), pp.1452-1462.</span></p><p class="c3 c8"><span class="c1"></span></p></body></html>
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

function SRMSecFrameworks() {
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
            <Header title="SRM Unit 6 Security Frameworks" />
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

export default SRMSecFrameworks;
