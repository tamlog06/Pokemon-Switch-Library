import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Button_1Start.module.scss';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:120 */
export const Button_1Start: FC<Props> = memo(function Button_1Start(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.start}>Start</div>
    </div>
  );
});
