import { memo } from 'react';
import type { FC } from 'react';
import React, { useState } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Radio_Button.module.scss';

interface Radio {
    label?: string;
    value?: string;
}

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

/* @figmaId 50:120 */
export const Radio_Button: FC<Props> = memo(function Radio_Button(props = {}) {
  /* 選択中のボタン */
  const [selected, setSelected] = useState('auto');
  /** ラジオボタン切り替えイベント */
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setSelected(event.target.value);
  /** ラジオボタン */
  const radioButtons: Radio[] = [
    {
        label: "Manual",
        value: "manual"
    },
    {
        label: "Automation",
        value: "auto"
    },
  ]

  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${classes.column}`}>
        {radioButtons.map(radio => {
          return (
              <div className="col-4">
                {/* checked属性に式を定義する */}
                <input className="form-check-input" type="radio" name="settings" 
                    value={radio.value} checked={radio.value === selected} onChange={changeValue}/>
                <label className="form-check-label">
                    <span className="fs-6">{radio.label}</span>
                </label>
              </div>
          )
        })}
      </div>
    </div>
  );
});
