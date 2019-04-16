import React from 'react';
import { Col, Row} from 'antd';

import { view as DragBar } from '../../../components/DragBar';
import RawInput from './RawInput';
import MarkdownDisplay from './Markdown';

import './Editor.less';

export default () => {
    return <div>
        <DragBar height={30} width={'88%'}></DragBar>
        <Row className="Editor-main">
            <Col span={12}>
                <RawInput></RawInput>
            </Col>
            <Col span={12}>
                <MarkdownDisplay></MarkdownDisplay>
            </Col>
        </Row>
    </div>
}