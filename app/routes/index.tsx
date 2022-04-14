import type { users } from "@prisma/client";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import Button from "~/components/atoms/Button";
import Select from "~/components/atoms/Select";
import { DashboardLayout } from "~/components/layout";
import useFocus from "~/hooks/UseFocus";
import { getUsers } from "~/models/users";
import * as yup from "yup";
import { useFormik } from "formik";

export const loader = () => {
  return getUsers();
};

const schemaValidation = yup.object({
  services: yup.string().required("Services field is required"),
});

export default function Index() {
  const loaderData = useLoaderData();
  const fetcher = useFetcher();
  const data: users[] = fetcher.data || loaderData;

  useFocus(() => {
    fetcher.load("/");
  });

  const onSubmit = (data: any) => console.log(data);

  const form = useFormik({
    initialValues: {
      services: "",
    },
    validationSchema: schemaValidation,
    onSubmit,
  });

  return (
    <DashboardLayout>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}

      <div className="bg-white w-full py-8 px-16">
        <Form onSubmit={form.handleSubmit}>
          <Select
            label="Services"
            name="services"
            placeholder="Choose your services"
            options={[{ label: "Interior Design", value: "Interior Design" }]}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.errors.services}
            touched={form.touched.services}
          />
          <Button colorScheme="primary" extraStyle="ml-auto px-4 py-2">
            Submit
          </Button>
        </Form>
      </div>
    </DashboardLayout>
  );
}
