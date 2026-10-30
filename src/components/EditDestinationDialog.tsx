
"use client";

import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Pencil, Save, X } from "lucide-react";

type Destination = {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

type Props = {
  destination: Destination;
};

const categories = [
  "Beach",
  "Mountain",
  "Adventure",
  "City",
  "Nature",
  "Cultural",
];

const EditDestinationDialog = ({ destination }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: destination.name || "",
    country: destination.country || "",
    category: destination.category || "",
    price: String(destination.price ?? ""),
    duration: destination.duration || "",
    departureDate: destination.departureDate || "",
    imageUrl: destination.imageUrl || "",
    description: destination.description || "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setForm({
      name: destination.name || "",
      country: destination.country || "",
      category: destination.category || "",
      price: String(destination.price ?? ""),
      duration: destination.duration || "",
      departureDate: destination.departureDate || "",
      imageUrl: destination.imageUrl || "",
      description: destination.description || "",
    });

    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/destination/${destination._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
          }),
        }
      );

      if (!res.ok) {
        const errorData=await res.json();
        throw new Error(errorData.message||"Failed to update destination")
      }

      alert("Destination updated successfully!");

      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error?error.message:"something went worng!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger
  className="inline-flex h-10 min-w-[110px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
>
  <Pencil className="size-4" />
  Edit
</DialogTrigger> 

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Edit Destination
          </DialogTitle>

          <DialogDescription>
            Update your destination information below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Destination Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Destination Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
            />
          </div>

          {/* Country and Category */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={form.country}
                onChange={(e) => updateField("country", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                value={form.category}
                onValueChange={(value) =>
                  updateField("category", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price and Duration */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                value={form.price}
                onChange={(e) => updateField("price", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={form.duration}
                onChange={(e) => updateField("duration", e.target.value)}
                placeholder="7 Days/6 Nights"
                required
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="space-y-2">
            <Label htmlFor="departureDate">Departure Date</Label>
            <Input
              id="departureDate"
              type="date"
              value={form.departureDate}
              onChange={(e) =>
                updateField("departureDate", e.target.value)
              }
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              value={form.imageUrl}
              onChange={(e) => updateField("imageUrl", e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) =>
                updateField("description", e.target.value)
              }
              placeholder="Describe the destination..."
              className="min-h-28"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-5">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={loading}
            >
              <X className="mr-2 size-4" />
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="bg-teal-600 text-white hover:bg-teal-700"
            >
              <Save className="mr-2 size-4" />
              {loading ? "Updating..." : "Update Destination"}
            </Button>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDialog;
