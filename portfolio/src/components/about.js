import $ from 'jquery';
import React from 'react';


const About = React.forwardRef((props, ref) =>{

    const { name } = props;

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var y = -50 / 801 * height + 13500 / 801;
        var y2 = 3 / 46 * height + 1600 / 46;
        var y3 = 1 / 190 * height + -478 / 190;
        var y4 = -50 / 66 * height + 26900 / 66;
        $('.scroll-text-w').eq(0).css('transform', `translateX(${y}vw)`);

        $('.introduce , .smallIntro , .intro').css('opacity', y3);
        if (height > 435 && height < 530) {
            $('.profile-SE').eq(0).css('transform', `translateY(${y4}px)`);
        } else {
            $('.profile-SE').eq(0).css('transform', `none`);
        }

        if (height < 1000) {
            $('.scroll-text-3-img').eq(0).css('width', `${y2}%`);
        } else {
            $('.scroll-text-3-img').eq(0).css('width', `none`);
        }
    });

    return (
        <div className="aboutComponent" ref={ref}>
            <div className='scroll-text'>
                <div className='scroll-text-w'>
                    <div> - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -</div>
                </div>
            </div>
            <div className='scroll-text-2'>
                <div className='scroll-text-2-R'>
                    <div>
                        <div className='profile'>
                            <div className='profile-SE' data-aos="fade-up" data-aos-duration="2000">PROFILE</div>
                        </div>
                        <p className='smallIntro' data-aos="fade-up" data-aos-duration="2000">"A small intro"</p>
                        <p className='intro' data-aos="fade-up" data-aos-duration="2000">Hello, I have experience working as a web designer.  <br />My name is Yoo Seung-yeon, a web developer.</p>
                    </div>
                </div>
                <div className='introduce' data-aos="fade-up" data-aos-duration="2000">Name : 유승연<br />
                    Birth : 96.09.02<br />
                    Address : 경기도 안산<br />
                    Phone : 010 - 2434 - 7902<br />
                    E-mail : cjsrnr90218@gmail.com<br />
                    Eduation : 고려사이버대학교 재학중 (소프트웨어 공학과)</div>
            </div>
            <div className='scroll-text-3'>
                <div>
                    <div className='scroll-text-3-img'></div>
                </div>
            </div>
        </div>
    )
});



export default About;