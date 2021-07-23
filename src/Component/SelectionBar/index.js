import { Input, Select, Switch, Upload, Button, Popover } from 'antd';
import { EyeOutlined, UploadOutlined } from '@ant-design/icons';
import LinkGenerator from '../LinkGenrator';
import './style.scss';

const { Option } = Select;

const SelectionBar = ({ handlePreview, DropDownData, survey, handleChange, LayoutData, CustomIcon, currentIndex, dropDown, handlePublish, linkPopup, sid, setLinkPopup}) => {
    const dropDownValue = ( <div>{CustomIcon(dropDown.icon)}<span>{dropDown.type}</span></div> );

    return (
        <div className="selection-bar">
            <div className="selection-bar__name">
                <Input 
                    onChange={(e) => handleChange(e.target.value,"surveyName")}
                    type="text" value={survey.surveyName}
                    placeholder="survey name"
                    prefix={<img src="/images/left-align.png" alt="" />}
                />
            </div>
            <div className="selection-bar__type">
                <span>Type</span>
                <Select onChange={(e) => handleChange(e,"dropDownId")} value={dropDownValue}>
                    {
                        DropDownData.map(type => (
                            <Option key={type.id}>{CustomIcon(type.icon)}{type.type}</Option>
                        ))
                    }
                   
                </Select>
            </div>
            <div className="selection-bar__settings">
                <span>Settings</span>
                <div className="selection-bar__settings__req">
                    <span>Required</span>
                    <div>
                        <Switch onChange={(e) => handleChange(e,"required")} checked={survey.page[currentIndex].required} />
                    </div>
                </div>
            </div>
            <div className="selection-bar__change">
                <span>Change Image</span>
                <div className="selection-bar__change__upload">
                <Upload showUploadList={false} onChange={(e) => handleChange(e,"fileUpload")}>
                    <Button icon={<UploadOutlined />} />
                </Upload>
                </div>
            </div>
            <div className="selection-bar__layout">
                <span>Layout</span>
                <div className="selection-bar__layout__wrapper">
                    {
                        LayoutData.map(data => {
                            return (
                                <div 
                                    onClick={() => handleChange(data.id,"layout")}
                                    id={`${survey.page[currentIndex].layout === data.id ? "selected" : ""}`}
                                    className="selection-bar__layout__wrapper__box"
                                >
                                    {data.id}
                                </div>
                            )
                        })
                    }
                </div>   
            </div>
            <div className="selection-bar__action">
                <button onClick={() => handlePreview()}className="selection-bar__action__preview"><EyeOutlined /></button>
                <Popover
                    content={<LinkGenerator handlePublish={handlePublish} sid={sid} setLinkPopup={setLinkPopup} />}
                    title="Get the Link"
                    trigger="click"
                    visible={linkPopup}
                    onClick={() => handlePublish()} 
                >
                <button className="selection-bar__action__publish">Publish</button>
                </Popover>
            </div>
        </div>
    )
}

export default SelectionBar;