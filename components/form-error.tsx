import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {

    if (!message) return null;

    return (
        <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-400">
            <TriangleAlert className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
}