import React, { memo, FC } from 'react'
import styles from './QuestionCheckbox.module.scss'

type PropsType = {
    fe_id: string,
    props: {
        title: string,
        isVertical: boolean,
        list: Array<{
            value: string,
            text: string,
            checked: boolean
        }>
    }
}

const QuestionCheckbox: FC<PropsType> = memo(function QuestionCheckbox({fe_id, props}) {
    const { title, isVertical, list = [] } = props
    return (
        <>
            <p>{title}</p>
            <ul className={styles.list}>
                {list.map(item => {
                    const { value, text, checked } = item

                    let className
                    if(isVertical) className = styles.verticalItem
                    else className = styles.horizontalItem

                    return <li key={value} className={className}>
                        <label>
                            <input type="checkbox" checked={checked} />
                            {text}
                        </label>
                    </li>
                })}
            </ul>
        </>
    )
})



export default QuestionCheckbox