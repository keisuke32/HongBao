/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import MessageWrapper from './Message';
import Invite from '../../components/Invite';

import Frame from '../../images/frame.png';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

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
  background: #FFDC9B;
  padding: 2em;
  border-radius: 10px;
  color: #A1762F;
  margin-top: 6em;
  line-height: 2;
  margin-bottom: 5em;
  h2 {
    margin-top: 0;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    padding: 1em;
    line-height: 1.5;
    margin-bottom: 1em;
  }
`;

const HongbaoFrameMessage = styled.div`
  background-image: url(${Frame});
  background-size: 100% 100%;
  color: white;
  line-height: 2;
  height: 368px;
  margin-top: 5em;
  padding-left: 3em;
  padding-top: 1em;
  h4 {
      color: white;
  }
  @media only screen and (max-width: 875px) {
    line-height: 1.5;
    padding: 1px 2em;
    padding-right: 0;
    padding-bottom: 1em;
    margin-top: 1em;
    background-size: 100% 100%;
    height: auto;
  }
`;

  return (
      <HomepageWrapper>
        <HongbaoTitle>
          <FormattedMessage {...messages.hongbaoHeader} />
        </HongbaoTitle>
        <HongbaoContent>
          <HongbaoMainMessage>
              <H2>
                <FormattedMessage {...messages.mainMessageTitle} />
              </H2>
              <FormattedMessage {...messages.hongbaoMessage} />
          </HongbaoMainMessage>
          <MessageWrapper>
            <h4>
              参与规则
            </h4>
            每位参与者进入红包抢夺红包,其质押保证金不能低于所参与抢夺的红包池资金,质押保证金在未参
            与任何红包抢夺时可随时释放。例如:A想参与10U红包抢夺,A需质押不低于10U的保证金后才能参
            与抢夺。B想参与200U红包池抢夺,B需质押不低于200U保证金后才能参与抢夺。每轮红包抢夺最少者
            合约将自动将其质押保证金注入红包奖金池地址创建新一轮游戏,如质押保证金低于该红包奖金池时将
            无法参与红包抢夺。
          </MessageWrapper>
          <HongbaoFrameMessage>
            <h4>
              手续费规则
            </h4>
            10U红包池,将收取10%即1U平台手续费。<br/>
            20U红包池,将收取10%即2U平台手续费。<br/>
            50U红包池,将收取10%即5U平台手续费。<br/>
            1000红包,将收取10%即10U平台手续费。<br/>
            200U红包池,将收取10%即20U平台手续费。<br/>
            500U红包池,将收取10%即50U平台手续费。<br/>
          </HongbaoFrameMessage>
          <MessageWrapper>
            <h4>
              手续费规则
            </h4>
              1Q: 我没有质押任何保证金能参与红包抢夺吗?<br/>
              1A: 在没有满足质押保证金额度的条件下, 您将无法参与任何红包池的抢夺。<br/>
              <br/>
              2Q: 我不是当前轮红包奖金池开启者, 我参与抢夺吗?<br/>
              2A: 只要您账户中质押保证金不低于当前红包奖池金, 您可以参与抢夺。<br/>
              <br/>
              3Q: 我是本轮红包奖金池创建者, 本轮我能百分百抢夺到红包吗?<br/>
              3A: 红包抢夺是否成功取决于您参与抢夺的速度快慢。<br/>
              <br/>
              4Q: 我质押的保证金什么时候能释放?<br/>
              4A: 只要您当前没有在进行中未结束的抢夺,您可以随时释放您的质押保证金。<br/>
              <br/>
              5Q: 我推荐的人参与了红包抢夺, 但是我没有获得推广奖金?<br/>
              5A: 当您的质押保证金低于10U时, 智能合约将会把您列为非活跃者您将无法获得推广奖金。
          </MessageWrapper>
          <Invite></Invite>
          <MessageWrapper>
            <h4>
              邀请规则
            </h4>
            只要您是一位活跃参与者,每当埃直接推荐一位参与者,被推荐者每轮无论抢夺到辛少金額,推荐者都将获得被推荐者抢夺金額5%的额外奖励,满U即可提现。
          </MessageWrapper>
        </HongbaoContent>
      </HomepageWrapper>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);