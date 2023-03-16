import React from 'react';
import styles from './Card.module.css';
import cartIcon from '../../assets/images/icon-cart.svg';

export default function Card(props) {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_image}>
        </div>
        <div className={styles.card_content}>
            <h2>{props.subtitle}</h2>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={styles.card_prices}>
                <h3>{props.soldedPrice}</h3>
                <h4>{props.notSoldedPrice}</h4>
            </div>
            <div className={styles.btn_buy}>
                <img src={cartIcon} alt="icon cart" />
                <p>Add to cart</p>
            </div>
        </div>
    </div>
  )
}
