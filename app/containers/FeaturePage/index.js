/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Frame2 from '../../images/frame2.png';
import Frame from '../../images/frame.png';
import Envelope from './Envelope';
import Invite from '../../components/Invite';
import WithdrawButton from './WithdrawButton';
import List from './List';
import ListItem from './ListItem';

import EnvelopeButton from '../../images/button.png';
import ScrollbarImage from '../../images/scrollbar.png';

export default function FeaturePage() {

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

const HongbaoMainMessage = styled.div`
  width: 100%;
  background-image: url(${Frame2});
  background-size: 100% 100%;
  padding: 3em;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    padding: 1em;
  }
`;

const HongbaoMainEnvelope = styled.div`
  display: inline-grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 30px;
  margin-bottom: 50px;
  @media only screen and (max-width: 1300px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 1200px) {
    grid-gap: 15px;
  }
  @media only screen and (max-width: 768px) {
    grid-gap: 30px;
  }
  @media only screen and (max-width: 700px) {
    grid-gap: 20px;
  }
`;

const HongbaoOpenEnvelope = styled(Link)`
  background-image: url(${EnvelopeButton});
  background-size: inherit;
  text-decoration: none;
  padding: 10px 80px;
  font-size: 32px;
  color: white;
  @media only screen and (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    padding: 10px 50px;
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
  @media only screen and (max-width: 1000px) {
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

const ListPagination = styled.div`
  margin-top: 20px;
  text-align: center;
  color: white;
`;

const RecordMenu = styled.div`
  padding-left: 20px;
  color: #FFD09C;
  a {
    margin-left: 30px;
  }
  a.active {
    border: 1px solid #FFD09C;
    padding: 0.5em;
    border-radius: 2em;
  }
`;

const ListWrapper = styled.div`
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: 70% 30%;
  color: white;
  position: relative;
`;

const listArray = [
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"},
  {"date":"2021-04-11 12:03:52", "user":"Tger...flowRight", "price":"抢到0.5U"}
];

const compArray = [];
listArray.forEach((item) => {
  compArray.push(
    <ListItem>
      <span>{item.date}</span>
      <span>{item.user}</span>
      <span>{item.price}</span>
    </ListItem>
  );
})

const numListArray = [
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
  {"num":"1636.32"},
];

const CompListWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 30%;
  right: 0;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
      width: 8px;
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
    background-color: white;
  }

  ::-webkit-scrollbar-track {
    background-image: url(${ScrollbarImage});
    background-repeat: repeat-y;
    background-size: contain;
    background-position: center center;
  }
`;

const compNumArray = [];
numListArray.forEach((item) => {
  compNumArray.push(
    <li>
      {item.num}
    </li>
  );
})

  return (
    <HomepageWrapper>
      <HongbaoTitle>
        质押USDT抢红包赚取更多USDT
      </HongbaoTitle>
      <HongbaoContent>
        <HongbaoMainMessage>
          <HongbaoMainEnvelope>
            <Envelope price="10" count="5"></Envelope>
            <Envelope price="10" count="5"></Envelope>
            <Envelope price="10" count="5"></Envelope>
            <Envelope price="10" count="5"></Envelope>
            <Envelope price="10" count="5"></Envelope>
            <Envelope price="10" count="5"></Envelope>
          </HongbaoMainEnvelope>
          <HongbaoOpenEnvelope to="/lottery">开启红包</HongbaoOpenEnvelope>
        </HongbaoMainMessage>
        <Invite></Invite>
        <HongbaoFrameMessage>
          <h4>
            邀请规则
          </h4>
          只要您是一位活跃参与者,每当您直接推荐一位参与者,被推荐
          者每轮无论抢夺到多少金额,推荐者都将获得被推荐者抢夺金额
          5%的额外奖励,满1U即可提现。
        </HongbaoFrameMessage>
        <WithdrawButton price="17.23"></WithdrawButton>
        <RecordMenu>
          <a className="active">奖励记录</a>
          <a>邀请记录</a>
        </RecordMenu>
        <ListWrapper>
          <List>
            {compArray}
          </List>
          <CompListWrapper>
            <List>
              {compNumArray}
            </List>
          </CompListWrapper>
        </ListWrapper>
        <ListPagination>
          <a>上一页</a> | 
          <a>下一页</a>
        </ListPagination>
      </HongbaoContent>
    </HomepageWrapper>
  );
}
