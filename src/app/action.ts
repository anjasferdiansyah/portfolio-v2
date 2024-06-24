"use server";

import { Resend } from "resend";

const validateString = (value: unknown) => {
  if (!value || typeof value !== "string") {
    return false;
  }

  return true;
};

const getError = (err: unknown): string => {
  let message: string;

  if (err instanceof Error) {
    message = err.message;
  } else if (err && typeof err === "object" && "message" in err) {
    message = String(err.message);
  } else if (typeof err === "string") {
    message = err;
  } else {
    message = "An unknown error occurred";
  }

  return message;
};

const resend = new Resend(process.env.RESEND_API_KEY as string);
export const sendMessage = async (formData: FormData) => {
  "use server";

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
  };

  if (!validateString(data.name)) {
    return {
      error: "Please enter your name",
    };
  }

  if (!validateString(data.email)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(data.message)) {
    return {
      error: "Please enter your message",
    };
  }

  if (data.phoneNumber && !validateString(data.phoneNumber)) {
    return {
      error: "Invalid phone number",
    };
  }

  let response;
  try {
    response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "anjasferdiansyah123@gmail.com",
      subject: "New contact form submission",
      reply_to: data.email as string,
      text: data.message as string,
    });
  } catch (err) {
    return {
      error: getError(err),
    };
  }

  return {
    response,
  };
};
