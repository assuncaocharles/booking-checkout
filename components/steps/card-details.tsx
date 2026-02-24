"use client";

import { useForm, Controller } from "react-hook-form";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import BottomBar from "./bottom-bar";
import { CheckboxWithLabel } from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Description, Subtitle } from "@/components/ui/typography";
import { luhnCheck } from "@/helpers/luhn";
import {
  formatCardNumber,
  CARD_NUMBER_MAX_LENGTH,
} from "@/helpers/card-number";
import {
  formatExpirationDate,
  isValidExpirationDate,
  EXPIRATION_MAX_LENGTH,
} from "@/helpers/expiration-date";
import { isValidUsZip } from "@/helpers/us-zip";
import type { CardDetails } from "@/types/checkout";

export type CardDetailsProps = {
  onNextStep: () => void;
  onSetCardDetails: (cardDetails: CardDetails) => void;
  cardDetails: CardDetails;
};

export type CardDetailsFormData = {
  cardNumber: string;
  cardExpirationDate: string;
  cardCvv: string;
  billingZipCode: string;
  reschedule?: boolean;
};

export default function CardDetailsStep({
  onNextStep,
  onSetCardDetails,
  cardDetails,
}: CardDetailsProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CardDetailsFormData>({
    defaultValues: {
      cardNumber: cardDetails.cardNumber,
      cardExpirationDate: cardDetails.cardExpirationDate,
      cardCvv: cardDetails.cardCvv,
      billingZipCode: cardDetails.billingZipCode,
      reschedule: false,
    },
  });

  const onSubmit = (data: CardDetailsFormData) => {
    onSetCardDetails({
      ...cardDetails,
      ...data,
    });
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="px-4 py-6 md:px-15 md:py-12">
        <div className="flex flex-col gap-4">
          <Subtitle>Secure your appointment by card</Subtitle>
          <Description>
            A credit or debit card is required to book your appointment.
          </Description>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label as="span">Card Information</Label>
              <Controller
                name="cardNumber"
                control={control}
                rules={{
                  required: "Card number is required",
                  validate: (value) =>
                    luhnCheck(value ?? "") ||
                    "Please enter a valid card number",
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(formatCardNumber(e.target.value));
                    }}
                    placeholder="1234 1234 1234 1234"
                    maxLength={CARD_NUMBER_MAX_LENGTH}
                    inputMode="numeric"
                    autoComplete="cc-number"
                    error={errors.cardNumber?.message}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="cardExpirationDate"
                control={control}
                rules={{
                  required: "Expiration date is required",
                  validate: (value) =>
                    isValidExpirationDate(value ?? "") ||
                    "Enter a valid future expiration date (MM / YY)",
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(formatExpirationDate(e.target.value));
                    }}
                    placeholder="MM / YY"
                    maxLength={EXPIRATION_MAX_LENGTH}
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    error={errors.cardExpirationDate?.message}
                  />
                )}
              />
              <Input
                {...register("cardCvv", { required: "CVV is required" })}
                placeholder="CVV"
                error={errors.cardCvv?.message}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <Input
              {...register("billingZipCode", {
                required: "Billing zip code is required",
                validate: (value) =>
                  isValidUsZip(value ?? "") ||
                  "Please enter a valid US ZIP code",
              })}
              placeholder="Billing zip code"
              error={errors.billingZipCode?.message}
            />
            <Controller
              name="reschedule"
              control={control}
              rules={{
                validate: (value) =>
                  value === true ||
                  "You must agree to the cancellation policy to continue",
              }}
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <CheckboxWithLabel
                    id="reschedule"
                    label="We ask that you please reschedule or cancel at least 24 hours before the beginning of your appointment or you may be charged a cancellation fee of $50. In the event of emergency, contact us directly. Your card will held in case of late cancellation and for future purchases. It will not be charged now."
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  {errors.reschedule?.message && (
                    <p className="text-sm text-red-500">
                      {errors.reschedule.message}
                    </p>
                  )}
                </div>
              )}
            />
            <hr className="my-6 border-0 border-t border-border" />
            <Button className="mb-0 md:mb-9">Book appointment</Button>
            <Description>
              By creating this appointment, you acknowledge you will receive
              automated transactional messages from this merchant.
            </Description>
          </div>
        </div>
      </Card>
      <BottomBar>
        <Button type="submit" className="w-full md:w-auto">
          Continue
        </Button>
      </BottomBar>
    </form>
  );
}
