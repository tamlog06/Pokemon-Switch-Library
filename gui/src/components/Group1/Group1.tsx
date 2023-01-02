import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { Button_1Reload } from './Button_1Reload/Button_1Reload';
import { Button_1Reset } from './Button_1Reset/Button_1Reset';
import { Button_1Start } from './Button_1Start/Button_1Start';
import classes from './Group1.module.scss';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';

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
      <Button_1Reload className={classes.button} />
      <Button_1Reload className={classes.button2} />
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
      <Button_1Start className={classes.button3} />
      <Button_1Reset className={classes.button4} />
      <div className={classes.text8}>Manual</div>
    </>
  );
});
