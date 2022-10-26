import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Sangjin',
      company: 'Tooti',
      theme: 'dark',
      title: 'Front-end Engineer',
      email: 'coderyoon@gmail.com',
      message: 'go for it',
      fileName: 'sangjin',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Jinsol',
      company: 'PaPa Mobility',
      theme: 'light',
      title: 'Accountant',
      email: 'jinsol@gmail.com',
      message: 'go for it',
      fileName: 'jinsol',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Eric',
      company: 'Winnersmanner',
      theme: 'colorful',
      title: 'Product Manager',
      email: 'eric@gmail.com',
      message: 'go for it',
      fileName: 'Eric',
      fileURL: null,
    },
  ])
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && navigate('/')
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
