import React from "react";
import "./styles/main.scss";
import { useForm } from "react-hook-form";

// import icons
import iconError from "./images/icon-error.svg";
import iconArrow from "./images/icon-arrow.svg";
import logo from "./images/logo.svg";
import bgDesktopPattern from "./images/bg-pattern-desktop.svg";

type Inputs = {
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <main className="main-container">
      <img src={logo} alt="Base Apparel" />
      <h1 className="title">
        We're <span className="tittle--highlight">coming soon</span>
      </h1>
      <p className="message">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      {/* handleSubmit will validate your inputs before invoking onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* include validation with required or other standerd HTML validation rules */}
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email Address"
        />

        {/* errors will return when field validation fails */}
        {errors && <img src={iconError} alt="Error icon" />}
        {errors && <img src={iconError} alt="Error icon" /> && (
          <p className="form__error">Please Provide a valid email</p>
        )}

        <input type="submit" className="form__submit" value="" />
      </form>
    </main>
  );
}

export default App;
