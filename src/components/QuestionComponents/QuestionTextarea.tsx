import React, { memo, FC } from 'react'
import styles from './QuestionTextarea.module.scss'

type PropsType = {
    fe_id: string,
    props: {
        title: string,
        placeholder?: string
    }
}

const QuestionTextarea: FC<PropsType> = memo(function QuestionTextarea({ fe_id, props }) {
    const { title, placeholder } = props
    return (
        <>
            <p>{title}</p>
            <div className={styles.textAreaWrapper}>
                <textarea name={fe_id} placeholder={placeholder} rows={5}></textarea>
            </div>
        </>
    )
})



export default QuestionTextarea