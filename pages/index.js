import Link from 'next/link';
import React from 'react';

export default function Index() {
  return <div>
      <h1>Главная</h1>
      <Link href="/users"> Пользователи </Link>
  </div>;
}
