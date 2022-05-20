import t from 'prop-types';
import React from 'react';

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  type?: 'info' | 'positive' | 'negative' | 'warning';
  children: any
}

export type KindMap = Record<Required<AlertProps>['type'], string>;

const prefixCls = 'happy-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, type = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[type],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  type: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
