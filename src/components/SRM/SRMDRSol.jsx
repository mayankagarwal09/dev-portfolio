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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">.lst-kix_pm3k378bz9c0-6>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-6,decimal) ". "}.lst-kix_pm3k378bz9c0-5>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-5,lower-roman) ". "}ol.lst-kix_pm3k378bz9c0-5{list-style-type:none}ol.lst-kix_pm3k378bz9c0-4{list-style-type:none}ol.lst-kix_pm3k378bz9c0-7{list-style-type:none}ol.lst-kix_pm3k378bz9c0-6{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-2.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-2 0}.lst-kix_pm3k378bz9c0-0>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-0,decimal) ". "}ol.lst-kix_pm3k378bz9c0-1{list-style-type:none}.lst-kix_pm3k378bz9c0-4>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-4}.lst-kix_pm3k378bz9c0-8>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-8,lower-roman) ". "}ol.lst-kix_pm3k378bz9c0-0{list-style-type:none}ol.lst-kix_pm3k378bz9c0-2.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-2 0}ol.lst-kix_pm3k378bz9c0-3{list-style-type:none}ol.lst-kix_pm3k378bz9c0-6.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-6 0}.lst-kix_pm3k378bz9c0-7>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-7,lower-latin) ". "}ol.lst-kix_rrnv58vf6yxz-6.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-6 0}.lst-kix_rrnv58vf6yxz-8>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-8}ol.lst-kix_pm3k378bz9c0-2{list-style-type:none}.lst-kix_rrnv58vf6yxz-8>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-8,lower-roman) ". "}.lst-kix_pm3k378bz9c0-3>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-3}.lst-kix_rrnv58vf6yxz-7>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-7,lower-latin) ". "}.lst-kix_rrnv58vf6yxz-6>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-6,decimal) ". "}ol.lst-kix_pm3k378bz9c0-8{list-style-type:none}.lst-kix_rrnv58vf6yxz-2>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-2}ol.lst-kix_rrnv58vf6yxz-5.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-5 0}ol.lst-kix_pm3k378bz9c0-3.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-3 0}ol.lst-kix_pm3k378bz9c0-5.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-5 0}.lst-kix_pm3k378bz9c0-2>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-2}.lst-kix_rrnv58vf6yxz-1>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-1}ol.lst-kix_rrnv58vf6yxz-7{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-8{list-style-type:none}.lst-kix_rrnv58vf6yxz-7>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-7}.lst-kix_pm3k378bz9c0-5>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-5}ol.lst-kix_rrnv58vf6yxz-8.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-8 0}.lst-kix_pm3k378bz9c0-8>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-8}.lst-kix_rrnv58vf6yxz-4>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-4}ol.lst-kix_rrnv58vf6yxz-4.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-4 0}.lst-kix_pm3k378bz9c0-1>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-1}ol.lst-kix_rrnv58vf6yxz-3{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-4{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-5{list-style-type:none}.lst-kix_pm3k378bz9c0-7>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-7}ol.lst-kix_rrnv58vf6yxz-6{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-0{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-1{list-style-type:none}ol.lst-kix_rrnv58vf6yxz-2{list-style-type:none}.lst-kix_pm3k378bz9c0-6>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-6}ol.lst-kix_rrnv58vf6yxz-1.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-1 0}.lst-kix_rrnv58vf6yxz-5>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-5}ol.lst-kix_rrnv58vf6yxz-7.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-7 0}ol.lst-kix_pm3k378bz9c0-0.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-0 0}ol.lst-kix_pm3k378bz9c0-8.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-8 0}.lst-kix_pm3k378bz9c0-0>li{counter-increment:lst-ctn-kix_pm3k378bz9c0-0}.lst-kix_rrnv58vf6yxz-0>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-0,decimal) ". "}.lst-kix_rrnv58vf6yxz-3>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-3}.lst-kix_rrnv58vf6yxz-0>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-0}.lst-kix_rrnv58vf6yxz-1>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-1,lower-latin) ". "}.lst-kix_rrnv58vf6yxz-2>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-2,lower-roman) ". "}.lst-kix_rrnv58vf6yxz-6>li{counter-increment:lst-ctn-kix_rrnv58vf6yxz-6}.lst-kix_rrnv58vf6yxz-4>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-4,lower-latin) ". "}.lst-kix_rrnv58vf6yxz-3>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-3,decimal) ". "}.lst-kix_rrnv58vf6yxz-5>li:before{content:"" counter(lst-ctn-kix_rrnv58vf6yxz-5,lower-roman) ". "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}ol.lst-kix_pm3k378bz9c0-1.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-1 0}ol.lst-kix_pm3k378bz9c0-7.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-7 0}.lst-kix_pm3k378bz9c0-1>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-1,lower-latin) ". "}.lst-kix_pm3k378bz9c0-2>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-2,lower-roman) ". "}ol.lst-kix_rrnv58vf6yxz-0.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-0 0}ol.lst-kix_rrnv58vf6yxz-3.start{counter-reset:lst-ctn-kix_rrnv58vf6yxz-3 0}.lst-kix_pm3k378bz9c0-4>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-4,lower-latin) ". "}.lst-kix_pm3k378bz9c0-3>li:before{content:"" counter(lst-ctn-kix_pm3k378bz9c0-3,decimal) ". "}ol.lst-kix_pm3k378bz9c0-4.start{counter-reset:lst-ctn-kix_pm3k378bz9c0-4 0}ol{margin:0;padding:0}table td,table th{padding:0}.c3{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c5{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c0{margin-left:108pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c7{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c8{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c4{padding:0;margin:0}.c6{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c8 doc-content"><p class="c7"><span class="c1">Part 1:</span></p><p class="c7"><span class="c1">&nbsp;A Read Opara-Martins et al (2014) and Morrow et al (2021) and answer the following questions:</span></p><ol class="c4 lst-kix_pm3k378bz9c0-0 start" start="1"><li class="c3 li-bullet-0"><span class="c1">What are some of the main vendor lock-in issues the authors identify? How would you mitigate them?</span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-1 start" start="1"><li class="c5 li-bullet-0"><span class="c1">Vendors offer proprietary solutions, for example, AWS Fargate for container orchestration, API gateways, and databases which are not interoperable. This leads to the clients having large efforts and costs to migrate to another vendor.</span></li><li class="c5 li-bullet-0"><span class="c1">The complexity to create policies must also be created to securely migrate data.</span></li><li class="c5 li-bullet-0"><span class="c1">Business challenges, such as using a certain vendor as they have more leverage because of the large effort to migrate to another vendor when the contractual terms (Price) change.</span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-0" start="2"><li class="c3 li-bullet-0"><span class="c1">What are some of the security concerns with the modern cloud? How can these be mitigated?</span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-1 start" start="1"><li class="c5 li-bullet-0"><span class="c1">Shared Responsibility Model in Cloud Computing - This means the consumers are responsible for knowing and implementing the required security measures for the system. Not fully understanding the needs might cause insecure systems. - </span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-2 start" start="1"><li class="c0 li-bullet-0"><span class="c1">Train employees to understand the security needs with certifications.</span></li><li class="c0 li-bullet-0"><span class="c1">Plan to extract data from one CSP to another.</span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-1" start="2"><li class="c5 li-bullet-0"><span class="c1">Privileged user breaches- </span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-2 start" start="1"><li class="c0 li-bullet-0"><span class="c1">Implement Zero trust policy., </span></li><li class="c0 li-bullet-0"><span class="c1">Use source control and Infrastructure </span></li><li class="c0 li-bullet-0"><span class="c1">As Code to create the resources, as they become more transparent.</span></li></ol><ol class="c4 lst-kix_pm3k378bz9c0-1" start="3"><li class="c5 c6 li-bullet-0"><span class="c1"></span></li></ol><p class="c7"><span class="c1">Part B</span></p><p class="c7"><span class="c1">Create a high-level diagram of a DR solution for each of the following requirements. They should be created in PowerPoint, and you should include a basic description of each design. Be prepared to share and discuss your designs in this week&rsquo;s seminar.</span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><ol class="c4 lst-kix_rrnv58vf6yxz-0 start" start="1"><li class="c3 li-bullet-0"><span class="c1">RPO= 1 hr; RTO= 8 hrs; high availability (HA) required.</span></li></ol><p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 646.50px; height: 619.00px;"><img alt="" src="/e-portfolio/images/srm_unit_10_2.png" style="width: 646.50px; height: 619.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><ol class="c4 lst-kix_rrnv58vf6yxz-0" start="2"><li class="c3 li-bullet-0"><span class="c1">RPO= 24 hrs; RTO = 72 hrs; HA NOT required.</span></li></ol><p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 615.00px; height: 594.34px;"><img alt="" src="/e-portfolio/images/srm_unit_10_3.png" style="width: 615.00px; height: 594.34px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><p class="c2"><span class="c1"></span></p><ol class="c4 lst-kix_rrnv58vf6yxz-0" start="3"><li class="c3 li-bullet-0"><span class="c1">RPO= 5 mins; RTO= 1 hr; HA required.</span></li></ol><p class="c7"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 670.00px; height: 621.18px;"><img alt="" src="/e-portfolio/images/srm_unit_10_1.png" style="width: 670.00px; height: 621.18px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></body></html>
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

function SRMDRSol() {
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
            <Header title="SRM Unit 10 DR Solution" />
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

export default SRMDRSol;
