import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-simple-contenteditable';

import { setRawInput, InputContent } from '../actions';
import { debounce } from '../../../utils/func.opt';

import './RawInput.less';

interface IProps {
    handleChange(content: InputContent): void;
    displayContent: string;
}

class RawInput extends Component<IProps, {}> {

    // use debounce function to slow handleChange's invoking down
    emitChange = debounce((ev: any, value: string) => {
        this.handleChange(value);
    }, 300);

    handleChange (value: string) {

        // the innerHTML is to display on the left, and it is processed to input to right-side component.
        let processedValue = value.replace(/<div><br><\/div>/g, '\n').replace(/<div>(.+?)<\/div>/g, '$1\n');
        this.props.handleChange({
            content: processedValue,
            displayContent: value
        });
    }

    render () {
        return <ContentEditable 
                html={this.props.displayContent}
                className="Editor-raw-input-container"
                tagName="div"
                onChange={this.emitChange}
                onKeyPress={() => {}}
                onPaste={() => {}}
                contentEditable="true"></ContentEditable>
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        handleChange: (content: InputContent) => {
            dispatch(setRawInput(content));
        }
    };
};

const mapStateToProps = (state: any) => {
    return {
        displayContent: state.editor.displayContent
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RawInput);