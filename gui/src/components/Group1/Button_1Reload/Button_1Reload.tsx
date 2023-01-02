import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Button_1Reload.module.scss';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:103 */
export const Button_1Reload: FC<Props> = memo(function Button_1Reload(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.reload}>Reload</div>
    </div>
  );
});
