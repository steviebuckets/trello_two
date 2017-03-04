import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
  it('Renders a list of cards', function() {
      const content = "My test content";
      const title = "My title card!";

      const renderer = TestUtils.createRenderer();
      renderer.render(<List title={title} content={content} />);
      const result = renderer.getRenderOutput();
      result.props.className.should.equal('list');

  });
});
