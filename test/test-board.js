import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
  it('Renders a Trello board with a list of cards and a board title', function() {
      const content = "My test content";
      const title = "My title card!";
      const boardTitle = "Trello Board";
      // const list =

      const renderer = TestUtils.createRenderer();
      renderer.render(<Board boardTitle={boardTitle} />);
      const result = renderer.getRenderOutput();
      result.props.className.should.equal('trelloBoard');

  });
});


// const content = "My test content";
// const title = "My title card!";
//
// const renderer = TestUtils.createRenderer();
// renderer.render(<List title={title} content={content} />);
