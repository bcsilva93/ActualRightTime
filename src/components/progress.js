import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    zIndex: 1
  },
  time: {
    position: "absolute",
    margin: "50%"
  },
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  fabProgress: {
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  }
});

class CircularStatic extends React.Component {
  state = {
    start: 0,
    end: 0,
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 0.5 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.time}>{this.state.completed}</div>
          <CircularProgress
            size={200}
            className={classes.progress}
            variant="static"
            value={this.state.completed}
          />
        </div>
      </div>
    );
  }
}

CircularStatic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularStatic);
