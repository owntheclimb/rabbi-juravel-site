import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

const IdentityNote = () => {
  return (
    <Alert className="border-primary bg-accent">
      <AlertCircle className="h-5 w-5 text-primary" />
      <AlertDescription className="text-sm leading-relaxed ml-2">
        <strong className="font-semibold">Identity Note:</strong> This official site refers to{" "}
        <strong>Rabbi Shmuel Zev Juravel of South Fallsburg, New York</strong>. Individuals with the same name may exist in other cities. Please verify location and biography details on this site.
      </AlertDescription>
    </Alert>
  );
};

export default IdentityNote;

