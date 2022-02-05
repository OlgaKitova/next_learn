import { useRouter } from 'next/router';
import React from 'react';

export default function () {
    const {query} = useRouter()
  return <div>
      <h2>Пользователь</h2>
      <p>Пользователь {query.id}</p>
  </div>;
}
