import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import contactImg from "../../public/images/svgs/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransitionEffect from "@/components/TransitionEffect";

const ContactMe = () => {
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z2xlwyn",
        "template_ofwixvl",
        formData.current,
        "BzLriAX6eDubewhvb"
      )

      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    
      toast.success("Message Sent 👏", {
        theme:"colored",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };

  return (
    <>
      <Head>
        <title>Prakhar | Contact Me Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main>
        <Layout>
          <AnimatedText text="Get In Touch With Me" />

          <section className="mt-16" id="contact">
            <div className="flex flex-row items-center justify-between">
              <div className="h-auto w-1/2 gap-6">
                <Image src={contactImg} alt="contact-logo" loading={"lazy"} />
              </div>

              <div className="h-auto w-1/2">
                <h2 className="mb-8 text-center font-bold text-2xl text-dark/75 dark:text-light/75 tracking-wider">
                  Get In Touch
                </h2>

                <form ref={formData} onSubmit={handleSubmit}>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col relative mb-5">
                      <label
                        className="font-semibold text-start
                    text-dark/75 dark:text-light/75 tracking-wider"
                      >
                        First Name
                      </label>
                      <input
                        className="p-3 rounded-md border-none bg-white dark:bg-dark"
                        type="text"
                        placeholder="Enter your First Name"
                        name="user_first_name"
                      />
                    </div>

                    <div className="flex flex-col relative mb-5">
                      <label className="font-semibold text-start text-dark/75 dark:text-light/75 tracking-wider">
                        Last Name
                      </label>
                      <input
                        className="p-3 rounded-md border-none bg-white dark:bg-dark"
                        type="text"
                        placeholder="Enter your Last Name "
                        name="user_last-Name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col relative mb-5">
                      <label
                        className="font-semibold text-start
                    text-dark/75  dark:text-light/75 tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        className="p-3 rounded-md border-none bg-white dark:bg-dark"
                        type="email"
                        placeholder="Enter Your Contact Mail"
                        name="user_email"
                      />
                    </div>

                    <div className="flex flex-col relative mb-5">
                      <label
                        className="font-semibold text-start
                    text-dark/75 dark:text-light/75 tracking-wider"
                      >
                        Contact Number
                      </label>
                      <input
                        className="p-3 rounded-md border-none bg-white dark:bg-dark"
                        type="tel"
                        placeholder="Enter your Contact Number"
                        name="user_phone"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label
                      id="message"
                      className="font-semibold text-start
                    text-dark/75 dark:text-light/75 tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                    className=" text-dark/80 place rounded-md border-none bg-white dark:bg-dark"
                      rows="6"
                      id="message"
                      name="message"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <div className=" h-[50px]  w-full  border-none shadow-lg rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 outline-none cursor-pointer">
                      <button className="relative w-full h-full"  onClick={notify} type="submit" >
                        <span className="font-semibold absolute p-4   left-[50%] top-6 tracking-widest text-white translate-y-[-50%]  translate-x-[-50%]">send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <ToastContainer />
        </Layout>
      </main>
    </>
  );
};

export default ContactMe;
