/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  hongbaoHeader: {
    id: `${scope}.hongbao.header`,
    defaultMessage: '质押USDT抢红包赚取更多USDT',
  },
  hongbaoMessage: {
    id: `${scope}.hongbao.message`,
    defaultMessage:
      '是一款通过智能合约完成拼手气红包抢夺的游戏,红包共分六个池10U、20V、50U、1000、200U、500U。六个红包池每轮的创建者将支付10%的资金作为平台手续费,剩下90%的资金将进入每轮红包奖金池进行抢夺。100、200、50U三个红包奖金池将通过5人拼手气随机抢夺,5人中由抢到金额最少者使用其质押的保证金创建新的红包奖金池进入下一轮游戏。 1000、2000、500U三个红包奖金池将通过10人拼手气随机抢夺,10人中由抢到金额最少者使用其质押的保证金创建新的红包奖金池进入下一轮游戏。',},
  mainMessageTitle: {
    id: `${scope}.hongbao.main-message.title`,
    defaultMessage: 'HongBao.Farm',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
