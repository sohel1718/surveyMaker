import { Table } from 'antd';
import './style.scss';

const { Column } = Table;

const response = ({ data }) => {
    debugger
      const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Question',
          dataIndex: 'response',
          key: 'response',
          render: (data, row, index) => {
              debugger
              return (
                data[index].question
              )
          }
        },
        {
          title: 'Answer',
          dataIndex: 'answer',
          key: 'answer',
          render: (data, row, index) => {
            debugger
            return (
              row.response[0].answer
            )
        }
        },
      ];
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default response