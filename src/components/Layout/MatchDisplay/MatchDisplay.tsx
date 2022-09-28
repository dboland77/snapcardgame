import React, {FC} from 'react'
import styles from "./matchdisplay.module.css"

interface IMatchDisplayProps {
  matchType: string;
}
export const MatchDisplay:FC<IMatchDisplayProps> = ({matchType}) => {
  return (
    <div className={styles.matchContainer}>
    <p>{`SNAP ${matchType}!`}</p>
    </div>
  )
}
