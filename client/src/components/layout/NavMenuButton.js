import React, { Component } from "react";

export default class NavMenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
      // color: "white" ? this.props.color : "white"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.props.open ? "white" : "white",
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.props.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.props.open ? 0 : 1,
        zIndex: this.props.open ? 0 : 3,
        transform: this.props.open ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.props.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}
