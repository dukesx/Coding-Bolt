import Editor from "components/global/editor";
import { CardSection, Col, Grid, Card } from "@mantine/core";
import Wrapper from "components/global/wrapper";

const ComposeSimpleArticle = () => {
  return (
    <Wrapper>
      <Grid id="create-article-grid" className="w-full xs:m-0 xxs:m-0">
        <Col xs={12} className="xs:max-w-full" xl={8} span={8}>
          <div className="p-5">
            <Editor />
          </div>
        </Col>
        <Col className="xs:p-0 xxs:p-0" xs={12} span={4} xl={4}>
          <Card>
            <CardSection>hello</CardSection>
          </Card>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default ComposeSimpleArticle;
