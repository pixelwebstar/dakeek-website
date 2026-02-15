import * as z from "zod";
import { DUBAI_AREAS, CONTACT_METHODS, SERVICE_TYPES } from "./constants";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    location: z.string().optional(),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().optional().or(z.literal("")),
    services: z.array(z.string()).min(1, "Please select at least one service"),
    contactMethod: z.string().optional(),
    serviceType: z.string().optional(),
    issue: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
