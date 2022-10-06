import React from 'react'
// import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.containerItem, blockClass)
  const containerFooter = generateBlockClass(styles.containerFooter, blockClass)

  // const productInfo = useProduct()
  const {
    orderForm: { items },
  } = useOrderForm()

  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={containerItem}>
            <div>
              <img src={item.imageUrls.at1x} alt="" />
            </div>
            <div>
              <p>{item.name} </p>
            </div>
            <div>
              <p>{item.id} </p>
              <p>$ {item.price / 100} </p>
              <p>Cant: {item.quantity} </p>
            </div>
          </div>
        )
      })}
      <div className={containerFooter}>
        <p>Tu carrito tiene {items.length} productos</p>
        <ButtonGroup />
      </div>
    </div>
  )
}

export default AddToCartInfo
