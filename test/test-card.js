import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
  it('Renders a card', function() {
      const content = "My test content";

      const renderer = TestUtils.createRenderer();
      renderer.render(<Card content={content} />);
      const result = renderer.getRenderOutput();
      result.props.className.should.equal('card');


  });
});
