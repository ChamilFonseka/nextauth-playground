import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {

    if (!message) return null;

    return (
        <div className="bg-emerald-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-400">
            <CheckCircleIcon className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
}