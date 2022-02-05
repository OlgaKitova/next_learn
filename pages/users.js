import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState([
        {id:1,name:'Lena'},
        {id:2,name:'Inna'},
        {id:3,name:'Renata'},
    ])
  return <div>
      <h1>Список пользователей</h1>
      <ul>
          {
              users.map(user => 
                <li key={user.id}>
               <Link href={`/users/${user.id}`}><a>{user.name}</a></Link>
              </li>
)
          }
      </ul>
  </div>;
}
