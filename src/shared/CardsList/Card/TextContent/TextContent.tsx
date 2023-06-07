import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { TitleComponent } from './Title';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData>
        Дмитрий Гришин
      </MetaData>
      <TitleComponent>
        Следует отметить, что новая модель организационной деятельности...
      </TitleComponent>
    </div>
  );
}
