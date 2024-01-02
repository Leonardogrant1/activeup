"use client";

import { RiMapPin2Fill } from "react-icons/ri";
import { VscMail } from "react-icons/vsc";

import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";

import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setOffset } from "@/redux/features/contactFormOffsetSlice";

type Props = {
  request?: boolean;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#73c4c5",
    },
  },
});

export default function ContactForm({ request }: Props) {
  const [selectedMethod, setSelectedMethod] = useState<
    "email" | "location" | "phone"
  >("email");

  const contactForm = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!contactForm.current) return;

    dispatch(setOffset(contactForm.current?.offsetTop));
  }, [contactForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: fullname,
      email: email,
      message: message,
      phone: phone,
    };

    alert(JSON.stringify(data));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("diaosd", res);

    if (res.ok) {
      alert("Success"); //TODO Create custom alert dialog with message state handlin (Redux?)
    }
    if (!res.ok) {
      alert("Something went wrong");
    }
  };

  const loadContent = (selectedMethod: "email" | "location" | "phone") => {
    switch (selectedMethod) {
      case "email":
        return (
          <ThemeProvider theme={theme}>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[780px] p-4 bg-white rounded-lg"
            >
              <div className="flex flex-col  space-y-10 h-full w-full p-4 justify-center">
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="inline-flex flex-1 flex-col space-y-5">
                    <TextField
                      className="w-full rounded-3xl"
                      label="Ihr Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleOutlined />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event) => {
                        setFullname(event.target.value);
                      }}
                      required
                    />

                    <TextField
                      className="w-full rounded-3xl"
                      label="E-Mail Adresse"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutline />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />

                    <TextField
                      className="w-full rounded-3xl"
                      label="Rufnummer"
                      type="tel"
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneOutlined />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </div>

                  <div className="inline-flex flex-1">
                    <TextField
                      className="w-full "
                      multiline
                      placeholder="Deine Nachricht "
                      rows={14}
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-3xl text-[var(--primary-color)] bg-white transition-[background-color] hover:bg-[var(--primary-color)] border-[var(--primary-color)] border-[2px] hover:text-white py-4 px-5 self-center"
                >
                  Jetzt absenden
                </button>
              </div>
            </form>
          </ThemeProvider>
        );

      case "location":
        return (
          <section className="v w-full ">
            <div className="w-full h-[70vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.335260070027!2d8.262809712490082!3d50.023813417871615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd964e09a647fd%3A0xb63fb1a9aa0fe2c6!2sBiebricher%20Str.%207F%2C%2055252%20Wiesbaden!5e0!3m2!1sde!2sde!4v1693581065654!5m2!1sde!2sde"
                className="border-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        );

      case "phone":
        return <div className="text-white"> Jetzt Kontaktieren </div>;
    }
  };

  return (
    <div ref={contactForm} className="relative">
      <section className="flex flex-col space-y-12 items-center py-28 bg-[var(--primary-color)] mx-4 m:mx-10 lg:mx-32 ">
        <div className="flex flex-row text-white gap-5">
          <div
            onClick={() =>
              selectedMethod !== "email" && setSelectedMethod("email")
            }
            className={`flex-1 inline-flex flex-col items-center text-center space-y-4 rounded-lg transition-[background-color] cursor-pointer hover:bg-white hover:bg-opacity-25 p-4
          ${selectedMethod === "email" ? " bg-white bg-opacity-20" : ""}
          `}
          >
            <VscMail className="  text-3xl mr-[2px] ml-[3px]" />

            <p className="hidden md:flex"> info@activeupmedia.com </p>
          </div>
          <div
            onClick={() =>
              selectedMethod !== "location" && setSelectedMethod("location")
            }
            className={`flex-1 inline-flex flex-col items-center text-center space-y-4 rounded-lg transition-[background-color] cursor-pointer hover:bg-white hover:bg-opacity-25 p-4
          ${selectedMethod === "location" ? " bg-white bg-opacity-20" : ""}
          `}
          >
            <RiMapPin2Fill className=" text-3xl mr-[2px] ml-[3px]" />

            <p className="hidden md:flex">
              {" "}
              Biebricherstraße 7F, 55252 Mainz Kastel
            </p>
          </div>
          <div
            onClick={() =>
              selectedMethod !== "phone" && setSelectedMethod("phone")
            }
            className={`flex-1 inline-flex flex-col items-center text-center space-y-4 rounded-lg transition-[background-color] cursor-pointer hover:bg-white hover:bg-opacity-25 p-4
          ${selectedMethod === "phone" ? " bg-white bg-opacity-20" : ""}
          `}
          >
            <AiOutlinePhone className="  text-3xl mr-[2px] ml-[3px]" />

            <p className="hidden md:flex"> 015203360004 </p>
          </div>
        </div>

        {loadContent(selectedMethod)}
      </section>
    </div>
  );
}
