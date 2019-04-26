import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-simple-contenteditable';

import { setRawInput } from '../actions';
import { debounce } from '../../../utils/func.opt';

import './RawInput.less';

interface IProps {
    handleChange(value: string): void;
    rawContent: string;
}

class RawInput extends Component<IProps, {}> {

    // use debounce function to slow handleChange's invoking down
    emitChange = debounce((ev: any, value: string) => {
        this.handleChange(ev, value);
    }, 300);

    handleChange (ev: any, value: string) {
        this.props.handleChange(value);
    }

    render () {
        return <ContentEditable 
                html={this.props.rawContent}
                className="Editor-raw-input-container"
                tagName="div"
                onChange={this.emitChange}
                onKeyPress={() => {}}
                onPaste={() => {}}
                contentEditable="plaintext-only"></ContentEditable>
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        handleChange: (value: string) => {
            dispatch(setRawInput(value));
        }
    };
};

const mapStateToProps = (state: any) => {
    return {
        rawContent: state.editor.content
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RawInput);