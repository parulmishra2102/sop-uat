import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* <p>SOP Application</p>
      <p>SOP Application</p>

      <p>SOP Application</p><p>SOP Application</p><p>SOP Application</p> */}
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default Header;
