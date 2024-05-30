import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";

import "./Contact.css";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sehuxks",
        "template_z3diws5",
        form.current,
        "DFnADvImGeH4AO_5V"
      )
      .then(
        (result) => {
          enqueueSnackbar("Send Successfully!", { variant: "success" });
          console.log(result.text);
          console.log("Message Sent Successfully");
        },
        (error) => {
          enqueueSnackbar("Error!", { variant: "error" });
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <React.Fragment>
      <h2 className="common-heading">Contact Us</h2>
      <div className="box-centre">
        <div className="contact-container">
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg"
              alt="Image"
            />
          </div>
          <div className="divider"></div>
          <div className="contact-section">
            {/* <p>Please fill out the form below to get in touch with us.</p> */}
            <form ref={form} onSubmit={sendEmail} className="contact-inputs">
              <label>Name : </label>
              <input
                className="contact-input-text"
                type="text"
                placeholder="Name"
                name="user_name"
              />

              <label>Email : </label>
              <input type="email" placeholder="Email" name="user_email" />

              <label>Message : </label>
              <textarea
                cols="30"
                rows="10"
                placeholder="Enter the message you want to sent..."
                name="message"
              />

              <div className="button-send">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
