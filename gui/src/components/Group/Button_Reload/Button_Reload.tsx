import { memo } from 'react';
import type { FC } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import resets from '../../_resets.module.scss';
import classes from './Button_Reload.module.scss';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:103 */
export const Button_Reload: FC<Props> = memo(function Button_Reload(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.reload}>Reload</div>
      {/* <Button variant="contained">Contained</Button> */}
    </div>
  );
});
