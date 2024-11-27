"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
    return (
        <div className="w-full flex gap-x-2">
            <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => { }}
            >
                <FcGoogle></FcGoogle>
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => { }}
            >
                <FaGithub></FaGithub>
            </Button>
        </div>
    );
}