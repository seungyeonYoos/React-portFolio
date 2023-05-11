import git from '../img/git.png';
import notion from '../img/notion.png';
import email from '../img/email.png';
import gitHover from '../img/git_hover.png';
import notionHover from '../img/notion_hover.png';
import emailHover from '../img/email_hover.png';

function Footer({modalOpen, setModalOpen, showModal}) {
    const handleClick = () => {
        showModal()
      };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='footerComponent'>
            <div className="footerBox-1">
                <div className="footerIn-1">This portfolio was designed and developed by Karim Saab. Available for freelance.</div>
                <div className="footerIn-2">
                    <div>SOCIAL</div>
                    <div className='footerIn-2-icon'>
                        <a href='https://github.com/seungyeonYoos'>
                            <div className='git'>
                            <img src={git} className='gitImg' />
                            <img src={gitHover} className='gitImgHover' />
                        </div>
                        </a>
                        <a href='https://www.notion.so/023e398fc9b84e00918cec48b292f0cb'>
                            <div className='notion'>
                            <img src={notion} className='notionImg' />
                            <img src={notionHover} className='notionImgHover' />
                        </div>
                        </a>
                        
                    </div>
                </div>
                <div className="footerIn-3">
                    <div>CONTACT</div>
                    <div className='footerIn-3-icon'>
                        <div className='email' onClick={handleClick}>
                            <img src={email} className='emailImg' />
                            <img src={emailHover} className='emailImgHover' />
                        </div>
                    </div>
                </div>
                <div className="footerIn-4">
                    On a side note, if you are a startup, I am looking for an internship for next month. Send me a mail if you're interested.

                    ©2023 Karim Saab - All Rights Reserved</div>
            </div>
            <div className="footerBox-2" onClick={scrollToTop}>
                <div className="flow-text">
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                    <div className="flow-wrap">- BACK TO TOP </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;