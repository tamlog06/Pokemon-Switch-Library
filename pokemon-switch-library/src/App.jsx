
import React from 'react';
import cn from 'classnames';

import styles from './UntitledPage.module.scss';

export default function UntitledPage(props) {
  return (
    <div className={cn(styles.root, 'untitled-page')}>
      <img className={styles.decorator} src={require('./assets/background.png')} alt="alt text" />

      <div className={styles.flexRow}>
        <div className={styles.flexRow__item}>
          <div className={styles.flexCol}>
            <div className={styles.flexCol__item}>
              <h1 className={styles.red_grad}>Pokémon Switch Library</h1>
            </div>

            <div className={styles.flexCol1}>
              <div className={styles.rect4} />

              <div className={styles.flexRow1}>
                <div className={styles.flexRow1__item}>
                  <div className={styles.content_box}>
                    <div className={styles.flexCol2}>
                      <div className={styles.flexCol2__item}>
                        <h2 className={styles.red_grad}>Serial Settings</h2>
                      </div>

                      <div className={styles.flexRow2}>
                        <div className={styles.flexRow3}>
                          <h1 className={styles.title}>COM Port :    </h1>
                          <div className={styles.flexRow3__item}>
                            <div className={styles.rect2} />
                          </div>
                        </div>

                        <div className={styles.flexRow2__spacer} />
                        <div
                          className={styles.wrapper}
                          style={{ '--src': `url(${require('./assets/reload.png')})` }}>
                          <h2 className={styles.medium_title}>Reload</h2>
                        </div>

                      </div>

                      <div className={styles.flexRow4}>
                        <div className={styles.flexRow5}>
                          <h1 className={styles.title1}>Camera ID :    </h1>
                          <div className={styles.flexRow5__item}>
                            <div className={styles.rect21} />
                          </div>
                        </div>

                        <div className={styles.flexRow4__spacer} />

                        <div
                          className={styles.wrapper}
                          style={{ '--src': `url(${require('./assets/reload.png')})` }}>
                          <h2 className={styles.medium_title}>Reload</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.flexRow1__spacer} />
                <div className={styles.flexRow1__item}>
                  <div className={styles.content_box1}>
                    <div className={styles.flexCol3}>
                      <div className={styles.flexCol3__item}>
                        <h2 className={styles.red_grad}>Command Settings</h2>
                      </div>

                      <div className={styles.flexRow6}>
                        <div className={styles.flexRow6__item}>
                          <img
                            className={styles.icon}
                            src={require('./assets/circle.png')}
                            alt="alt text"
                          />
                        </div>
                        <div className={styles.flexRow6__spacer} />
                        <h1 className={styles.title2}>Manual</h1>
                      </div>

                      <div className={styles.flexRow7}>
                        <div className={styles.flexRow7__item}>
                          <img
                            className={styles.icon}
                            src={require('./assets/circle.png')}
                            alt="alt text"
                          />
                        </div>
                        <div className={styles.flexRow7__spacer} />
                        <h1 className={styles.title3}>Automation</h1>
                        <div className={styles.flexRow7__spacer} />
                        <div className={styles.rect3} />
                      </div>

                      <div className={styles.flexRow8}>
                        <div
                          className={styles.wrapper}
                          style={{ '--src': `url(${require('./assets/start.png')})` }}>
                          <h2 className={styles.medium_title}>Start</h2>
                        </div>

                        <div className={styles.flexRow8__spacer} />

                        <div className={styles.wrapper1}>
                          <h2 className={styles.medium_title1}>Reset</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexRow__spacer} />
        <div className={styles.flexRow__item1}>
          <div className={styles.flexCol4}>
            <div className={styles.flexCol4__item}>
              <h2 className={styles.red_grad}>Output</h2>
            </div>
            <div className={styles.rect1} />
          </div>
        </div>
      </div>
    </div>
  );
}

UntitledPage.inStorybook = true;
