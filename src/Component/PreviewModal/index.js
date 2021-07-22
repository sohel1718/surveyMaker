import { Modal } from 'antd';
import './style.scss';

const PreviewModal = ({ isModalVisible, handlePreview, children,  }) => {
    return (
        <Modal className="preview-modal" footer={null} visible={isModalVisible} closable={false} onCancel={handlePreview} >
            {children}
        </Modal>        
    )
}

export default PreviewModal;