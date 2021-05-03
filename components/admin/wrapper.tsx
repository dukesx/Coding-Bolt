import { FunctionComponent } from 'react';
import Wrapper from '../global/wrapper';
import { WrapperProps } from 'lib/models/app/definitions/props';
const AdminWrapper: FunctionComponent<WrapperProps> = ({
  route,
}): JSX.Element => {
  return (
    <Wrapper route={route} admin>
      <p>hello</p>
    </Wrapper>
  );
};

export default AdminWrapper;
