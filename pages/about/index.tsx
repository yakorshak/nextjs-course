// index - специальное название, теперь роут localhost:3000/about на этот файл

import React from "react";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";


export default function About() {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return(
    <MainLayout title={'About page'}>
        <h1>About Page</h1>
        <button onClick={linkClickHandler}>Go back to the home</button>
        <button onClick={() => Router.push('/posts')}>Go to the posts page</button>
    </MainLayout>
  )
}