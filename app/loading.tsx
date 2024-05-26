"use client"

import { useFormStatus } from "react-dom";

export default function Loading() {
    const { pending } = useFormStatus()
    return <p>{pending ? "Carregando..." : ""}</p>
}