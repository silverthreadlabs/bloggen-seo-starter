import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    GOOGLE_ANALYTICS_MEASUREMENT_ID: z.string().startsWith('G-').min(8, {
        message: "GOOGLE_ANALYTICS_MEASUREMENT_ID must be a valid Google Analytics ID starting with 'G-'"
    }),
    // Add other environment variables as needed
    API_URL: z.string().url().optional() // Example of an optional URL
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
