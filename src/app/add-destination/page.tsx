"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CircleCheck, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const categories = [
  "Beach",
  "Mountains",
  "City",
  "Adventure",
  "Wildlife",
  "Cultural",
  "Honeymoon",
];

type FormState = {
  name: string;
  country: string;
  category: string | null;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

const initialState: FormState = {
  name: "",
  country: "",
  category: null,
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const requiredFields = [
  "name",
  "country",
  "category",
  "price",
  "duration",
  "departureDate",
] as const;

type RequiredField = (typeof requiredFields)[number];

function isEmpty(value: FormState[RequiredField]) {
  if (typeof value === "string") return value.trim() === "";
  return value == null;
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function AddDestinationPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function updateField(key: keyof FormState, value: string | null) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as RequiredField]) {
      setErrors((prev) => ({ ...prev, [key as RequiredField]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

const res= await fetch("http://localhost:8000/add-destination",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(form)
})
const data=await res.json()
console.log(data)

    const nextErrors: Partial<Record<RequiredField, string>> = {};
    for (const key of requiredFields) {
      if (isEmpty(form[key])) nextErrors[key] = "This field is required.";
    }
    const price = form.price.trim();
    if (price !== "" && !/^\d+([.,]\d+)?$/.test(price)) {
      nextErrors.price = "Enter a valid number, e.g. 1200.";
    }

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    // No persistence layer yet — keep the payload around for later API work.
    console.log("Travel package submitted:", {
      ...form,
      price: Number(price.replace(",", ".")),
    });

    setSubmittedName(form.name.trim());
    setForm(initialState);
  }

  function handleCancel() {
    setForm(initialState);
    setErrors({});
  }

  return (
    <main className="flex-1">
      <section className="px-4 pt-10 pb-6 md:px-8 md:pt-14">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Add New Travel Package
        </h1>
      </section>

      <section className="bg-muted/40 px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto w-full max-w-2xl">
          {submittedName && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 flex items-start gap-2.5 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-teal-800"
            >
              <CircleCheck className="mt-0.5 size-4 shrink-0" />
              <p className="text-sm">
                <span className="font-semibold">{submittedName}</span> has been
                added as a new travel package.
              </p>
            </div>
          )}

          <form noValidate onSubmit={handleSubmit}>
            <Card className="[--card-spacing:--spacing(6)]">
              <CardContent className="grid gap-4">
                <FormField id="name" label="Destination Name" error={errors.name}>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Bali Paradise"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby="name-error"
                  />
                </FormField>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField id="country" label="Country" error={errors.country}>
                    <Input
                      id="country"
                      value={form.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      placeholder="Indonesia"
                      aria-invalid={Boolean(errors.country)}
                      aria-describedby="country-error"
                    />
                  </FormField>

                  <FormField id="category" label="Category" error={errors.category}>
                    <Select
                      id="category"
                      value={form.category}
                      onValueChange={(value: string | null) =>
                        updateField("category", value)
                      }
                    >
                      <SelectTrigger
                        className="w-full"
                        aria-invalid={Boolean(errors.category)}
                        aria-describedby="category-error"
                      >
                        <SelectValue placeholder="Beach" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField id="price" label="Price (USD)" error={errors.price}>
                    <Input
                      id="price"
                      value={form.price}
                      onChange={(e) => updateField("price", e.target.value)}
                      placeholder="e.g. 1200"
                      inputMode="decimal"
                      aria-invalid={Boolean(errors.price)}
                      aria-describedby="price-error"
                    />
                  </FormField>

                  <FormField id="duration" label="Duration" error={errors.duration}>
                    <Input
                      id="duration"
                      value={form.duration}
                      onChange={(e) => updateField("duration", e.target.value)}
                      placeholder="e.g. 7 Days/6 Nights"
                      aria-invalid={Boolean(errors.duration)}
                      aria-describedby="duration-error"
                    />
                  </FormField>
                </div>

                <FormField
                  id="departureDate"
                  label="Departure Date"
                  error={errors.departureDate}
                >
                  <Input
                    id="departureDate"
                    type="date"
                    value={form.departureDate}
                    onChange={(e) => updateField("departureDate", e.target.value)}
                    aria-invalid={Boolean(errors.departureDate)}
                    aria-describedby="departureDate-error"
                  />
                </FormField>

                <FormField id="imageUrl" label="Image URL">
                  <Input
                    id="imageUrl"
                    value={form.imageUrl}
                    onChange={(e) => updateField("imageUrl", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    inputMode="url"
                  />
                </FormField>

                <FormField id="description" label="Description">
                  <Textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    placeholder="Describe the travel experience..."
                    className="min-h-24"
                  />
                </FormField>
              </CardContent>

              <CardFooter className="justify-end gap-3 bg-transparent border-t-0">
                <Button type="button" variant="destructive" onClick={handleCancel}>
                  <X /> Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  <Plus /> Add Travel Package
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </section>
    </main>
  );
}
