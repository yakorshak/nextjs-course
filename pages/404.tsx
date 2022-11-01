import Link from "next/link";
import { MainLayout } from "./components/MainLayout";
import classes from '../styles/error.module.css'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>Please <Link href={'/'}>go back</Link> to the safety</p>
    </MainLayout>
  )
}