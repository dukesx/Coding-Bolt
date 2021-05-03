import AdminWrapper from 'components/admin/wrapper';
import { FunctionComponent } from 'react';

const AdminIndexPage: FunctionComponent = (): JSX.Element => (
  <AdminWrapper route="dashboard">
    <p>Hello</p>
  </AdminWrapper>
);

export default AdminIndexPage;
