import Link from 'next/link';
import React from 'react';
import MainContainer from '../components/MainContainer';
import styles from '../styles/styleForUser.module.css';

export default function Users({users}) {
  return <MainContainer>
      <h1>Список пользователей</h1>
      <ul>
          {
              users.map(user => 
                <li className={styles.link} key={user.id}>
               <Link href={`/users/${user.id}`}><a>{user.name}</a></Link>
              </li>
)
          }
      </ul>
  </MainContainer>;
}

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
      props: {users},
    }
  }
