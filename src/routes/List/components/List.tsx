import * as React from "react";
import {Button} from 'antd';

class List extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div>
            <Button type="primary">删除</Button>
        </div>)
    }
}


export default List
