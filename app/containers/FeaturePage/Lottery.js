/*
 * FeaturePage
 *
 * List all the features
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-modal';
import Frame from '../../images/frame.png';
import Invite from '../../components/Invite';
import LotteryImage from '../../images/lottery.png';
import LotteryOpenImage from '../../images/lottery-open.png';
import WithdrawImage from '../../images/withdraw-back.png';
import Button1 from '../../images/button1.png';
import Button2 from '../../images/button2.png';

export default function Lottery() {

  const HomepageWrapper = styled.div`
  padding-top: 6em;
  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const HongbaoTitle = styled.h1`
  font-size: 48px;
  color: #F9EA96;
  text-align: center;
  @media only screen and (max-width: 768px) { 
    font-size: 26px;
  }
`;

const HongbaoContent = styled.div`
  width: 40%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const HongbaoFrameMessage = styled.div`
  background-image: url(${Frame});
  background-size: 100% 100%;
  color: white;
  line-height: 2;
  margin-top: 5em;
  padding: 1em 13em 2em 3em;
  h4 {
      color: white;
  }
  @media only screen and (max-width: 1500px) {
    padding: 1px 10em 10px 30px;
  }
  @media only screen and (max-width: 1500px) {
    padding: 1px 7em 10px 30px;
  }
  @media only screen and (max-width: 768px) {
    line-height: 1.5;
    padding: 1px 2em;
    padding-right: 0;
    padding-bottom: 1em;
    margin-top: 1em;
    background-size: 100% 100%;
    height: auto;
    padding: 1px 7em 10px 30px;
  }
`;

const [isStart, setIsStart] = useState(0);


const LotteryWrapper = styled.div`
  background-image: url(${isStart ? LotteryOpenImage : LotteryImage});
  background-size: contain;
  height: 500px;
  background-position: center center;
  position: relative;
  span#lottery-start {
      display: ${isStart ? 'none' : 'block'};
      cursor: pointer;
      position: absolute;
      left: calc(50% - 15px);
      top: calc(50% - 35px);
      color: #CD0302;
      font-size: 32px;
      font-weight: bold;
  }
  div#lottery-detail {
    display: ${isStart ? 'block' : 'none'};
    .lottery-title {
        font-size: 32px;
        color: #D20106;
        position: absolute;
        left: calc(50% - 78px);
        top: 50px;
    }
    .lottery-price {
        font-size: 32px;
        color: #D20106;
        position: absolute;
        left: calc(50% - 40px);
        top: 110px;
    }
    .lottery-desc {
        font-size: 16px;
        color: #CF8E61;
        position: absolute;
        left: calc(50% - 80px);
        top: calc(50% - 90px);
    }
    .lottery-user {
        font-size: 16px;
        color: #F9D6AE;
        position: absolute;
        left: calc(50% - 66px);
        top: calc(50% + 60px);
    }
    .lottery-round {
        font-size: 24px;
        color: #F9D6AE;
        position: absolute;
        left: calc(50% - 30px);
        top: calc(50% + 100px);
    }
    .lottery-envelope-cound {
        font-size: 24px;
        color: #F9D6AE;
        position: absolute;
        left: calc(50% - 65px);
        bottom: 70px;
    }
    .lottery-record {
        font-size: 12px;
        color: white;
        position: absolute;
        left: calc(50% - 20px);
        bottom: 30px;
        cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
  }
`;

const LotteryPriceWrapper = styled.div`
  margin-top: 50px;
  background-color: #D1251B;
  border-radius: 20px;
  text-align: center;
  .price {
    font-size: 64px;
    color: #FAD7B1;
    font-weight: bold;
  }
  .desc {
    font-size: 32px;
    color: #FAD7B1;
  }
  .operation {
        padding: 30px 0;
        div.withdraw {
            background-image: url(${WithdrawImage});
            background-size: 100% 100%;
            padding: 30px 0;
            width: 100%;
            font-size: 32px;
            color: #D1251B;
        }
        span.auth {
            background-image: url(${Button1});
            padding: 30px 100px;
            background-size: 100% 100%;
            font-size: 32px;
            color: #D1251B;
        }
        span.withdraw-button {
            background-image: url(${Button2});
            padding: 30px 100px;
            background-size: 100% 100%;
            font-size: 32px;
            color: #D1251B;
        }
  }
  @media only screen and (max-width: 1500px) {
    .operation {
        span.auth {
            padding: 30px 40px;
        }
        span.withdraw-button {
            padding: 30px 40px;
        }
    }  
  }
  @media only screen and (max-width: 768px) {
    .operation {
        span.auth {
            padding: 30px 40px;
        }
        span.withdraw-button {
            padding: 30px 40px;
        }
    }  
  } 
`;

const LotteryHistoryList = styled.div`
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
      width: 5px;
      border: none;
      background: transparent;
  }
  &::-webkit-scrollbar-button,
  &::-webkit-scrollbar-track-piece,
  &::-webkit-scrollbar-corner,
  &::-webkit-resizer {
      display: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: red;
  }

  ::-webkit-scrollbar-track {
  }
  @media only screen and (max-width: 768px) {
    height: 300px;
  } 
`;

const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 768px)'
})

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '10px',
    width                 : isDesktopOrLaptop ? '25%' : '90%'
  }
};

const [modalIsOpen,setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function closeModal(){
  setIsOpen(false);
}


  return (
    <HomepageWrapper>
      <HongbaoTitle>
        质押USDT抢红包赚取更多USDT
      </HongbaoTitle>
      <HongbaoContent>
        <LotteryWrapper>
            <span id="lottery-start" onClick={()=>{setIsStart(1)}}>开</span>
            <div id="lottery-detail">
                <div className="lottery-title">
                    恭喜您抢到
                </div>
                <div className="lottery-price">
                    0.18U
                </div>
                <div className="lottery-desc">
                    已存入装包,可直接提现
                </div>
                <div className="lottery-user">
                    TVak, Gos9的红包
                </div>
                <div className="lottery-round">
                    第1轮
                </div>
                <div className="lottery-envelope-cound">
                    红包剩余:5个
                </div>
                <div className="lottery-record" onClick={openModal}>
                    参与记录
                </div>
            </div>
        </LotteryWrapper>
        <LotteryPriceWrapper>
            <div className="price">
                0.000000
            </div>      
            <div className="desc">
                USDT 己赚
            </div>
            <div className="operation">
                <div className="withdraw">提取奖励</div>
            </div>
        </LotteryPriceWrapper>
        <LotteryPriceWrapper>
            <div className="price">
                0.000000
            </div>
            <div className="desc">
                USDT 己赚
            </div>
            <div className="operation">
                <span className="auth">授权</span>
                <span className="withdraw-button">提现</span>
            </div>
        </LotteryPriceWrapper>
        <Invite></Invite>
        <HongbaoFrameMessage>
          <h4>
            邀请规则
          </h4>
          只要您是一位活跃参与者,每当您直接推荐一位参与者,被推荐
          者每轮无论抢夺到多少金额,推荐者都将获得被推荐者抢夺金额
          5%的额外奖励,满1U即可提现。
        </HongbaoFrameMessage>
      </HongbaoContent>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p style={{fontSize: "24px"}}>参与记录</p>
          <LotteryHistoryList>
            <p style={{fontSize: "18px"}}>第一轮</p>
            <ul style={{listStyle: "none", padding: "0"}}>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
            </ul>
            <p style={{fontSize: "18px"}}>第二轮</p>
            <ul style={{listStyle: "none", padding: "0"}}>
            <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
              <li>Tger46564545619RvJiuKSPAKEKHAJGfgh 10.05U</li>
            </ul>
          </LotteryHistoryList>
        </Modal>
    </HomepageWrapper>
  );
}