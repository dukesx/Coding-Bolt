import Editor from "components/global/editor";
import { Col, Grid } from "@mantine/core";
import Wrapper from "components/global/wrapper";

const ComposeSimpleArticle = () => {
  return (
    <Wrapper>
      <Grid>
        <Col className="xs:max-w-full" span={8}>
          <Editor />
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default ComposeSimpleArticle;
