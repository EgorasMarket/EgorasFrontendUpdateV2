import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBug } from '@fortawesome/free-solid-svg-icons';
const Alert = (props) => {


    return props.alerts !== null && props.alerts.length > 0 && props.alerts.map(alert => (
   <div  key={alert.id} className={"alert alert-" + alert.alertType} role="alert">
{alert.msg}
</div>
    ));

}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);