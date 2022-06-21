import Head from 'next/head';
import { google } from 'googleapis';
import { useState } from 'react';

export async function getServerSideProps({query}) {
  //Auth
  const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

  const sheets = google.sheets({ version: 'v4', auth });

      // Query

  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: 'A3:D6'
      });
  
      // Result
  
      const list = response.data.values;
      

  return {
    props: {
      list
    }
  }
}

const Bomb = ({username}) => {
  if(username === 'bomb') {
    throw new Error('badabm')
  }
  return `Hi ${username}`
}


export default function IndexPage({ list }) {
  const [username, setUserName] = useState('')
  console.log(list)
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      {list[0].map((el) => (
        <h2 key={el}>{el}</h2>
      ))}
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
      <Bomb username={username}/>
    </>
  );
}

