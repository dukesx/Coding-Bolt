import Wrapper from "components/global/wrapper";
import {
  Text,
  Grid,
  Col,
  Select,
  InputWrapper,
  Button,
  MultiSelect,
} from "@mantine/core";
import dynamic from "next/dynamic";
import { useForm } from "@mantine/hooks";
import { useState } from "react";
import { HashStraight } from "phosphor-react";

const Editor = dynamic(() => import("../../components/global/editor"), {
  ssr: false,
});
const CreateArticle = () => {
  const form = useForm({
    initialValues: {
      hashtags: [],
      editor: null,
    },
    validationRules: {
      hashtags: (value) => {
        if (value) {
          if (value.length < 4) {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      },

      editor: (value) => {
        if (value) {
          if (value.blocks.length >= 1) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
    },
  });

  const [editorVal, setEditorVal] = useState(null);

  return (
    <Wrapper>
      <Grid className="mt-5 sm:px-3 xs:px-3 xxs:px-2">
        <Col span={12} xl={8} lg={8} md={8} sm={12}>
          <InputWrapper
            id="editor"
            label="Content"
            description="Write as much as you can"
            error={form.errors.editor && "Content cannot be blank!"}
            required
          >
            <Editor
              form={form}
              id="my-editor"
              placeholder="Care to start writing?"
              formError={form.errors.editor}
            />
          </InputWrapper>
        </Col>
        <Col span={12} xl={4} lg={4} md={4} sm={12}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <InputWrapper
              label="Tags"
              description="Select a minimum of 4 tags"
              id="hashtags"
              required
            >
              <MultiSelect
                variant="unstyled"
                icon={<HashStraight />}
                data={[
                  {
                    label: "Selec something",
                    value: null,
                  },
                  {
                    label: "Angular",
                    value: "angular-js",
                  },
                  {
                    label: "React",
                    value: "react-js",
                  },
                  {
                    label: "Typescript",
                    value: "ts",
                  },
                  {
                    label: "Svelte",
                    value: "svelte-js",
                  },
                ]}
                placeholder="Select applicable tags"
                defaultValue={form.values.hashtags}
                onChange={(el) => {
                  form.setFieldValue("hashtags", el);
                }}
                error={
                  form.errors.hashtags &&
                  `You need ${4 - form.values.hashtags.length} more ${
                    form.values.hashtags.length == 3 ? "tag" : "tags"
                  }`
                }
                value={form.values.hashtags}
                searchable
                maxDropdownHeight={200}
                nothingFound="No Such Tag"
              />
            </InputWrapper>
            <div className="flex mt-8">
              <Button className="mx-2" type="submit">
                Submit
              </Button>
              {/* <Button
                color="green"
                className="mx-2"
                onClick={() => form.reset()}
              >
                Reset
              </Button> */}
            </div>
          </form>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default CreateArticle;
