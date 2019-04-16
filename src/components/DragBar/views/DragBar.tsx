import React from 'react';
import './style.less';

export default ({height, width}: { height: number, width?: string }) => {
    return <section className="App-DragBar"
                    style={{height: height + 'px', width}}></section>
}