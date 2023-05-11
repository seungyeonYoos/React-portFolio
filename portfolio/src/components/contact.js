import $ from 'jquery';
import React from 'react';
import Munch1 from '../img/Munch_1.png';

const Contact = React.forwardRef((props, ref) => {

    const handleClick = () => {
        props.showModal()
      };

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var y6 = -50/816 * height + 272000/816;
        if (height > 4000){
        $('.scroll-text-ww').eq(0).css('transform', `translateX(${y6}vw)`);
        }

    });

    return (
        <div className="contactComponent" ref={ref}>
            <div className='scroll-text'>
                <div className='scroll-text-ww'>
                    <div> - CONTACT - CONTACT - CONTACT - CONTACT - CONTACT - CONTACT - CONTACT</div>
                </div>
                <div className="scroll-text-t">
                    <div>LET'S MAKE MAGIC !</div>
                    <button type='button' onClick={handleClick}>
                        <div className='wave'>start a contact</div>
                        <div className='wave-2'>let's go</div>
                    </button>
                </div>
                <div className='footMunch'>
                    <div className='eyes'>
                        <div className='eye'>
                            <div className="whiteEyes">
                                <div className="ball"></div>
                            </div>
                            <div className="whiteEyes">
                                <div className="ball"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Contact;