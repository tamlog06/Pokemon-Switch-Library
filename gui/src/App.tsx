import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.scss';
import resets from './components/_resets.module.scss';
import { Group1 } from './components/Group/Group';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Group1 />
    </div>
  );
});
