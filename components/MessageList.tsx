import Image from 'next/image';
import React, { Ref } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/chat.module.scss';

export default function MessageList({ innerRef }: { innerRef: Ref<HTMLUListElement> }) {
    const { messages } = useSelector(({ messages }: { messages: Message[]; }) => ({ messages }));
    return (<>
        <ul className={styles['messages']} ref={innerRef}>
            {messages.map((message: Message, key) => (
                <MessageItem
                    message={message}
                    key={key}
                />
            ))}
        </ul>
    </>);
}

function MessageItem({ message }: { message: Message; }) {
    return (<>
        <li className={styles['message']}>
            <div className={styles['avatar']}>
                <Image
                    src={message.author.avatar}
                    width={40}
                    height={40}
                    layout='raw'
                    alt={message.author.username + ' avatar'}
                />
            </div>
            <div className={styles['content-container']}>
                <span className={styles['author']}>{message.author.username}</span>
                <span className={styles['content']}>{message.content}</span>
            </div>
        </li>
    </>);
}