import Particles from 'react-tsparticles';
import body from '../styles/HomePageBody.module.css';

export default function Background(props) {
    const options = {
        particles: {
            number: {
                value:150
            },
            opacity: {
                random: {
                    enable: true,
                    minimumValue: 0.2
                },
                value: {
                    min: 0.1,
                    max: 0.5
                },
                animation: {
                    enable: true,
                    speed: 3
                }
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90
                },
                enable: true,
            },
            links: {
                color: {
                    value: "#ffffff"
                },
                distance: 150,
                frequency: 1,
                opacity: 0.5,
                enable: true
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 1
                },
                value: {
                    min: 0.1,
                    max: 10
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 20,
                    minimumValue: 0.1
                }
            },
        }
    }
    return (
        <>
        <Particles options={options}/>
        </>
    )
}