import React from 'react';

export default function CauseModal(props) {
  return (
    <div className="modal fade text-center" id="causeModal" tabIndex="-1" role="dialog" aria-labelledby="causeModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="causeModalCenterTitle">Cause</h5>
            <button type="button" className="close" data-dismiss="modal" onClick={props.onClick} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="cause-text">{props.cause}</p>
            {props.bleeding ?
              <div>
                <p className="text-center">Are you bleeding?</p>
                <div className="bleeding-buttons text-center">
                  <button className="btn btn-secondary" value="yes" onClick={props.confirmBleeding}>Yes</button>
                  <button className="btn btn-secondary" value="no" onClick={props.confirmBleeding}>No</button>
                </div>
              </div>
              : ''}
            {props.isBleeding === 'yes' ? <p className="cause-text">Potential pituitary/hypothalamic  disorder or ovarian failure.</p> : ''}
            {props.isBleeding === 'no' ? <p className="cause-text">Endometrial disorders (for example Asherman syndrome).</p> : ''}
          </div>
          <div className="modal-footer text-center">
            <button type="button" className="btn btn-secondary green-button" onClick={props.onClick} data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

CauseModal.propTypes = {
  cause: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  confirmBleeding: React.PropTypes.func.isRequired,
  isBleeding: React.PropTypes.string.isRequired,
  bleeding: React.PropTypes.bool.isRequired,
};
