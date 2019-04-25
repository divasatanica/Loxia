import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

const MarkDown =  ({ raw }: { raw: string}) => {
    return <ReactMarkdown source={raw}></ReactMarkdown>
}

const mapStateToProps = (state: any) => {
    return {
        raw: state.editor.content
    };
};

export default connect(mapStateToProps)(MarkDown);