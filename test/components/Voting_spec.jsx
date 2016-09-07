import test from 'tape'
import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';

test('Voting - renders a pair of buttons', function(t) {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    t.equals(buttons.length, 2);
    t.equals(buttons[0].textContent, 'Trainspotting');
    t.equals(buttons[1].textContent, '28 Days Later');

    t.end();
  });