"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import BottomBar from "./bottom-bar";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { Subtitle } from "@/components/ui/typography";
import type { PersonalDetails } from "@/types/checkout";

export type PersonalDetailsProps = {
  onNextStep: () => void;
  onSetPersonalDetails: (personalDetails: PersonalDetails) => void;
  personalDetails: PersonalDetails;
};

export default function PersonalDetails({
  onNextStep,
  onSetPersonalDetails,
  personalDetails,
}: PersonalDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetails>({
    defaultValues: personalDetails,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSetPersonalDetails(data);
        onNextStep();
      })}
    >
      <Card>
        <div className="flex flex-col gap-4">
          <Subtitle>Enter your details below</Subtitle>
          <Input
            label="Full name"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full name is required" })}
            error={errors.fullName?.message}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone is required" })}
            error={errors.phone?.message}
          />
          <Textarea
            label="Visit reason"
            {...register("visitReason", {
              required: "Visit reason is required",
            })}
            error={errors.visitReason?.message}
            placeholder="Tell us why you're visiting..."
          />
        </div>
      </Card>
      <BottomBar>
        <Button type="submit">Continue</Button>
      </BottomBar>
    </form>
  );
}
