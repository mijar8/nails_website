"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const date = formData.get("date");
  const time = formData.get("time");
  const notes = formData.get("notes");

  // In a real application, you would send an email using Resend, Nodemailer, etc.
  // For now, we just simulate a delay and return success.
  console.log("New booking received:");
  console.log({ name, email, phone, service, date, time, notes });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
