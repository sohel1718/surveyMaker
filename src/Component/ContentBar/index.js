import { Menu } from 'antd';
import { PlusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';
import './style.scss'; 

const { SubMenu } = Menu;


const ContentBar = ({ survey, handleChange, DropDownData, CustomIcon, currentPage }) => {

    return (
        <div className="content-bar">
            <div className="content-bar__header">
                <span>Content</span>
                <div className="content-bar__header__icon">
                        <Menu onClick={(e) => handleChange(e.key, "addPage")} triggerSubMenuAction={"click"} mode="horizontal">
                            <SubMenu key="SubMenu" icon={<PlusSquareFilled className="content-bar__header__icon__main" />}>
                                {
                                    DropDownData.map(data => {
                                        return (
                                            <Menu.Item key={data.id}>{CustomIcon(data.icon)}{data.type}</Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        </Menu>
                </div>
            </div>
            <div className="content-bar__lists">
               {
                   survey.map( (data, index) => {
                        return (
                            <div className={`content-bar__lists__list ${currentPage === data.id ? "content-bar__lists__active" : ""}`}>
                                <div onClick={() => handleChange(data.id, "changeCurrent")} className="content-bar__lists__list__item">
                                    {CustomIcon(DropDownData.filter(newData => newData.id === +data.dropDownId)[0].icon)}
                                    <span>{data.id}</span>
                                </div>
                                <div className="content-bar__lists__list__delete">
                                    <Menu onClick={(e) => handleChange(e.key, "delete")} triggerSubMenuAction={"click"} mode="horizontal">
                                        <SubMenu key="SubMenu" icon={<PlusCircleOutlined className="content-bar__lists__list__delete__icon" />}>
                                            {index !== 0 && <Menu.Item key={data.id}>Delete</Menu.Item>}
                                        </SubMenu>
                                    </Menu>
                                </div>
                            </div>
                        )
                   })
               }
            </div>
        </div>
    )
}

export default ContentBar;