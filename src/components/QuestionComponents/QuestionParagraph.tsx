import React, { memo, FC, CSSProperties } from 'react'
import styles from './QuestionParagraph.module.scss'

type PropsType = {
    text: string,
    isCenter?: boolean
}

const QuestionParagraph: FC<PropsType> = memo(function QuestionParagraph({text, isCenter}) {
    // 样式
    const style: CSSProperties = {}
    if(isCenter){
        style.textAlign = 'center'
    }

    // 换行
    const textList = text.split('\n')

    return (
        <p className={styles.para} style={style}>
            {textList.map((t,index) => {
                return (
                    <span key={index}>
                        {index > 0 && <br />}
                        {t}
                    </span>
                )
            })}
        </p>
    )
})



export default QuestionParagraph