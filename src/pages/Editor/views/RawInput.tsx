import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRawInput } from '../actions';
import { debounce } from '../../../utils/func.opt';

import './RawInput.less';

interface IProps {
    handleChange(value: string): void;
}

class RawInput extends Component<IProps, {}> {
    input!: any;

    constructor (props: IProps) {
        super(props);
    }

    emitChange = debounce(() => {
        this.handleChange();
    }, 300);

    handleChange () {
        const input = this.input;
        if (input) {
            this.props.handleChange(input.innerText);
        }
    }

    refInput (node: any) {
        this.input = node;
    }

    render () {
        return <div contentEditable className="Editor-raw-input-container" ref={this.refInput.bind(this)} onInput={this.emitChange}>

        </div>
    }
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
    return {
        handleChange: (value: string) => {
            dispatch(setRawInput(value));
        }
    };
};

const mapStateToProps = (state: any, ownProps: any) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RawInput);