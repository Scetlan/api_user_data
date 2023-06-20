import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IItem, IListProps } from '../Control';
import styles from './dropdownmenu.css';

export function DropDownMenu({ list }: IListProps) {
  const menuModal = document.querySelector('#menuModal');
  if (!menuModal) return null;

  return ReactDOM.createPortal(
    (<div className={styles.containerMenu}>
      <ul className={styles.list}>
        {list.map((item: IItem) => (
          <li className={styles.item} key={item.id}>{item.svg}{item.value}</li>
        ))}
      </ul>
    </div>), menuModal);
}
