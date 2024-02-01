import $ from "jquery";
import { useState } from "react";
import artbox from "../img/artbox.png";
import chat from "../img/socket.png";
import onetable from "../img/onetable.png";
import portfolio from "../img/portfolio.png";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";

const Project = React.forwardRef((props, ref) => {
  const { name } = props;
  const [show, setShow] = useState(false);
  const [showSocket, setSocketShow] = useState(false);
  const [showsocialerus, setSocialerusShow] = useState(false);
  const [showOnss, setOnssShow] = useState(false);

  var yy = $('.project-card-box').eq(0).height() + 50;
    $('.project-card-box').eq(1).css('height', yy +'px');
    $('.project-card-box').eq(2).css('height', yy +'px');
    $('.project-card-box').eq(3).css('height', yy +'px');

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var y5 = -0.06875 * height + 173.9375;

    $(".project-scroll-text-w-d").eq(0).css("transform", `translateX(${y5}vw)`);
  });

  return (
    <div className="projectComponent" ref={ref}>
      <div className="project-scroll-text">
        <div className="project-scroll-text-w">
          <div className="project-scroll-text-w-d">
            {" "}
            - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT - PROJECT -
            PROJECT - PROJECT -PROJECT -PROJECT -PROJECT -PROJECT -
          </div>
        </div>
        <div className="project-card">
          {/* 첫번째 프로젝트 */}
          <div className="preva">
            <div className="project-card-box">
              <div className="project-card-tit">
                원격 과외 프로그램 (진행중)
              </div>
              <p className="project-card-sub">
                2022.10 , 2024.01 (1인 개인프로젝트)
              </p>
              <div className="project-card-inner">
                <div className="project-card-swiper">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img className="project-card-box-img" src={chat} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={chat} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={chat} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={chat} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={chat} />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="project-card-ex">
                  <div>
                    socket.io를 사용한{" "}
                    <strong>
                      실시간으로 사진 파일과 그림을 공유할 수 있는 원격 과외
                      프로그램
                    </strong>
                    입니다.웹 개발자 양성과정 교육에서 만든 채팅 프로그램을 조금
                    더 발전시켜보고 싶어 만들어보게 되었습니다.<br></br>
                  </div>
                  <br></br>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      주요 기능
                    </div>
                    <div>
                      실시간 사진 및 그림판 공유, 유저 간 채팅, 귓속말 기능,
                      과외 내용 다운로드
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Github
                    </div>
                    <div>
                      <a
                        href="https://github.com/seungyeonYoos/socket-project"
                        target="_blank"
                      >
                        https://github.com/seungyeonYoos/socket-project
                      </a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      URL
                    </div>
                    <div>
                      <a href="#">
                        https://codesandbox.io/p/sandbox/jj72j5?file=%2Findex.html%3A81%2C39
                      </a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Front-end
                    </div>
                    <div>Java script, jQuery, socket.io</div>
                  </div>
                  <hr></hr>
                  <button
                    type="button"
                    className="sig-button"
                    onClick={() => setSocketShow(true)}
                  >
                    <div className="wave">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                    <div className="wave-2">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 두번째 프로젝트 */}
          <div className="preva">
            <div className="project-card-box">
              <div className="project-card-tit">포트폴리오 웹사이트</div>
              <p className="project-card-sub">2024.01 (1인 개인프로젝트)</p>
              <div className="project-card-inner">
                <div className="project-card-swiper">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img className="project-card-box-img" src={require("../img/portfolio_1.png")} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={require("../img/portfolio_2.png")} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={require("../img/portfolio_3.png")} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={require("../img/portfolio_4.png")} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="project-card-box-img" src={require("../img/portfolio_5.png")} />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="project-card-ex">
                  <div>
                    <strong>포트폴리오 용도로 제작한 웹사이트</strong>입니다.
                    지금 보고 있는 이 웹사이트에 해당됩니다.
                  </div>
                  <br></br>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      주요 기능
                    </div>
                    <div>
                      간단한 자기소개, 인적 사항, 기술 스택, Gihub 링크,
                      프로젝트 경험, 업무 경력
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Github
                    </div>
                    <div>
                      <a href="https://github.com/seungyeonYoos/React-portFolio">
                        https://github.com/seungyeonYoos/React-portFolio
                      </a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      URL
                    </div>
                    <div>
                      <a href="https://seungyeonyoos.github.io/">
                      https://seungyeonyoos.github.io/
                      </a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Front-end
                    </div>
                    <div>
                      Java script, jQuery, React, SCSS, Bootstrap, Swiper
                    </div>
                  </div>
                  <hr></hr>
                  <button
                    type="button"
                    className="sig-button"
                    onClick={() => setShow(true)}
                  >
                    <div className="wave">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                    <div className="wave-2">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 세번째 프로젝트 */}
          <div className="preva">
            <div className="project-card-box">
              <div className="project-card-tit">소셜러스 - 소셜거래소</div>
              <p className="project-card-sub">
                2023.05 ~ 2023.12(퍼블리셔 근무 중 프로젝트)
              </p>
              <div className="project-card-inner">
                <div className="project-card-swiper">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_1.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_2.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_3.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_4.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_5.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/socialerus_6.png")}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="project-card-ex">
                  <div>
                    <strong>
                      하나의 유튜브 채널을 여러명이 구매하여 소유할 수 있는
                      신개념 소유권 구매 서비스
                    </strong>
                    입니다. 제 기본 업무는 소셜러스 홈페이지 유지 보수였으며,
                    소셜거래소 런칭 퍼블리싱파트를 담당했습니다.
                  </div>
                  <br></br>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      주요 기능
                    </div>
                    <div>
                      채널소유권, 채널투자, 커뮤니티, 마이페이지, 로그인,
                      회원가입
                    </div>
                  </div>

                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      URL
                    </div>
                    <div>
                      <a href="https://socialerus.com/SocialEx" target="_blank">
                        https://socialerus.com/SocialEx
                      </a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Front-end
                    </div>
                    <div>Java script, Bootstrap</div>
                  </div>
                  <hr></hr>
                  <button
                    type="button"
                    className="sig-button"
                    onClick={() => setSocialerusShow(true)}
                  >
                    <div className="wave">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                    <div className="wave-2">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 네번째 프로젝트 */}
          <div className="preva">
            <div className="project-card-box">
              <div className="project-card-tit">(주)상상할수없는 홈페이지</div>
              <p className="project-card-sub">
                2022.11 ~ 2023.02(2인 프로젝트)
              </p>
              <div className="project-card-inner">
                <div className="project-card-swiper">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/onss_1.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/onss_2.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/onss_3.png")}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="project-card-box-img"
                        src={require("../img/onss_4.png")}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="project-card-ex">
                  <div>
                    <strong>
                      AI기술 연구 및 SI사업을 하는 회사의 웹페이지
                    </strong>
                    입니다. 홈페이지의 디자인 및 퍼블리싱업무를 담당했습니다.
                  </div>
                  <br></br>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      주요 기능
                    </div>
                    <div>회사소개, 회사 비지니스, U&I 솔루션 소개</div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      URL
                    </div>
                    <div>
                      <a href="https://onss.co.kr/">https://onss.co.kr/</a>
                    </div>
                  </div>
                  <div className="project-card-ex-item">
                    <div>
                      <FontAwesomeIcon icon={faCheck} />
                      Front-end
                    </div>
                    <div>Java script, jQuery, Bootstrap</div>
                  </div>
                  <hr></hr>
                  <button
                    type="button"
                    className="sig-button"
                    onClick={() => setOnssShow(true)}
                  >
                    <div className="wave">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                    <div className="wave-2">
                      자세히 보기 <FontAwesomeIcon icon={faPlay} /> README
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 첫번째 프로젝트(원격과외) */}
      <Modal
        show={showSocket}
        onHide={() => setSocketShow(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            README.md
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="modal-tit">원격 과외 프로그램</div>
            <hr></hr>
            <div>
              <div className="modal-item-tit">🔗Deployment URL</div>
              <div className="modal-item-con">
                <a href="#">sdjfklaweijfkdls</a>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">📌Summary</div>
              <div className="modal-item-con">
                <strong>포트폴리오 용도로 제작한 웹사이트</strong>입니다.
                <br></br>
                <br></br>
                React 를 공부하며 React 프로젝트를 만들어보고 싶어서 포트폴리오
                페이지를 제작하게 되었습니다. 그리고 사용해본적은 없지만
                여러장점이 있는 SCSS를 사용해보며 사용법을 익혔습니다. 직접
                활용해보니 CSS에서 보이던 단점을 보완하고, 개발의 효율을
                올리는것같아 SCSS의 편리성을 경험해볼 수 있었습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">⚙️주요 기능</div>
              <div className="modal-item-con">
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 실시간 사진 및 그림판
                  공유
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 유저 간 채팅
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 귓속말 기능
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 과외 내용 다운로드
                </p>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🔍Meaning</div>
              <div className="modal-item-con">
                React와 SCSS를 이용하여 처음으로 진행한 프로젝트였기 때문에,
                React와 SCSS에 대한 이해를 넓히는데 많은 도움이 되었습니다.
                강의를 들으며 따라하는게 아닌 내가 구상한 페이지를 직접
                제작하다보니 처음엔 어려웠지만, 가독성과 유지보수 측면에서
                굉장히 편리하다는 것을 느꼈습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🕹️Technology Stack</div>
              <div className="modal-item-con">
                <div>Frontend : Java script, jQuery, socket.io</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* 두번째 프로젝트 포트폴리오 */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            README.md
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="modal-tit">포트폴리오 프로그램</div>
            <hr></hr>
            <div>
              <div className="modal-item-tit">🔗Deployment URL</div>
              <div className="modal-item-con">
                <a href="#">sdjfklaweijfkdls</a>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">📌Summary</div>
              <div className="modal-item-con">
                <strong>포트폴리오 용도로 제작한 웹사이트</strong>입니다.
                <br></br>
                <br></br>
                React 를 공부하며 React 프로젝트를 만들어보고 싶어서 포트폴리오
                페이지를 제작하게 되었습니다. 그리고 사용해본적은 없지만
                여러장점이 있는 SCSS를 사용해보며 사용법을 익혔습니다. 직접
                활용해보니 CSS에서 보이던 단점을 보완하고, 개발의 효율을
                올리는것같아 SCSS의 편리성을 경험해볼 수 있었습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">⚙️주요 기능</div>
              <div className="modal-item-con">
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 간단한 자기소개
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 인적 사항
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 기술 스택
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> Github 링크
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 프로젝트 경험
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 업무 경력
                </p>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🔍Meaning</div>
              <div className="modal-item-con">
                React와 SCSS를 이용하여 처음으로 진행한 프로젝트였기 때문에,
                React와 SCSS에 대한 이해를 넓히는데 많은 도움이 되었습니다.
                강의를 들으며 따라하는게 아닌 내가 구상한 페이지를 직접
                제작하다보니 처음엔 어려웠지만, 가독성과 유지보수 측면에서
                굉장히 편리하다는 것을 느꼈습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🕹️Technology Stack</div>
              <div className="modal-item-con">
                <div>Frontend : Java script, jQuery, React, SCSS, Bootstrap, Swiper</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* 세번째 프로젝트  소셜러스 */}
      <Modal
        show={showsocialerus}
        onHide={() => setSocialerusShow(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            README.md
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="modal-tit">(주)소셜러스 - 소셜거래소</div>
            <hr></hr>
            <div>
              <div className="modal-item-tit">🔗Deployment URL</div>
              <div className="modal-item-con">
                <a href="https://socialerus.com/SocialEx">
                  https://socialerus.com/SocialEx
                </a>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">📌Summary</div>
              <div className="modal-item-con">
                <strong>
                  하나의 유튜브 채널을 여러명이 구매하여 소유할 수 있는 신개념
                  소유권 구매 서비스
                </strong>
                입니다. 제 기본 업무는 소셜러스 홈페이지 유지 보수였으며,
                소셜거래소 런칭 퍼블리싱파트를 담당했습니다.<br></br>
                <br></br>
                개발자, 비개발자와 devOps를 통해 소통하고 소스 코드, 스케줄을
                공유하며 버전 관리를 하는 협업 경험을 쌓을 수 있었습니다.
                브레이크 포인트를 지정해 반응형 웹페이지를 구축하였고, 크로스
                브라우징과 웹 표준에 대한 이해가 높아진 프로젝트입니다.<br></br>
                그리고 퍼블리싱 가이드를 제작해 코드의 일관성을 주고, 재활용과
                유지 보수가 쉬운 코드를 짤 수 있는 더 좋은 방법을 생각하게 되는
                계기가 되었습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">⚙️주요 기능</div>
              <div className="modal-item-con">
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 채널소유권
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 채널투자
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 커뮤니티
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 마이페이지
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 로그인
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 회원가입
                </p>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🔍Meaning</div>
              <div className="modal-item-con">
                기획부터 퍼블리싱까지 하던 이전과는 다르게 각각의 파트가
                나누어진 조직에서 일하다 보니 소통과 기록의 중요성을 느꼈습니다.
                그리고 여러 페이지를 제작하다 보니 처음 틀을 세우는 것에도 공을
                들여야 한다는 것을 알게 되고, 그에 따른 퍼블리싱 가이드를
                세우고, 통일성 있고 일관적인 UI를 제작하여 재활용이 가능하도록
                작업했습니다. 처음에 퍼블리싱 가이드를 만들고, 틀을 짜는데
                시간이 오래 걸리더라도 시간이 지나자 속도가 붙어 빠르게 일을
                쳐냈던 경험이 있습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🕹️Technology Stack</div>
              <div className="modal-item-con">
                <div>Frontend : Java script, jQuery, Bootstrap</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* 네번째 프로젝트 상상할수없는 */}
      <Modal
        show={showOnss}
        onHide={() => setOnssShow(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            README.md
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="modal-tit">(주)상상할수없는 홈페이지</div>
            <hr></hr>
            <div>
              <div className="modal-item-tit">🔗Deployment URL</div>
              <div className="modal-item-con">
                <a href="https://onss.co.kr/">https://onss.co.kr/</a>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">📌Summary</div>
              <div className="modal-item-con">
                <strong>
                  AI solution회사 (주)상상할수없는의 회사 정보 등을 전달하기
                  위해
                </strong>{" "}
                제작되었습니다.<br></br>
                <br></br>
                백엔드 개발자와 Git을 활용하여 소스 코드를 공유하고 협업하는
                경험을 쌓았습니다. 동시에 UI/UX에 대한 고민을 하며 직접 디자인
                작업을 수행하고, 여러 사용자들로부터 피드백을 받아 홈페이지를
                구축했습니다. 뿐만 아니라, 이전에 시도해보지 않았던 SVG를
                활용하여 복잡한 애니메이션을 구현했습니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">⚙️주요 기능</div>
              <div className="modal-item-con">
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 회사 소개
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> 회사 비즈니스
                </p>
                <p>
                  <FontAwesomeIcon icon={faSquareCheck} /> U&I 솔루션 소개
                </p>
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🔍Meaning</div>
              <div className="modal-item-con">
                처음으로 Git을 이용하여 다른 사람과 협업 해보고, 교육때 배웠던
                HTML, CSS, Java script 지식들을 활용하며, 웹 개발의 기초를 쌓을
                수 있었던 프로젝트입니다.<br></br>
                <br></br>
                교육과정을 마치고 퍼블리셔의 길을 처음으로 열어준 회사의
                프로젝트입니다. 웹기획, 웹디자인, 퍼블리싱 업무를 맡으며
                전체적인 웹 개발 프로세스에 대한 이해를 가지게 됐습니다.
                그러면서 제가 앞으로 어떤길을 나아가야할지에 대한 깊은 고민을
                하게되는 계기가 되었습니다. 처음이면서 여러업무를 맡게되어 많은
                부담이 되었지만, 결과적으로 모든 걸 버텨내고 배포까지 했다는
                점에서 자신을 한 단계 성장시킨 프로젝트이기도 합니다.
              </div>
            </div>
            <div>
              <div className="modal-item-tit">🕹️Technology Stack</div>
              <div className="modal-item-con">
                <div>Frontend : Java script, jQuery, Bootstrap</div>
                <div>Backend : Django</div>
                <div>Deploy : AWS</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
});

export default Project;
