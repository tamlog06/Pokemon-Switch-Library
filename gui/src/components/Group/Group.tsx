import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { Button_Reload } from './Button_Reload/Button_Reload';
import { Button_Reset } from './Button_Reset/Button_Reset';
import { Button_Start } from './Button_Start/Button_Start';
import classes from './Group.module.scss';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';
import { Radio_Button } from './Radio_Button/Radio_Button';

interface Props {
  className?: string;
}
/* @figmaId 133:180 */
export const Group1: FC<Props> = memo(function Group1(props = {}) {
  return (
    <>
      <div className={classes.image}></div>
      <div className={classes.text}>Output</div>
      <div className={classes.text2}>Pokémon Switch Library</div>
      <div className={classes.rectangle}></div>
      <div className={classes.test_picture}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.text3}>COM Port : </div>
      <div className={classes.text4}>Camera ID : </div>
      <div className={classes.text5}>Serial Settings</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <Button_Reload className={classes.button} />
      <Button_Reload className={classes.button2} />
      <div className={classes.rectangle5}></div>
      <div className={classes.text6}>Command Settings</div>
      <div className={classes.image2}>
        <ImageIcon className={classes.icon} />
      </div>
      <div className={classes.image3}>
        <ImageIcon2 className={classes.icon2} />
      </div>
      <div className={classes.text7}>Automation</div>
      <div className={classes.rectangle6}></div>
      <Button_Start className={classes.button3} />
      <Button_Reset className={classes.button4} />
      <div className={classes.text8}>Manual</div>
    </>
  );
});
