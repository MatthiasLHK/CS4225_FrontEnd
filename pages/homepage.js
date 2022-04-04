import topbar from '../styles/TopBar.module.css';
import body from '../styles/HomePageBody.module.css';
import { useRouter } from 'next/router';
import developer1 from '../images/testProfilePic.png';
import Image from 'next/image';
import Background from './backgroundParticles.js';

function TopBar(props) {
  return (
    <div className={props.styles}>
      <h1>CS4225</h1>
    </div>
  )
}

function Body(props) {
  const router = useRouter()
  return (
    <div className={props.styles.title}>
      <h1>Global Real-time Github Analyser - GRGA</h1>
      <div className={props.styles.intro}>
        <h1>GRGA is a real time analysis on the global economy of Github. Using the public github data-lake, we monitor all public open source
            repositories around the global. By gathering real-time data, we would then carry out analysis on the languages being used throughout
            the projects and also across different areas of developments, such as Mobile, Software, etc. 
        </h1>
      </div>
      <Columns styles={props.styles}/>
      <Developers styles={props.styles}/>
    </div>
  )
}

function Developer_profile(props) {
    return (
        <div id='developer_box' className={props.styles.developer_profile}>
            <Image src={props.src} className={props.styles.profile_image} objectFit="cover"/>
            {props.name}
        </div>
    )
}


function Developers(props) {
    return (
        <div className={props.styles.developers}>
            <div id='top_row' className={props.styles.developers_row}>
                <Developer_profile src={developer1} name="David Cai" styles={props.styles}/>
                <Developer_profile src={developer1} name="Wallace" styles={props.styles}/>
                <Developer_profile src={developer1} name="Li Huankang" styles={props.styles}/>
                <Developer_profile src={developer1} name="Joon Jie" styles={props.styles}/>
            </div>
            <div id='bottom_row' className={props.styles.developers_row}>
                <Developer_profile src={developer1} name="Noel" styles={props.styles}/>
                <Developer_profile src={developer1} name="Kx" styles={props.styles}/>
                <Developer_profile src={developer1} name="Heng Yong Ming" styles={props.styles}/>
            </div>
        </div>
    )
}

function Columns(props) {
    const router = useRouter()
    return (
      <div className={props.styles.column_block} id="HP-columns">
        <div id='left-col-bg' className={props.styles.column}>
          <div id='text-bg' className={props.styles.column_text_box}>
            Currently, GRGA actvely monitors and track all github projects within the last 3 months, and
            have conducted some basic analysis on the differnt type of languages being used and their popularity
            across different forms of development.
          </div>
          <button id='analysis_link' className={props.styles.link_button} onClick={()=>router.push('/analysisMain')}>
            View
          </button>
        </div>
        <div id='right-col-bg' className={props.styles.column}>
          <div id='text-bg' className={props.styles.column_text_box}>
            GRGA also provides the ability for you to search for specific langauges that are being used across various
            development areas, and also on global trends.
          </div>
          <div>
            <button id='analysis_link' className={props.styles.link_button} onClick={()=>router.push('/queryMain')}>
              View
            </button>
          </div>
        </div>
      </div>
    )
}


export default function Homepage() {
    return (
        <div>
            <div>
                <TopBar styles={topbar.header}/>
            </div>
            <div>
                <Background styles={body}/>
                <Body styles={body}/>
            </div>
        </div>
      )
}