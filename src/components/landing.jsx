import React, { Component } from 'react';

import Form from './form.jsx';
import CauseModal from './causeModal.jsx';
import { throws } from 'assert';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cause: '',
      bleeding: false,
      isBleeding: false,
    };
  }

  calculateForm(e) {
    e.preventDefault();
    const TSH = Number(e.currentTarget[0].value);
    const prolactin = Number(e.currentTarget[1].value);
    const FSH = Number(e.currentTarget[2].value);
    const testosterone = Number(e.currentTarget[3].value);
    const DHEAS = Number(e.currentTarget[4].value);
    const virilism = (document.querySelector('input[name="virilism"]:checked') || {}).value;
    if (TSH && prolactin && FSH && testosterone && DHEAS && virilism) {
      if ((prolactin > 30 && prolactin < 100) || (testosterone > 60 && testosterone < 80) || prolactin < 4 || testosterone < 8 || DHEAS < 250) {
        this.setState({ cause: 'Additional examination required.' });
      } else if (TSH < 0.5 || TSH > 5) {
        this.setState({ cause: 'Thyroid disorder.' });
      } else if (prolactin >= 200) {
        this.setState({ cause: 'Potential pituitary lesion.' });
      } else if (prolactin > 99 && prolactin < 200) {
        this.setState({ cause: 'Rule out other causes (medications, renal failure); if so – potential pituitary lesion.' });
      } else if (virilism === 'no' && FSH > 20) {
        this.setState({ cause: 'Ovarian failure. Karyotype should be done if the woman is less than 30 years of age.' });
      } else if (virilism === 'no' && FSH < 5) {
        this.setState({ cause: 'Pituitary or hypothalamic disorder.' });
      } else if (virilism === 'no') {
        this.setState({ cause: 'Estradiol or progesterone challenge test required (to induce bleeding).', bleeding: true });
      } else if (testosterone > 150 && DHEAS > 700) {
        this.setState({ cause: 'Ovarian or adrenal androgen-producing tumor. Potential adrenal virilism in adults.' });
      } else if (testosterone > 79 && testosterone < 151 && DHEAS > 300 && DHEAS < 701) {
        this.setState({ cause: 'Potential PCOS or adrenal virilism depending on clinical examination.' });
      } else {
        this.setState({ cause: 'Potential PCOS.' });
      }
      this.openModal();
    }
  }

  openModal() {
    document.getElementById('causeModal').classList.add('show');
    document.getElementById('causeModal').style.display = 'block';
    const backDrop = document.createElement('div');
    backDrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(backDrop);
    document.body.classList.add('modal-open');
  }

  closeModal() {
    document.getElementById('causeModal').classList.remove('show');
    document.getElementById('causeModal').style.display = 'none';
    const backDrop = document.getElementsByClassName('modal-backdrop')[0];
    document.body.removeChild(backDrop);
    document.body.classList.remove('modal-open');
    this.setState({
      cause: '',
      bleeding: false,
      isBleeding: false,
    });
  }

  confirmBleeding(e) {
    const val = e.currentTarget.value;
    this.setState({ isBleeding: val, bleeding: false });
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.calculateForm(e)} />
        <CauseModal cause={this.state.cause} onClick={() => this.closeModal()} bleeding={this.state.bleeding} confirmBleeding={e => this.confirmBleeding(e)} isBleeding={this.state.isBleeding} />
      </div>
    );
  }
}
