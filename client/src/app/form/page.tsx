import SignatureForm from "@/components/SignatureForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aquia Email Signature Generator",
};

export default function SignatureFormPage() {
  return <SignatureForm />;
}
