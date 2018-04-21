import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RainIcon, ClearIcon, CloudsIcon } from './icons';

class ChooseIcon extends Component {
  getIcon = (summary) => {
    let icon;

    switch (summary) {
      case 'Rain': {
        icon = <RainIcon />;
        break;
      }
      case 'Clear': {
        icon = <ClearIcon />;
        break;
      }
      case 'Clouds': {
        icon = <CloudsIcon />;
        break;
      }
      default: {
        icon = null;
      }
    }

    return icon;
  }

  render() {
    const { forecast } = this.props;
    const currentDay = forecast[0];

    if (!currentDay) {
      return null;
    }

    const { description: summaryForest } = currentDay;
    const icon = this.getIcon(summaryForest);

    return (
      <div> {icon} </div>
    );
  }
}

const mapStateToProps = (state) => ({
  forecast: state.weatherConditions,
});

export default connect(mapStateToProps)(ChooseIcon);
