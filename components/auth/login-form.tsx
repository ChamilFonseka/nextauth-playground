"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper 
            headerLable="Welcome back" 
            backButtonLabel="Don't have an account?" 
            backButtonHref="/auth/register" 
            showSocial
            >
            Login Form
        </CardWrapper>
    );
}