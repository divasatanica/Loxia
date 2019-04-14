import React from 'react';
import './style.less';

export default ({height}: { height: number}) => {
    return <section className="App-DragBar"
                    style={{height: height + 'px'}}></section>
}