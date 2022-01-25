/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  homepage: {
    id: `${scope}.homepage`,
    defaultMessage: '主页',
  },
  hongbao: {
    id: `${scope}.hongbao`,
    defaultMessage: '红包',
  },
  wallet: {
    id: `${scope}.wallet`,
    defaultMessage: '连接钱包',
  },
});
