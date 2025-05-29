// import { z } from 'zod';
// // Define the schema for environment variables
// const envSchema = z.object({
//     // Server-side environment variables
//     NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
//     GOOGLE_ANALYTICS_MEASUREMENT_ID: z.string().startsWith('G-').min(8, {
//         message: "GOOGLE_ANALYTICS_MEASUREMENT_ID must be a valid Google Analytics ID starting with 'G-'"
//     }),
//     // Public environment variables (prefixed with NEXT_PUBLIC_)
//     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, {
//         message: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is required'
//     })
// });
// // Parse and validate environment variables
// const parsedEnv = envSchema.safeParse(process.env);
// if (!parsedEnv.success) {
//     console.error('❌ Invalid or missing environment variables:');
//     parsedEnv.error.issues.forEach((issue) => {
//         console.error(`- ${issue.path.join('.')}: ${issue.message}`);
//     });
// }
// // Export validated environment variables
// export const env = parsedEnv.data;
import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    GOOGLE_ANALYTICS_MEASUREMENT_ID: z.string().startsWith('G-').min(8, {
        message: "GOOGLE_ANALYTICS_MEASUREMENT_ID must be a valid Google Analytics ID starting with 'G-'"
    }),

    // Public environment variables (prefixed with NEXT_PUBLIC_)
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, {
        message: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is required'
    })
});

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error('❌ Invalid or missing environment variables:');
    parsedEnv.error.issues.forEach((issue) => {
        console.error(`- ${issue.path.join('.')}: ${issue.message}`);
    });
    process.exit(1); // Exit the process if validation fails
}

// Export validated environment variables
export const env = parsedEnv.data;
