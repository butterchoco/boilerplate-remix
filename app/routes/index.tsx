import type { users } from "@prisma/client";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { DashboardLayout } from "~/components/layout";
import useFocus from "~/hooks/UseFocus";
import { getUsers } from "~/models/users";

export const loader = () => {
  return getUsers();
};

export default function Index() {
  const loaderData = useLoaderData();
  const fetcher = useFetcher();
  const data: users[] = fetcher.data || loaderData;

  useFocus(() => {
    fetcher.load("/");
  });

  return (
    <DashboardLayout>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </DashboardLayout>
  );
}
