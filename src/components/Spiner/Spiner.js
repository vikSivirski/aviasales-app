import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

export const Spiner = () => {
  return (
    <Flex align="center" justify="center" gap="middle">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </Flex>
  );
};
