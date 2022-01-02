import React from 'react';
import { Spinner } from 'react-bootstrap';

const styles = {
  spinnerContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

function FallbackSpinner() {
  return (
    <div style={styles.spinnerContainerStyle}>
      <Spinner animation="grow" />
    </div>
  );
}

export default FallbackSpinner;
