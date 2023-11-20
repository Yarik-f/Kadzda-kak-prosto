import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempA *= i
        }
        return tempA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {

    console.log('USERS')
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}
const Users = React.memo(UsersSecret)
export const HelpToReactMemo = () => {

    console.log('HelpToReactMemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Yarik', 'Ivan', 'Dima'])


    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [])

    const addUser = () => {
        setUsers([...users, 'Valera'])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>+</button>
            {counter}
            <Users users={newUsers}/>
        </>
    )
}


type BooksSecretPropsType = {
    books: Array<string>
    addUser: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {

    console.log('Books')
    return (
        <div>
            <button onClick={props.addUser}>+</button>
            {props.books.map((b, i) => <div key={i}>{b}</div>)}
        </div>
    )
}
const Book = React.memo(BooksSecret)
export const LikeUseCallback = () => {

    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'CSS'])


    /*
        const newBook = useMemo(() => {
            return books.filter(b => b.toLowerCase().indexOf('a') > -1)
        }, [books])
    */

    const addUser = useCallback(() => {
        console.log(books)
        setBooks([...books, 'HTML'])
    }, [books])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book books={books} addUser={addUser}/>
        </>
    )
}
