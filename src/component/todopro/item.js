

import React from "react"
class Item extends React.Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id)
    }
    editTask = () => {
        this.props.editTask(this.props.task.id)
    }
    render() {
        var { task, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td >
                    <span >{task.name}</span>
                </td>
                <td >
                    <span className={task.status === true ? 'text-danger' : 'text-success'}
                        onClick={() => this.onUpdateStatus()}
                    >{task.status === true ? 'kích hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-success mx-2"
                        onClick={() => this.editTask()}
                    >Sửa</button>
                    <button className="btn btn-danger"
                        onClick={() => this.onDeleteTask()}
                    >Xóa</button>
                </td>
            </tr >



        )
    }
}

export default Item