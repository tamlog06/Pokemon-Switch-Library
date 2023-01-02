import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Button_1Reset.module.scss';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:104 */
export const Button_1Reset: FC<Props> = memo(function Button_1Reset(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.reset}>Reset</div>
    </div>
  );
});
