import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    GOOGLE_ANALYTICS_MEASUREMENT_ID: z
        .string()
        .startsWith('G-')
        .min(8, {
            message: "GOOGLE_ANALYTICS_MEASUREMENT_ID must be a valid Google Analytics ID starting with 'G-'"
        })
        .optional()
});

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.warn('⚠️ Warning: Please check your .env file:');
    parsedEnv.error.issues.forEach((issue) => {
        console.warn(`- ${issue.path.join('.')}: ${issue.message}`);
    });
}

// Export validated environment variables
export const env = parsedEnv.data;
