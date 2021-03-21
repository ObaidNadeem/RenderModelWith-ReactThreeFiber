import React, { useEffect, useRef, useState } from 'react'
import './Responsive.css'
import anime from 'animejs/lib/anime.es.js';
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWindowSize } from '../WindowSizeHook/useWindowSize'


export const Screens = () => {
    const [screen, setScreen] = useState()
    const screenSize = useRef()
    const [state, setstate] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            setScreen(screenSize.current.offsetWidth)
            console.log("something")
            console.log(screenSize.current.offsetWidth)
        };
        console.log(screen)
        // console.log(w)
        screenSize.current.addEventListener("click", handleResize)
        // return () => {
        //     screenSize.current.removeEventListener("resize", handleResize)
        // }
    }, [screenSize.current]);

    function burger() {
        setstate(false)
        // console.log(state)
    }


    function nav() {
        setstate(true)
        // console.log(state)
    }

    useEffect(() => {
        gsap.to('.responsive-heading-main', {
            // duration: 2,
            scrollTrigger: {
                trigger: '.responsive-heading-main',
                start: "296 0",
                end: "296 0",
                markers: true,
                // toggleActions: "play pause resume pause",
                scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: burger,
                onEnterBack: nav,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false

            }
        })
    }, [])

    // const[screenWidth,screenHeight] = screen()

    // return size;

    // useEffect(() => {
    // setscreen = ([screenSize.current.offsetWidth])
    // console.log(screenSize.current.offsetWidth)

    // },)

    return (
        <div>
            <div className="devices-main-frame" style={{ borderRadius: "30% 70% 29% 71% / 30% 30% 70% 70%" }}>
                <div className="device-frame">
                    <div ref={screenSize} className="mobile-devices">
                        {state ?
                            <div className="burger-menu">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            :
                            <div className="screens-nav">
                                <nav>
                                    <a>Home</a>
                                    <a>About</a>
                                    <a>Gallery</a>
                                    <a>Contact</a>
                                </nav>
                            </div>
                        }
                        <div className="content">
                            <div className="main-heading"></div>
                            <div className="sub-heading"></div>
                            <div className="header"></div>
                            <div className="cards">

                                <div className="card1-main">
                                    <div className="card1"></div>
                                    <div className="text1">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card2-main">
                                    <div className="card2"></div>
                                    <div className="text1">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card3-main">
                                    <div className="card3"></div>
                                    <div className="text1">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card3-main">
                                    <div className="card3"></div>
                                    <div className="text1">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${state ? "hide" : ""} screen-footer`}>

                            </div>
                        </div>
                    </div>
                    <div className="switch">

                    </div>
                </div>
                <div className={`${state ? "hide" : ""} stand`}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}


export const Responsive = () => {

    const [height, width] = useWindowSize()

    gsap.registerPlugin(ScrollTrigger);

    function stage1() {
        console.log("stage 1 running")
        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9 c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2 S1008.6,110,1129.2,161.3z"
                },
                {
                    value:
                        "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage1Reverse() {
        console.log("stage 1 reverse running")

        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
                },
                {
                    value:
                        "M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9 c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2 S1008.6,110,1129.2,161.3z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage2() {
        console.log("stage 2 running")

        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
                },
                {
                    value:
                        "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });


    }
    function stage2Reverse() {
        console.log("stage 2 running")

        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
                },
                {
                    value:
                        "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });


    }
    function stage3() {
        console.log("stage 3 running")

        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
                },
                {
                    value:
                        "M1329.9-70.2c69.2,29,323.8,71.6,318,111c-7.1,48.1-105.2,313.6-78,321c51.3,14,23.3,253.9,21,291 c-5,80.5-702.9,335.4-849.1,279c0,0-912.5-78.7-833-180c60.3-96.2,10.4-617.1,52.9-732.1c40.5-109.5,669.1-45,669.1-45 S1208.4-121.2,1329.9-70.2z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage3Reverse() {
        console.log("stage 3 running")

        anime({
            targets: ".morph",
            d: [
                {
                    value:
                        "M1329.9-70.2c69.2,29,323.8,71.6,318,111c-7.1,48.1-105.2,313.6-78,321c51.3,14,23.3,253.9,21,291 c-5,80.5-702.9,335.4-849.1,279c0,0-912.5-78.7-833-180c60.3-96.2,10.4-617.1,52.9-732.1c40.5-109.5,669.1-45,669.1-45 S1208.4-121.2,1329.9-70.2z"
                },
                {
                    value:
                        "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }

    useEffect(() => {
        
        
        gsap.to('.responsive-heading-main', {
            //  css: {background: 'blue'},
            duration: 2,
            scrollTrigger: {
                trigger: '.responsive-heading-main',
                start: "top 0",
                end: "bottom 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                pin: true,
                //  pinSpacing: 1000,
                // pinSpacing: true

            }
            // toggleClass: '.change'
        })

        gsap.to('.svgMain', {
            duration: 2,
            scrollTrigger: {
                trigger: '.svgMain',
                start: "50 0",
                end: "50 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage1,
                onEnterBack: stage1Reverse,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false

            }
        })

        gsap.to('.svgMain', {
            duration: 2,
            scrollTrigger: {
                trigger: '.svgMain',
                start: "300 0",
                end: "300 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage2,
                onEnterBack: stage2Reverse,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false

            }
        })

        gsap.to('.svgMain', {
            duration: 2,
            scrollTrigger: {
                trigger: '.svgMain',
                start: "600 0",
                end: "800 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage3,
                onEnterBack: stage3Reverse,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false

            }
        })

        // gsap.to('.res-text', {
        //     duration: 2,
        //     scrollTrigger: {
        //         trigger: '.res-text',
        //         start: "top 0",
        //         end: "bottom 0",
        //         // markers: true,
        //         // toggleActions: "play pause resume pause",
        //         scrub: true,
        //         // toggleClass: "change",
        //         // duration
        //         // pin: true,
        //         markers: true,
        //         toggleClass: "resTextAnimate"
        //         // onEnter: stage3,
        //         // onEnterBack: stage3Reverse,
        //         // toggleActions: "reset pause resume reverse",

        //         //  pinSpacing: 1000,
        //         //  pinSpacing: false

        //     }
        // })

        // gsap.to('.h11', {
        //     duration: 2,
        //     scrollTrigger: {
        //         trigger: '.h11',
        //         start: "10 0",
        //         end: "bottom 0",
        //         // markers: true,
        //         // toggleActions: "play pause resume pause",
        //         // scrub: true,
        //         // toggleClass: "change",
        //         // duration
        //         // pin: true,
        //         markers: true,
        //         toggleClass: "h1Animate"
        //         // onEnter: stage3,
        //         // onEnterBack: stage3Reverse,
        //         // toggleActions: "reset pause resume reverse",

        //         //  pinSpacing: 1000,
        //         //  pinSpacing: false

        //     }
        // })

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.responsive-heading-main',
                // markers: true,
                start: 'top 0',
                end: 'bottom 0',
                // pin: true,
                scrub: 0.5

            }
        })

        tl1.to('.device-frame', { css: { width: `${500}px`, height: `${300}px` }, duration: 2 })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.h11',
                markers: true,
                start: 'top 0',
                end: 'top 0',
                // pin: true,
                scrub: true

            }
        })
        
        tl2.to('.h11', { css: { fontSize: "2rem" }, })
        .to('.res-text' , {css: {width: 48, marginTop: "0.5rem"} , delay: -0.5})

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.h11',
                markers: true,
                start: '250 top',
                end: '250 top',
                // pin: true,
                scrub: true

            }
        })

        tl3.to('.h11', { css: { fontSize: "5rem" }, })
        .to('.res-text' , {css: {width: "", marginTop: "0"} , delay: -0.5})
    })

    return (
        <div>
            <div className="responsive-heading-main">
                {/* "Design is so simple, that's why it is so complicated." */}
                <div className="responsive-text" >
                    <div className="responsive-text2">
                        <div><h1>RES</h1></div>
                        <div className="res-text">
                        <h1 className="h11">P</h1>
                        <h1 className="h11">O</h1>
                        <h1 className="h11">N</h1>
                        <h1 className="h11">S</h1>
                        </div>
                        <div><h1>IVE</h1></div>
                    </div>
                    {/* <h2 style={{fontSize: "4rem"}}>
                        Design must seduce, 
                    </h2>
                    <div style={{margin: "0px", padding: "0px", display: "flex"}}>
                    <h2 style={{fontSize: "4rem"}}>
                    shape,
                     and perhaps more importantly,
                    </h2>
                 
                    
                    </div>
                    <h2 style={{fontSize: "4rem"}}>
                    evoke an emotional response.
                    </h2> */}

                </div>
                <div>
                    {/* <Screens /> */}
                </div>

                <div style={{ width: width, height: height, display: "flex", justifyContent: "center" }} className="svg-container">
                    <svg
                        // style={{textAlign: "center", marginRight: 500}}
                        className="svgMain"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox={`0 0 ${width} ${height}`}
                    // enableBackground="new 0 0 1366 768"
                    // xmlSpace="preserve"
                    >
                        {/* <path
                            className="morph"
                            d="M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9
                                c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2
                                S1008.6,110,1129.2,161.3z"
                        /> */}
                    </svg>
                </div>
            </div>
        </div>
    )
}
