import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  })
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && navigate('/')
    })
  })

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
  }

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
