import { useRouter } from 'next/router';
import React from 'react';
import MainContainer from '../../components/MainContainer';

export default function ({user}) {
    const {query} = useRouter()
  return <MainContainer>
      <h2>Пользователь</h2>
      <p>Пользователь {query.id}</p>
      <p>Имя пользователя: {user.name}</p>
  </MainContainer>;
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user},
  }
}