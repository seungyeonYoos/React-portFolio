import $ from 'jquery';
import React, { useEffect, useState, useRef } from 'react';


function Skill() {

    // $(window).scroll(function () {
    //     var height = $(window).scrollTop();
    //     // var y7 = -35/305 * height + 40+52325/305;
    //     // if (height > 1495 && height < 1800){
    //     //     $('#html').eq(0).css('transform', `translateX(${y7}vw)`);
    //     // } else {
    //     //     $('#html').eq(0).css('transform', `none`);
    //     // }
    // });

    // const [isScrolled, setIsScrolled] = useState(false);
    // const [isTools, setIsTools] = useState(false);
    // const [isDesignTools, setIsDesignTools] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    //         // 스크롤 위치가 1500 이상인 경우
    //         if (scrollPosition >= 1400) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //         // 스크롤 위치가 1700 이상인 경우
    //         if (scrollPosition >= 1700) {
    //             setIsTools(true);
    //         } else {
    //             setIsTools(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     // clean-up function
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div className="skillComponent">
            <div className="skillComponent-1">
                <div data-aos="zoom-in">
                    <p>SKILLS&</p>
                    <p>USING TOOLS</p>
                </div>
            </div>
            <div className="skillComponent-2">
                <div className='toolsBox'>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <p className="tools">TOOLS</p>
                        <p className="tools-text">As a UI/UX Designer, I am efficient in both designing websites from<br />scratch, or helping a brand redesign.</p>
                    </div>
                    <div>
                        <p data-aos="zoom-out-right">HTML</p>
                        <p id='css' data-aos="zoom-out-right">CSS</p>
                        <p id='scss' data-aos="zoom-out-right">SCSS</p>
                        <p id='java' data-aos="zoom-out-right">JAVASCRIPT</p>
                        <p id='jquery' data-aos="zoom-out-right">JQUERY</p>
                        <p id='git' data-aos="zoom-out-right">GITHUB</p>
                        <p id='react' data-aos="zoom-out-right">REACT JS</p>
                        <p id='node' data-aos="zoom-out-right">NODE JS</p>
                    </div>
                </div>
                <div className='designToolsBox'>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <p className="tools">DESIGN TOOLS</p>
                        <p className="tools-text">As a UI/UX Designer, I am efficient in both designing websites from<br />scratch, or helping a brand redesign.</p>
                    </div>
                    <div>
                        <hr className='hr'></hr>
                        <p id='photo' data-aos="zoom-out-right">PHOTOSHOP</p>
                        <p id='illustration' data-aos="zoom-out-right">ILLUSTRATOR</p>
                        <p id='figma' data-aos="zoom-out-right">FIGMA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;