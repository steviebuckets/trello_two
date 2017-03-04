import React from 'react';
import List from './list';

export default function Board(props) {
  return(

    <div className ="trelloBoard">
    <div className="boardTitle">
    {props.boardTitle}
      </div>
    <List />
    <List />
    <List />
    </div>
  )
}
