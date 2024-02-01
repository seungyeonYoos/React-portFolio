import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import $ from 'jquery';

function ModalBasic({ modalOpen, setModalOpen, showModal }) {

    // useEffect(() => {
    //     document.body.style.cssText = `
    //       position: fixed; 
    //       top: -${window.scrollY}px;
    //       overflow-y: scroll;
    //       width: 100%;`;
    //     return () => {
    //       const scrollY = document.body.style.top;
    //       document.body.style.cssText = '';
    //       window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    //     };
    //   }, []);
      

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    }
    return (
        <div className="modalComponentBack" onClick={closeModal}>
            <div className='modalComponent' onClick={(e)=> e.stopPropagation()}>
                <div className="modalClose">
                    <button onClick={closeModal}>X</button>
                </div>
                <form className='submit' method='POST' data-email='cjsrnr90218@gmail.com' target='frAttachFiles'
                action='https://script.google.com/macros/s/AKfycbz_MxRwaLfz-LxHvp28mdAjzTmbvgsXrM-7VYVkBiOuNlyJne-grZBhi3Oz8LTv_MNz6Q/exec'>
                    <Container className="modalBox">
                    <Row className='tell'>Tell me about your project.</Row>
                    <Row className="modalText">
                        <Row className="modalText-1">
                            <Col>
                                <input type="text" placeholder="이름" className="name" name="name" />
                            </Col>
                            <Col>
                                <input type="text" placeholder="회사명" className="company" name="company" />
                            </Col>
                        </Row>
                        <Row>
                            <Col><input type="email" placeholder="이메일" className="email" name="email"/></Col>
                        </Row>
                        <Row>
                            <Col><input type="text" placeholder="메세지" className="message" name="message"/></Col>
                        </Row>
                    </Row>
                    <button
                    type="submit"
                    className="sig-button"
                  >
                    <div className="wave">
                       SUBMIT
                    </div>
                    <div className="wave-2">
                       SUBMIT
                    </div>
                  </button>
                </Container>
                </form>
                
            </div>


        </div>
    )
}

export default ModalBasic;