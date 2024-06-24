import React from "react";
import style from "./Footer.module.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { sendMessage } from "@/app/action";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <button type="submit" disabled={pending} className={style.submit}>
      {pending ? <div className={style.spinner}></div> : "Send"}
    </button>
  );
};

const Footer = () => {
  return (
    <div id="contact" className={style.footer}>
      <div className={style.container}>
        <div className={style.contactWrapper}>
          <div className={style.info}>
            <h1>Lets connect</h1>
            <p>Follow me on social media for updates and more.</p>
            <div className={style.socials}>
              <a href="">
                <FaLinkedin size={30} />
              </a>
              <a href="">
                <FaGithub size={30} />
              </a>
              <a href="">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div className={style.contact}>
            <h1>Contact</h1>
            <p>
              Feel free to reach out for collaborations or just a friendly chat:
            </p>
            <div className={style.email}>
              <p>Email</p>
              <p>anjasferdiansyah123@gmail.com</p>
            </div>
            <div className={style.phone}>
              <p>Phone</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </div>
        <div className={style.formWrapper}>
          <h1>Have Something to say?</h1>
          <form
            action={async (formData) => {
              const { response, error } = await sendMessage(formData);

              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Your message has been sent. Thank you!");
            }}
          >
            <div className={style.inputWrapper}>
              <label htmlFor="name">Name</label>
              <input maxLength={500} required name="name" type="text" />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input required maxLength={500} name="email" type="email" />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input name="phoneNumber" type="text" />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="message">Message</label>
              <input name="message" required type="text" />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
