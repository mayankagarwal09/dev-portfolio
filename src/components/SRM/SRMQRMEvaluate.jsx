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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">.lst-kix_8f9pbhp1u8c0-8>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-8}ol.lst-kix_8f9pbhp1u8c0-4.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-4 0}.lst-kix_8f9pbhp1u8c0-2>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-2}.lst-kix_8f9pbhp1u8c0-5>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-5}ol.lst-kix_8f9pbhp1u8c0-8.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-8 0}.lst-kix_8f9pbhp1u8c0-0>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-0}.lst-kix_8f9pbhp1u8c0-5>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-5,lower-roman) ". "}.lst-kix_8f9pbhp1u8c0-3>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-3}.lst-kix_8f9pbhp1u8c0-6>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-6,decimal) ". "}.lst-kix_8f9pbhp1u8c0-7>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-7,lower-latin) ". "}ol.lst-kix_8f9pbhp1u8c0-6.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-6 0}.lst-kix_8f9pbhp1u8c0-6>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-6}ol.lst-kix_8f9pbhp1u8c0-1.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-1 0}.lst-kix_8f9pbhp1u8c0-8>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-8,lower-roman) ". "}ol.lst-kix_8f9pbhp1u8c0-7{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-8{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-5.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-5 0}ol.lst-kix_8f9pbhp1u8c0-3{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-4{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-5{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-0.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-0 0}ol.lst-kix_8f9pbhp1u8c0-6{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-0{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-7.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-7 0}.lst-kix_8f9pbhp1u8c0-7>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-7}ol.lst-kix_8f9pbhp1u8c0-1{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-2{list-style-type:none}ol.lst-kix_8f9pbhp1u8c0-3.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-3 0}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_8f9pbhp1u8c0-4>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-4,lower-latin) ". "}ol.lst-kix_8f9pbhp1u8c0-2.start{counter-reset:lst-ctn-kix_8f9pbhp1u8c0-2 0}.lst-kix_8f9pbhp1u8c0-3>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-3,decimal) ". "}.lst-kix_8f9pbhp1u8c0-2>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-2,lower-roman) ". "}.lst-kix_8f9pbhp1u8c0-4>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-4}.lst-kix_8f9pbhp1u8c0-1>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-1,lower-latin) ". "}.lst-kix_8f9pbhp1u8c0-1>li{counter-increment:lst-ctn-kix_8f9pbhp1u8c0-1}.lst-kix_8f9pbhp1u8c0-0>li:before{content:"" counter(lst-ctn-kix_8f9pbhp1u8c0-0,decimal) ". "}ol{margin:0;padding:0}table td,table th{padding:0}.c3{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c1{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c9{padding-top:14pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c4{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c6{margin-left:108pt;padding-left:0pt}.c5{padding:0;margin:0}.c8{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c10 doc-content"><p class="c4 c8"><span class="c0"></span></p><h4 class="c9" id="h.ypuicyzctbtr"><span class="c2">Activity</span></h4><p class="c4"><span class="c0">Part A</span></p><p class="c4"><span class="c0">Read Goerlandt et al (2017), Hugo et al (2018) and &Ccedil;elikbilek &amp; T&uuml;ys&uuml;z (2020) and answer the following questions:</span></p><ol class="c5 lst-kix_8f9pbhp1u8c0-0 start" start="1"><li class="c3 li-bullet-0"><span class="c0">How do Goerlandt et al (2017) suggest that the validity of QRA approaches can be validated? What did they posit was the most effective approach?</span></li></ol><p class="c4"><span class="c0">&nbsp; &nbsp; &nbsp; &nbsp; Goerlandt et al. (2017) states the possible methods of QRA validation</span></p><ol class="c5 lst-kix_8f9pbhp1u8c0-1 start" start="1"><li class="c1 li-bullet-0"><span class="c0">Complete Benchmark exercise</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Compare with parallel analysis on complete parts of the same system.</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1" start="2"><li class="c1 li-bullet-0"><span class="c0">Partial benchmark exercise -</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Compare with parallel analysis on some parts of the same system.</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1" start="3"><li class="c1 li-bullet-0"><span class="c0">Reality check -</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Comparison of the system under analysis with existing system to learn from them.</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1" start="4"><li class="c1 li-bullet-0"><span class="c0">Independent peer review - </span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Examines the Output of the QRA.</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1" start="5"><li class="c1 li-bullet-0"><span class="c0">Quality assurance-</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Examines the process of the QRA.</span></li></ol><p class="c4"><span class="c0">According to Goerlandt et al (2017) Quality assurance is the most effective approach to validate QRA amongst the methods proposed. As in this approach, the process, i.e. how the data is collected, sources of data, and assumptions of data, are checked. &nbsp;According to the author, these checks would reduce the number of deficiencies in analysis. Quality assurance hence focuses on improving the assessment process and setting more guidelines than the other approaches. </span></p><p class="c4"><span class="c0">In contrast, other approaches are less reliable as the guidelines between teams may vary across the teams creating discrepancies in the validation.</span></p><ol class="c5 lst-kix_8f9pbhp1u8c0-0" start="2"><li class="c3 li-bullet-0"><span class="c0">Which techniques did Hugo et al (2018) should be applied to project management? What were their recommendations to increase the use of QR analysis in Projects?</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1 start" start="1"><li class="c1 li-bullet-0"><span class="c0">A paper by Hugo et al. (2018) recommends using the Monte Carlo simulation technique to project management.</span></li><li class="c1 li-bullet-0"><span class="c0">Recommendations:</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-2 start" start="1"><li class="c4 c6 li-bullet-0"><span class="c0">Improve an individual&#39;s competence through more training and exposure towards quantitative analysis and its tools.</span></li><li class="c4 c6 li-bullet-0"><span class="c0">Improve the organisations maturity levels by spending more time and effort defining core processes required for the analysis.</span></li><li class="c4 c6 li-bullet-0"><span class="c0">Have more resources to carry out the risk management. </span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-0" start="3"><li class="c3 li-bullet-0"><span class="c0">The last paper reviews various Multi-criteria decision methods (MCDMs) and considered the relative accuracy and validity of the techniques. Which did they find was the most accurate of the methods compared? What were the failings of the general TOPSIS approach? (TOPSIS is used to choose the best positive alternative by ranking)</span></li></ol><ol class="c5 lst-kix_8f9pbhp1u8c0-1 start" start="1"><li class="c1 li-bullet-0"><span class="c0">use weighted Euclidean distances in the aggregation rather than using the weighted decision matrix</span></li><li class="c1 li-bullet-0"><span class="c0">Topsis method with the different ranking index used</span></li><li class="c1 li-bullet-0"><span class="c0">Euler distance instead of Euclidean distance</span></li><li class="c1 li-bullet-0"><span class="c0">Problem: If the data is not spread out in a vertical linear line along the &nbsp;negative ideal solution to the positive ideal solution</span></li></ol><p class="c4 c8"><span class="c0"></span></p><p class="c4 c8"><span class="c7"></span></p></body></html>
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

function SRMQRMEvaluate() {
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
            <Header title="SRM Unit 8 QRM Evaluation" />
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

export default SRMQRMEvaluate;
