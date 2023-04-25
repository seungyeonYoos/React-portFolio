import $ from 'jquery';

function About() {
    $(window).scroll(function () {

        var height = $(window).scrollTop();

        var y = -50 / 801 * height + 13500 / 801;
        $('.scroll-text-w').eq(0).css('transform', `translateX(${y}vw)`);

    });

    return (
        <div className="aboutComponent">
            <div className='scroll-text'>
                <div className='scroll-text-w'>
                    <div> - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - </div>
                </div>
            </div>
            <div className='scroll-text-2'>
                <div className='scroll-text-2-R'>
                    <div>
                        <p className='profile'>PROFILE</p>
                        <p className='smallIntro'>"A small intro"</p>
                        <p className='intro'>Hello, I have experience working as a web designer.  <br />My name is Yoo Seung-yeon, a web developer.</p>
                    </div>
                </div>
                <div className='introduce'>Self taught UX/UI designer with a passion to learn new skills and technologies.<br />
                    I am currently studying web development in Paris at "L'école multimedia".<br />
                    I have been building interfaces for startups since 2020.<br />
                    I help businesses leave a lasting impression in the digital world.<br />
                    With a touch of creativity and empathy, I specialize in crafting modern<br />
                    websites that offer user-centric experiences .</div>
            </div>
            <div className='scroll-text-3'>
                <div>
                    <div className='scroll-text-3-img'></div>
                </div>
            </div>
        </div>
    )
}

export default About;