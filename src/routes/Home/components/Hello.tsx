/**
 * Created by lixiaoyang on 2016/10/27.
 */
import * as React from "react";
import {Button} from 'antd';

export interface HelloProps { compiler: string; framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1><Button type="primary">删除</Button>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}