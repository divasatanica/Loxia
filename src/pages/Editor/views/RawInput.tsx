import React from 'react';
import { connect } from 'react-redux';

import './RawInput.less';

const RawInput = ({ handleChange }: { handleChange: any}) => {
    return <div contentEditable className="Editor-raw-input-container" onInput={handleChange}>

    </div>
};

const mapDispatchToProps = (dispatch: Function) => {
    return {

        // todo , need an action definition.
        handleChange: () => {
            console.log('changed');
        }
    };
};

export default connect(null, mapDispatchToProps)(RawInput);