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

    // use a processor object to process HTML string, avoid creating object for multi times.
    HTMLProcessor: HTMLDivElement | null = document.createElement('div');

    // use debounce function to slow handleChange's invoking down
    emitChange = debounce((ev: any, value: string) => {
        this.handleChange(value);
    }, 300);

    componentDidMount () {
        document.execCommand("defaultParagraphSeparator", false, "\n");
    }

    handleChange (value: string) {

        // use a div's innerText to delete those html tag generated contentEditable div.
        const divElement = this.HTMLProcessor;

        if (divElement) {
            divElement.innerHTML = value;

            let processedValue = divElement.innerText;
            this.props.handleChange({
                content: processedValue,
                displayContent: value
            });
        }
    }

    render () {
        return <ContentEditable 
                html={this.props.displayContent}
                className="Editor-raw-input-container"
                tagName="pre"
                onChange={this.emitChange}
                onKeyPress={this.emitChange}
                onPaste={this.emitChange}
                contentEditable="true"></ContentEditable>
    }

    componentWillUnmount () {
        this.HTMLProcessor = null;
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