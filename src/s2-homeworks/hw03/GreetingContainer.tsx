import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
	users: Array<UserType>
	addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error:string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
	if (!name || name.trim() == '' ) {
		return setError('Ошибка! Введите имя!')
	}
	addUserCallback(name)
	setName('')

}

export const pureOnBlur = (name: string, setError: (error:string) => void) => {
	if(!name) setError('Пустое имя')
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=>void) => {
	if (e.key === 'Enter') {
		addUser()
	}
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
																	 users,
																	 addUserCallback,
																 }) => {
	const [name, setName] = useState<string>('')
	const [error, setError] = useState<string>('')

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		error && setError('')
		setName(e.currentTarget.value)
	}
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback)
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e: KeyboardEvent) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length
	const lastUserName = users[users.length - 1]?.name;

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	)
}

export default GreetingContainer
