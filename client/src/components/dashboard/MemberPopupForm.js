import React, { Component } from "react";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";

class MemberPopupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      declineEmail: false,
      declinePassword: false
    };
  }
  render() {
    const classOptions = [{ label: Warrior, value: "Warrior" }];
    return (
      <div className="member-form">
        <h4>Don't see your character? Register one now!</h4>
        <form>
          <TextFieldGroup
            placeholder="player handle"
            name="username"
            value={this.state.username}
            onChange={this.state.onChange}
            required={true}
          />
          <TextFieldGroup
            placeholder="email (optional)"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.state.onChange}
            required={true}
          />
          <TextFieldGroup
            placeholder="password (optional)"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.state.onChange}
            required={true}
          />
          <SelectListGroup name="mainclass" onChange={this.state.onChange} />
          <input
            type="submit"
            value="Submit"
            className="btn-btn-info btn-block"
          />
        </form>
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MemberPopupForm);
