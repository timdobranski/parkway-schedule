import Image from "next/image";
import styles from "./page.module.css";
import Form from "../components/Form/Form";
import Schedule from "../components/Schedule/Schedule";

export default function Home() {
  return (
    <div className='app'>
        <Form />
        <Schedule />
    </div>
  );
}
