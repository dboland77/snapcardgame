import React, {FC} from 'react'
import styles from "./resultdisplay.module.css"

interface IResultDisplayProps {
  valueMatches: number;
  suitMatches: number
}
export const ResultDisplay:FC<IResultDisplayProps> = ({valueMatches, suitMatches}) => {
  return (
    <div className={styles.resultcontainer}>
    <p>VALUE MATCHES : {valueMatches}</p>
    <p>SUIT MATCHES : {suitMatches}</p>
    </div>
  )
}
