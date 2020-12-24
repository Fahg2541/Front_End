import React from 'react';
import './App.css';
import pic from './logo.svg';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      c: 100,
      java: 80,
      html: 60
    }
  }

  render() {
    return (
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h4 class="text-center">ประวัติของฉัน</h4>
            <div class="row">
              <div class="col-md-6">
                <img src={pic}></img>
              </div>
              <div class="col-md-6">ข้อมูล</div>
            </div>
            <h5 class="text-center">ความสามารถ</h5>
            <div class="row">
              <div class="col-2"> C </div>
              <div class="col-10"> 
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: this.state.c+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.c+"%"}</div>
                </div>
              </div>
              <div class="col-2"> Java </div>
              <div class="col-10">100%</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Page;
