import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Card} from 'mrc';

import './style/style.less'

const App = () => (
  <div>
    <h1>Examples</h1>
    <h2>Button</h2>
    <div id="buttons">
      <div className="item">
        <Button>Button</Button>
      </div>
      <div className="item">
        <Button primary>Button</Button>
      </div>
      <div className="item">
        <Button disabled>Button</Button>
      </div>
      <div className="item">
        <Button primary disabled>Button</Button>
      </div>
    </div>
    <h2>Card</h2>
    <div id="cards">
      <Card style={{width: 320}}>
        <div>美国短毛猫素以体格魁伟，骨胳粗壮，肌肉发达，生性聪明，性格温顺而著称，是短毛猫类中大型品种。被毛厚密，毛色多达30余种，其中银色条纹品种尤为名贵。</div>
      </Card>
      <Card style={{width: 320, padding: 0}}>
        <div className="card-image">
          <img alt="example" width="100%" src="http://img.boqiicdn.com/Data/BK/A/1504/14/imagick12691428983319_y.jpg"/>
        </div>
        <div className="card-text">
          <h3>美国短毛猫</h3>
          <p>美国短毛猫素以体格魁伟，骨胳粗壮，肌肉发达，生性聪明，性格温顺而著称，是短毛猫类中大型品种。</p>
        </div>
      </Card>
    </div>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('react'));
