import React from 'react';

export default function Form(props) {
  return (
    <form>
      <h3 className="text-center">Please fill form to check your health.</h3>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="input-tsh" className="col-sm-2 col-form-label">TSH:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-tsh" placeholder="TSH" />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="input-fsh" className="col-sm-2 col-form-label">FSH:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-fsh" placeholder="FSH" />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="input-testosterone" className="col-sm-2 col-form-label">
            Testosterone:
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-testosterone" placeholder="Testosterone" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="input-dheas" className="col-sm-2 col-form-label">DHEAS</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="input-dheas" placeholder="DHEAS" />
          </div>
        </div>
        <fieldset className="form-group col-md-8">
          <div className="row">
            <legend className="col-form-label text-center">Virilism presence:</legend>
          </div>
          <div className="row">
            <div className="custom-control custom-radio col-sm-6 text-right">
              <input type="radio" name="virilism" id="virilism1" value="yes" className="form-check-input" checked />
              <label className="form-check-label" htmlFor="virilism1">Yes</label>
            </div>
            <div className="form-check col-sm-6">
              <input type="radio" name="virilism" id="virilism2" value="no" className="form-check-input" />
              <label className="form-check-label" htmlFor="virilism2">No</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="form-group row">
        <div className="col-sm-12 text-center">
          <button type="submit" className="btn btn-primary">Calculate</button>
        </div>
      </div>
    </form>
  );
}
