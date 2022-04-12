import { Form } from "@remix-run/react";
import { Home } from "tabler-icons-react";
import Input from "~/components/atoms/Input";
import Select from "~/components/atoms/Select";

export default function Booking() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <div className="w-3/4 max-w-lg rounded-xl shadow-md p-6 bg-white">
        <Form action="/booking">
          <Input
            label="Nama"
            name="name"
            placeholder="Masukkan nama di sini"
            required
          />
          <Select
            label="Service"
            options={[
              {
                key: "Fotografi",
                value: "fotografi",
              },
            ]}
            required
          />
        </Form>
      </div>
    </div>
  );
}
