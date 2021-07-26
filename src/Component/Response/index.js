import { Table } from 'antd';
import './style.scss';

const response = ({ data }) => {
    const columns = Object.keys(data[data.length - 1]).map(field => (field === "id" ? {} : {title: field.toUpperCase(),dataIndex:field, key: field,
    
    }));
    
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default response