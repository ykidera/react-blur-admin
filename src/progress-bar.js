import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export class ProgressBar extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['success', 'primary', 'warning', 'danger']),
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired,
  }

  static defaultProps = {
    striped: false,
    animated: false,
    type: 'primary',
    label: '',

  }

  render() {
    const classes = cx({
      'progress-bar': true,
      'progress-bar-success': this.props.type === 'success',
      'progress-bar-primary': this.props.type === 'primary',
      'progress-bar-warning': this.props.type === 'warning',
      'progress-bar-danger': this.props.type === 'danger',
      'progress-bar-striped': this.props.striped || this.props.animated,
      'active': this.props.animated,
    });

    return (
      <div className='progress'>
        <div className={classes} style={{width: this.props.percentage + '%', height: '100%'}}>
          <span>{this.props.label}</span>
        </div>
      </div>
	  );
  }
}
