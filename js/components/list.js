import React from 'react';
import Card from './card';

export default function List() {
    const title = "My Trello List";
    return (
        <div className="list">
            {title}
            <Card content="Card Description"/>
            <form>
                <label>
                    Add New Card:
                    <input type="text"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
