import React, { useState } from "react";
import hello from "../assets/hello.png";
import { toast } from "react-hot-toast";
import {motion} from "framer-motion";
import {db} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const submitHandler = async(e) => {
    e.preventDefault();
    setDisabledBtn(true);
    try
    {
      await addDoc(collection(db,"contacts"),
      {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisabledBtn(false);
    }
    catch(error)
    {
      toast.error("Error");
      console.log(error);
      setDisabledBtn(false);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form} >
          <h2>Contact me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button disabled={disabledBtn} className={disabledBtn?"disableBtn":""} type="submit" {...animations.button}>Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={hello} alt="graphic"/>
      </aside>
    </div>
  );
};

export default Contact;
