import { Form } from "@remix-run/react";
import { At } from "tabler-icons-react";
import Button from "~/components/atoms/Button";
import Input from "~/components/atoms/Input";
import Calendar from "react-calendar";
import { useState } from "react";

const CalendarBooking = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      className="min-w-full min-h-full rounded-lg"
      tileClassName="rounded-lg bg-indigo-500"
      onChange={onChange}
      value={value}
    />
  );
};

export default function Booking() {
  return (
    <div className="flex items-center p-12 bg-slate-50 gap-8">
      <div className="flex-grow flex rounded-xl shadow-md p-6 bg-white">
        <div>
          <CalendarBooking />
        </div>
        <div className="flex-grow">test</div>
      </div>
      <div className="w-2/5 max-w-lg rounded-xl shadow-md p-6 bg-white">
        <Form action="/booking">
          <Input
            required
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap di sini"
          />
          <Input
            required
            label="Universitas"
            placeholder="Masukkan universitas di sini"
          />
          <Input
            required
            label="Fakultas"
            placeholder="Masukkan fakultas di sini"
          />
          <Input
            required
            label="Jurusan"
            placeholder="Masukkan jurusan di sini"
          />
          <Input
            required
            label="No. Whatsapp"
            leftIcon={<p className="text-md">+62</p>}
            placeholder="8xxxxxxxxxx"
          />
          <Input
            required
            label="Instagram"
            leftIcon={<At />}
            placeholder="Masukkan username instagram di sini"
          />
          <Input required label="Email" placeholder="Masukkan email di sini" />
          <Button type="submit" colorScheme="primary" extraStyle="w-full mt-4">
            Booking Sekarang
          </Button>
        </Form>
      </div>
    </div>
  );
}
