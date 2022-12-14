import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMassageType = {
	message: MessageType
}
const FriendMessage = (props: FriendMassageType) => {
	return (
		<div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
			<div className={s.friendImageAndText}>
				<div
					id={'hw1-friend-time-' + props.message.id}
					className={s.friendTime}
				>
				<img id={'hw1-friend-avatar-' + props.message.id}
					 src={props.message.user.avatar}
				/>
					<span>{props.message.message.time}</span>
				</div>
				<div className={s.friendText}>
					<div
						id={'hw1-friend-name-' + props.message.id}
						className={s.friendName}
					>
						<span>{props.message.user.name}</span>
					</div>
					<pre
						id={'hw1-friend-text-' + props.message.id}
						className={s.friendMessageText}
					>
                        <span>{props.message.message.text}</span>
                    </pre>
				</div>
			</div>

		</div>
	)
}

export default FriendMessage
