import React, { Component } from 'react';

import Form from './form.jsx';


export default class Landing extends Component {
  calculateForm(e) {
    e.preventDefault();
    const TSH = Number(e.currentTarget[0].value);
    const prolactin = Number(e.currentTarget[1].value);
    const FSH = Number(e.currentTarget[2].value);
    const testosterone = Number(e.currentTarget[3].value);
    const DHEAS = Number(e.currentTarget[4].value);
    const virilism = (document.querySelector('input[name="virilism"]:checked') || {}).value;
    if (TSH && prolactin && FSH && testosterone && DHEAS && virilism) {
      if (TSH < 0.5 || TSH > 5) {
        alert('Thyroid disorder');
      } else if (prolactin >= 200) {
        alert('Potential pituitary lesion');
      } else if (prolactin > 99 && prolactin < 200) {
        alert('Rule out other causes (medications, renal failure); if so – potential pituitary lesion');
      } else if (virilism === 'no' && FSH > 20) {
        alert('Ovarian failure. Karyotype should be done if the woman is less than 30 years of age');
      } else if (virilism === 'no' && FSH < 5) {
        alert('Pituitary or hypothalamic disorder');
      } else if (virilism === 'no') {
        alert('Estradiol or progesterone challenge test required (to induce bleeding)');
      } else if (testosterone > 150 && DHEAS > 700) {
        alert('Ovarian or adrenal  androgen-producing tumor. Potential adrenal virilism in adults');
      } else if (testosterone > 79 && testosterone < 151 && DHEAS > 300  && DHEAS < 701) {
        alert('Potential PCOS or adrenal virilism depending on clinical examination.');
      } else {
        alert('Potential PCOS');
      }
    }
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => this.calculateForm(e)} />
      </div>
    );
  }
}
