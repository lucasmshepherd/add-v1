import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/users/action'
import styles from './header.module.sass'

export default function Balance() {
  let balance = "DISCORD"
  const dispatch = useDispatch()
  //const connected = useSelector((state) => state.users.connected)
  const connected = "false"

  function loginUserNow() {
    dispatch(loginUser());
  }

  if (connected == "true") {
    balance = "1,078,234,519.34"
  }

  return (
    <> 
      <div data-connected={connected} className={styles.balance}>
        <a href="https://discord.gg/anarchist-development-dao" rel="noreferrer" target="_blank"><span>{balance}</span></a>
      </div>
    </>
  )
}