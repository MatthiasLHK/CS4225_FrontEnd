import topbar from '../styles/TopBar.module.css';
import Background from './backgroundParticles.js';
import Link from 'next/link';
import am from '../styles/analysisMain.module.css';


export default function Home() {
    return (
        <>
        <Background />
        <TopBar styles={topbar}/>
        <Explanation styles={am}/>
        </>
    )
}

function TopBar(props) {
    return (
        <div id='MainBox' className={props.styles.headerMainBox}>
            <div className={props.styles.header}>
                <h1>CS4225</h1>
            </div>
            <div id='extras' className={props.styles.headerBox_Extra}>
                <div className={props.styles.topLinks}>
                    <Link href="#explain">Explanation</Link>
                </div>
                <div className={props.styles.topLinks}>
                <Link href="">Most Popular Languages</Link>
                </div>
            </div>
        </div>
    )
}

function Explanation(props) {
    return (
        <div>
            <div id='explain_text' className={props.styles.explain_text}>
                Where do we get the data from?
            </div>
            <div id='reply1' className={props.styles.answer_text}>
                123
            </div>
            <div id='explain_text' className={props.styles.explain_text}>
                How do we process and analyse the data?
            </div>
            <div id='reply2' className={props.styles.answer_text}>
                123
            </div>
            <Pipeline />
        </div>
    )
}

function Pipeline(props) {
    return (
        null
    )
}