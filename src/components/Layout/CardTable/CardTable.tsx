import React, {FC, ReactNode} from 'react'
import styles from "./cardtable.module.css"

interface ICardTableProps{
    children?: ReactNode
}
export const CardTable:FC<ICardTableProps> = ({children}) => {
  return (
    <div className={styles.cardTableContainer}>{children}</div>
  )
}
