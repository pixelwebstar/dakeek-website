import * as z from "zod";
import { DUBAI_AREAS, CONTACT_METHODS, SERVICE_TYPES } from "./constants";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    location: z.string().min(3, "Location is required"), // Could enhance to be one of DUBAI_AREAS if strictly enforced
    phone: z.string().min(5, "Phone number is required"),
    email: z.string().email("Invalid email address").optional().or(z.literal("")),
    services: z.array(z.string()).min(1, "Please select at least one service"),
    contactMethod: z.enum(CONTACT_METHODS).optional(),
    serviceType: z.string().optional(),
    issue: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
