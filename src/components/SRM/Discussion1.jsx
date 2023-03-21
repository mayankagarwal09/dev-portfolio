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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c2{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c3{padding-top:20pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c4{background-color:#121212;max-width:451.3pt;padding:72pt 72pt 72pt 72pt}.c1{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c4 doc-content"><p class="c0"><span class="c2">The fourth industrial revolution, or Industry 4.0, is human society&#39;s 4th generational industrial advancement. This evolution is transforming business models with technologies that can provide enormous growth and innovation (Bai, c. et al., 2020, p.2). </span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Industry 4.0 includes new technologies like Cloud computing, the Internet of Things (IoT), and Big data but is not limited to it (Kovait&#279;, K. et al. 2019, p.380). We can see the use of cloud computing in our daily lives, i.e., online shopping and social media. For example, cloud computing is a business approach to selling IT services to conveniently share the network without owning any infrastructure (e.g., servers, storage). This model has allowed many businesses to start with less pre-purchase due to the pay-for-use model (Atobishi T, et al., 2018, p.11). Similarly, Big data is also a new concept where massive amounts of data are used to perform effective analysis to generate business value, i.e., user-based targeted advertisements (Atobishi T et al., 2018, p.13).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">These technologies have brought significant changes to our society. However, they require more attention and evaluation as there are many risks to business models utilizing the new technologies from industry 4.0 (Kovait&#279;, K. et al. 2019, p.381). For instance, the wide use of the cloud providers such as Amazon web services and Azure can tightly couple the financial and technological decisions, as any changes in their system affect the business directly, making them less flexible (Tamvada J, 2022, p.3), thus creating a business risk. Furthermore, it can also create risk on the technical side as the system&#39;s complexity rises significantly, making it more prone to failure (Tamvada J, 2022, p.3).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">In 2019, Facebook, a heavy user of AWS cloud computing services, faced </span></p><p class="c0"><span class="c2">a significant data breach exposing 530 million users&#39; data. This event caused Facebook to pay a massive fine of $5 billion to the US federal government as a settlement which is a significant legal risk(Bowman, E. (2021)).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Another example is a DDoS attack executed by hacked IoT devices known as Mirai Botnet. This botnet attack carried out a DDoS attack from multiple hacked devices and took down several major websites like CNN, Netflix, and Twitter(Uberoi, A. (2022)).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Despite the various risks, industry 4.0 is now a reality, and its implementation is used in various processes in the industry to achieve high efficiency. It is also used in susceptible areas such as healthcare industries providing consumers with easy access to its services (Badri, A. et al., 2018, p.410). As significant changes are implemented, previously implemented preventive measures will be outdated and present different risks to the existing business. Therefore the use of industry 4 technologies will be more ever present in our society. </span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">The authors Badri, A., Boudreau-Trudel, B. and Souissi, A.S., 2018 also agree with the view shared by Kovait&#279;, K. and Stankevi&#269;ien&#279;, J. (2019) and dive more into the incorporation of industry 4 technologies in a sensitive sector like healthcare.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0 c1"><span class="c2"></span></p><h1 class="c3" id="h.ecdhkwhqtc28"><span class="c2">References</span></h1><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Bai, C., Dallasega, P., Orzes, G. and Sarkis, J., 2020. Industry 4.0 technologies assessment: A sustainability perspective. International journal of production economics, 229, p.107776.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Kovait&#279;, K. and Stankevi&#269;ien&#279;, J. (2019) Risks of digitalisation of business models. Proceedings of 6th International Scientific Conference Contemporary Issues in Business, Management and Economics Engineering &lsquo;2019.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Atobishi, T., G&aacute;bor, S.Z. and Podruzsik, S., 2018. Cloud computing and big data in the context of industry 4.0: opportunities and challenges.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Tamvada, J.P., Narula, S., Audretsch, D., Puppala, H. and Kumar, A., 2022. Adopting new technology is a distant dream? The risks of implementing Industry 4.0 in emerging economy SMEs. Technological Forecasting and Social Change, 185, p.122088.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Bowman, E. (2021) After data breach exposes 530 million, Facebook says it will not notify users, NPR. NPR. Available at: https://www.npr.org/2021/04/09/986005820/after-data-breach-exposes-530-million-facebook-says-it-will-not-notify-users (Accessed: March 11, 2023).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Uberoi, A. (2022) IOT security: 5 cyber-attacks caused by IOT security vulnerabilities, 9ine. Available at: https://www.cm-alliance.com/cybersecurity-blog/iot-security-5-cyber-attacks-caused-by-iot-security-vulnerabilities (Accessed: March 11, 2023).</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c2">Badri, A., Boudreau-Trudel, B. and Souissi, A.S., 2018. Occupational health and safety in the industry 4.0 era: A cause for major concern?. Safety science, 109, pp.403-411.</span></p></body></html>
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

function SRMD1() {
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
            <Header title="SRM Discussion 1 Initial Post" />
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

export default SRMD1;
