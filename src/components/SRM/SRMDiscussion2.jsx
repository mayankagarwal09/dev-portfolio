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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol.lst-kix_kdhc38pxdt6x-3.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-3 0}ol.lst-kix_kdhc38pxdt6x-5.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-5 0}ol.lst-kix_kdhc38pxdt6x-8.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-8 0}ol.lst-kix_kdhc38pxdt6x-0.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-0 0}.lst-kix_kdhc38pxdt6x-7>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-7}.lst-kix_kdhc38pxdt6x-3>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-3}.lst-kix_kdhc38pxdt6x-0>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-0,decimal) ". "}.lst-kix_kdhc38pxdt6x-1>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-1,lower-latin) ". "}ol.lst-kix_kdhc38pxdt6x-2.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-2 0}.lst-kix_kdhc38pxdt6x-0>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-0}.lst-kix_kdhc38pxdt6x-6>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-6}ol.lst-kix_kdhc38pxdt6x-7.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-7 0}.lst-kix_kdhc38pxdt6x-4>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-4,lower-latin) ". "}.lst-kix_kdhc38pxdt6x-5>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-5,lower-roman) ". "}.lst-kix_kdhc38pxdt6x-2>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-2}ol.lst-kix_kdhc38pxdt6x-4.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-4 0}.lst-kix_kdhc38pxdt6x-5>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-5}.lst-kix_kdhc38pxdt6x-2>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-2,lower-roman) ". "}.lst-kix_kdhc38pxdt6x-3>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-3,decimal) ". "}.lst-kix_kdhc38pxdt6x-6>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-6,decimal) ". "}.lst-kix_kdhc38pxdt6x-7>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-7,lower-latin) ". "}ol.lst-kix_kdhc38pxdt6x-3{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-2{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-1{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-0{list-style-type:none}.lst-kix_kdhc38pxdt6x-4>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-4}ol.lst-kix_kdhc38pxdt6x-6.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-6 0}ol.lst-kix_kdhc38pxdt6x-8{list-style-type:none}.lst-kix_kdhc38pxdt6x-1>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-1}ol.lst-kix_kdhc38pxdt6x-7{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-1.start{counter-reset:lst-ctn-kix_kdhc38pxdt6x-1 0}ol.lst-kix_kdhc38pxdt6x-6{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-5{list-style-type:none}ol.lst-kix_kdhc38pxdt6x-4{list-style-type:none}.lst-kix_kdhc38pxdt6x-8>li:before{content:"" counter(lst-ctn-kix_kdhc38pxdt6x-8,lower-roman) ". "}.lst-kix_kdhc38pxdt6x-8>li{counter-increment:lst-ctn-kix_kdhc38pxdt6x-8}ol{margin:0;padding:0}table td,table th{padding:0}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c3{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c3 doc-content"><p class="c2"><span class="c0">CVSS, according to its creators, offers a way to characterise vulnerabilities by reflecting their severity numerically from 0 to 10 (Spring et al.,2021, pg.74). This score can provide a baseline to do risk analysis for organisations and incident management teams as the potential impact of the vulnerability is documented according to the finding and according to Scarfone et al. 2009 the score is already in wide use in the information technology community.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">However, Spring et al. (2021) challenged the scoring methodology, arguing that the CVSS v3.0 needs to be revised, as the technique mainly depicts only the system&#39;s possible technical severity. As it is more focused on technical seriousness, it misses accounting for the contextual situation of the organisation and the design. For example, a CVE-2022-22965 (NVD, 2022), which can aid attackers in carrying out our remote code execution, has a baseline score of 9.8 critical. However, more than this score is needed to determine the risk present in the company, as it could be that the application is isolated from the internet and is only available internally. In this case, the risk for this vulnerability will not be as significant as critical because it is not as readily available in the public space, and the critical score cannot be justified.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Despite these issues, CVSS is still an excellent reference for a risk assessment for an organisation or a particular system. Knowing the technical vulnerabilities is also a big part of the assessment. Still, several improvements can be made to this methodology, especially the scoring formula must be redone and justified for empirical justifications, and the scoring must be assessed using human studies(Spring J et al. 2021, pg. 76). Alternatively, using action categories instead of integers as the score is preferable (Spring J et al. 2021, pg. 76). This form of having actions would make the method more transparent and allows to differentiate risk of a system given the context. Due to the fact the action points can be carefully chosen according to the systems design and risk factors are better identified.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">In conclusion, CVSS is an excellent baseline for assessing technical vulnerabilities. Yet, these scores should not be the only deciding factors when carrying out a risk assessment, as it misses crucial qualities like context evaluation of the system and intransparent formula. Therefore, these systems should be combined with other techniques to carry out risk assessments until an improved version of the CVSS is available.</span></p><p class="c1"><span class="c0"></span></p><p class="c1"><span class="c0"></span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">References</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">NVD (2022) CVE-2022-22965. Available at: https://nvd.nist.gov/vuln/detail/cve-2022-22965 (Accessed: April 22, 2023).</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Scarfone, K. and Mell, P., 2009, October. An analysis of CVSS version 2 vulnerability scoring. In 2009 3rd International Symposium on Empirical Software Engineering and Measurement (pp. 516-525). IEEE.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Spring, J., Hatleback, E., Householder, A., Manion, A., and Shick, D., 2021. Time to Change the CVSS? IEEE Security &amp; Privacy, 19(2), pp.74-78.</span></p><p class="c1"><span class="c0"></span></p><p class="c1"><span class="c0"></span></p></body></html>
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

function SRMDisscussion2() {
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
            <Header title="SRM Unit 6 CVSS Discussion Initial Post" />
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

export default SRMDisscussion2;
