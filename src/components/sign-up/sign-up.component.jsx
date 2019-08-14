import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.componenet";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up withyour email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="name"
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
