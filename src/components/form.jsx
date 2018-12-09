import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className="needs-validation" noValidate>
      <h3 className="text-center">AmnSec offers the potential cause of secondary amenorrhea using specific indicators.</h3>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="input-tsh" className="col-sm-2 col-form-label">TSH:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-tsh" placeholder="TSH" required min=".1" step=".1" />
            <div className="invalid-feedback">
              Please fill TSH.
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="input-prolactin" className="col-sm-2 col-form-label">Prolactin:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-prolactin" placeholder="Prolactin" required min="1" />
            <div className="invalid-feedback">
              Please fill prolactin.
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="input-fsh" className="col-sm-2 col-form-label">FSH:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-fsh" placeholder="FSH" required min="1" />
            <div className="invalid-feedback">
              Please fill FSH.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="input-testosterone" className="col-sm-2 col-form-label">
            Testosterone:
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-testosterone" placeholder="Testosterone" required min="1" />
            <div className="invalid-feedback">
              Please fill Testosterone.
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="input-dheas" className="col-sm-2 col-form-label">DHEAS</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-dheas" placeholder="DHEAS" required min="1" />
            <div className="invalid-feedback">
              Please fill DHEAS.
            </div>
          </div>
        </div>
        <fieldset className="form-group col-md-4">
          <div className="row">
            <legend className="col-form-label text-center">Virilism presence:</legend>
          </div>
          <div className="row">
            <div className="custom-control custom-radio col-sm-6 text-right">
              <input type="radio" name="virilism" id="virilism1" value="yes" className="custom-control-input" required />
              <label className="custom-control-label" htmlFor="virilism1">Yes</label>
            </div>
            <div className="custom-control custom-radio col-sm-6 mb-3">
              <input type="radio" name="virilism" id="virilism2" value="no" className="custom-control-input" required />
              <label className="custom-control-label" htmlFor="virilism2">No</label>
              <div className="invalid-feedback radio-feedback">You have to choose one option.</div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="form-group row">
        <div className="col-sm-12 text-center">
          <button type="submit" className="btn btn-primary green-button" data-toggle="modal" data-target="#causeModal">Calculate</button>
        </div>
      </div>
    </form>
  );
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};
