import $ from 'jquery';
import artbox from '../img/artbox.png';
import chat from '../img/socket.png';
import onetable from '../img/onetable.png';
import portfolio from '../img/portfolio.png';
import React from 'react';

const Project = React.forwardRef((props, ref) => {

    const { name } = props;

    // $(window).scroll(function () {
    //     var 높이 = $(window).scrollTop();
    //     console.log(높이);
    // });

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var y5 = -0.06875 * height + 173.9375;
        var y9 = -1 / 200 * height + 19.35;
        var y10 = -0.0015 * height + 6.505;
        var y11 = -1 / 200 * height + 22.295;
        var y12 = -0.0015 * height + 7.3885;
        var y13 = -1 / 200 * height + 25.375;
        var y14 = -0.0015 * height + 8.3125;

        $('.project-scroll-text-w-d').eq(0).css('transform', `translateX(${y5}vw)`);
        $('.project-card-box').eq(0).css('opacity', y9);
        $('.project-card-box').eq(1).css('opacity', y11);
        $('.project-card-box').eq(2).css('opacity', y13);

        if (height > 3670 && height < 3870) {
            $('.project-card-box').eq(0).css('transform', `scale(${y10})`);
        } else {
            $('.project-card-box').eq(0).css('transform', `none`);
        }
        if (height > 4259 && height < 4459) {
            $('.project-card-box').eq(1).css('transform', `scale(${y12})`);
        } else {
            $('.project-card-box').eq(1).css('transform', `none`);
        }
        if (height > 4875 && height < 5075) {
            $('.project-card-box').eq(2).css('transform', `scale(${y14})`);
        } else {
            $('.project-card-box').eq(2).css('transform', `none`);
        }
    });

    return (
        <div className="projectComponent" ref={ref}>
            <div className='project-scroll-text'>
                <div className='project-scroll-text-w'>
                    <div className='project-scroll-text-w-d'> - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT -PROJECT -PROJECT -PROJECT -PROJECT -</div>
                </div>
                <div className='project-card'>
                    <a href='https://www.notion.so/Art-box-2d3a41ac2e9d4f3c90091f034f30db73'>
                        <div className='project-card-box'>
                            <img className='project-card-box-img' src={artbox} />
                            <p className='artboxnotion'>ARTBOX.notion</p>
                        </div>
                    </a>
                    <a href='https://www.notion.so/One-table-170680625f70448eb507d51c5ae55de8'>
                        <div className='project-card-box'>
                            <img className='project-card-box-img' src={onetable} />
                            <p className='onetablenotion'>ONETABLE.notion</p>
                            </div>
                    </a>
                    <a href='https://www.notion.so/a9ba1956320d4e288497ad8657ee0c9b'>
                        <div className='project-card-box'>
                            <img className='project-card-box-img' src={chat} />
                            <p className='chattingappnotion'>CHATTINGAPP.notion</p>
                            </div>
                    </a>
                    <a href='https://www.notion.so/6a317c0b33624af88afe29161352e6e0'>
                        <div className='project-card-box'>
                            <img className='project-card-box-img' src={portfolio} />
                            <p className='portfolionotion'>PORTFOLIO.notion</p>
                            </div>
                    </a>
                </div>
            </div>
        </div>
    )
});

export default Project;