import $ from 'jquery';
import artbox from '../img/artbox.jpg';
import chat from '../img/chat.jpg';
import onetable from '../img/onetable.jpg';

function Project (){
    $(window).scroll(function(){
        var 높이 = $(window).scrollTop();
        console.log(높이);
    });

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var y = -50 / 801 * height + 13500 / 801;
        $('.project-scroll-text-w').eq(0).css('transform', `translateX(${y}vw)`);
    });

    return (
        <div className="projectComponent">
            <div className='project-scroll-text'>
                <div className='project-scroll-text-w'>
                    <div> - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - </div>
                </div>
                <div className='project-card'>
                    <div className='project-card-box'><img className='project-card-box-img' src={artbox} /></div>
                    <div className='project-card-box'><img className='project-card-box-img' src={onetable} /></div>
                    <div className='project-card-box'><img className='project-card-box-img' src={chat} /></div>
                    <div className='project-card-box'><img className='project-card-box-img' src={artbox} /></div>
                </div>
            </div>
        </div>
    )
}

export default Project;