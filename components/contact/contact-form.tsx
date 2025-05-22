// 'use client';

// import { useState, FormEvent } from 'react';
// import emailjs from '@emailjs/browser';

// type FormData = {
//   name: string;
//   email: string;
//   company: string;
//   budget: string;
//   project: string;
// };

// type FormErrors = {
//   [K in keyof FormData]?: string;
// };

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     company: '',
//     budget: '',
//     project: '',
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     'idle' | 'success' | 'error'
//   >('idle');

//   // Input sanitization function
//   const sanitizeInput = (input: string): string => {
//     return input
//       .trim()
//       .replace(/[<>]/g, '') // Remove potential HTML tags
//       .slice(0, 1000); // Limit length
//   };

//   // Email validation
//   const isValidEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Form validation
//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.project) {
//       newErrors.project = 'Project description is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     const sanitizedValue = sanitizeInput(value);

//     setFormData(prev => ({
//       ...prev,
//       [name]: sanitizedValue,
//     }));

//     // Clear error when user starts typing
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: undefined,
//       }));
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       await emailjs.send(
//         'service_cyapyc8',
//         'template_hzarx99',
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           company: formData.company,
//           budget: formData.budget,
//           message: formData.project,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // You'll need to add this to your .env.local
//       );

//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         budget: '',
//         project: '',
//       });
//     } catch (error) {
//       console.error('EmailJS error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-fg-text-contrast mb-2">
//           Tell us about your project
//         </h3>
//         <p className="text-fg-text ">
//           Fill out the form below and we'll get back to you within 24 hours.
//         </p>
//       </div>

//       {submitStatus === 'success' && (
//         <div className="mb-6 p-4 bg-success-bg border border-success-border rounded-lg">
//           <p className="text-success-text font-medium">
//             Thank you! Your message has been sent successfully. We'll get back
//             to you soon.
//           </p>
//         </div>
//       )}

//       {submitStatus === 'error' && (
//         <div className="mb-6 p-4 bg-alert-bg border border-alert-border rounded-lg">
//           <p className="text-alert-text font-medium">
//             Something went wrong. Please try again or contact us directly.
//           </p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Name Field */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-fg-text mb-2"
//             >
//               Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 bg-bg-bg border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-solid ${
//                 errors.name
//                   ? 'border-alert-border text-alert-text'
//                   : 'border-fg-border text-fg-text hover:border-fg-border-hover focus:border-primary-border'
//               }`}
//               placeholder="Your full name"
//             />
//             {errors.name && (
//               <p className="mt-1 text-sm text-alert-text">{errors.name}</p>
//             )}
//           </div>

//           {/* Email Field */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-fg-text mb-2"
//             >
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 bg-bg-bg border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-solid ${
//                 errors.email
//                   ? 'border-alert-border text-alert-text'
//                   : 'border-fg-border text-fg-text hover:border-fg-border-hover focus:border-primary-border'
//               }`}
//               placeholder="your@email.com"
//             />
//             {errors.email && (
//               <p className="mt-1 text-sm text-alert-text">{errors.email}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Company Field */}
//           <div>
//             <label
//               htmlFor="company"
//               className="block text-sm font-medium text-fg-text mb-2"
//             >
//               Company
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 bg-bg-bg border border-fg-border text-fg-text rounded-lg transition-colors hover:border-fg-border-hover focus:outline-none focus:ring-2 focus:ring-primary-solid focus:border-primary-border"
//               placeholder="Your company name"
//             />
//           </div>

//           {/* Budget Field */}
//           <div>
//             <label
//               htmlFor="budget"
//               className="block text-sm font-medium text-fg-text mb-2"
//             >
//               Budget Range
//             </label>
//             <select
//               id="budget"
//               name="budget"
//               value={formData.budget}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 bg-bg-bg border border-fg-border text-fg-text rounded-lg transition-colors hover:border-fg-border-hover focus:outline-none focus:ring-2 focus:ring-primary-solid focus:border-primary-border"
//             >
//               <option value="">Select budget range</option>
//               <option value="<$5k">Less than $5,000</option>
//               <option value="$5k-$15k">$5,000 - $15,000</option>
//               <option value="$15k-$50k">$15,000 - $50,000</option>
//               <option value="$50k-$100k">$50,000 - $100,000</option>
//               <option value=">$100k">More than $100,000</option>
//             </select>
//           </div>
//         </div>

//         {/* Project Description */}
//         <div>
//           <label
//             htmlFor="project"
//             className="block text-sm font-medium text-fg-text mb-2"
//           >
//             Project Description *
//           </label>
//           <textarea
//             id="project"
//             name="project"
//             value={formData.project}
//             onChange={handleInputChange}
//             rows={6}
//             className={`w-full px-4 py-3 bg-bg-bg border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-solid resize-vertical ${
//               errors.project
//                 ? 'border-alert-border text-alert-text'
//                 : 'border-fg-border text-fg-text hover:border-fg-border-hover focus:border-primary-border'
//             }`}
//             placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
//           />
//           {errors.project && (
//             <p className="mt-1 text-sm text-alert-text">{errors.project}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="pt-4">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-primary-solid hover:bg-primary-solid-hover text-primary-on-primary font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-solid focus:ring-offset-2 focus:ring-offset-bg-base disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Sending...
//               </span>
//             ) : (
//               'Send Message'
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

'use client';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Select } from '@/components/ui/input';
import { Button } from '../ui/button';

type FormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  project: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

const budgetOptions = [
  { value: '<$5k', label: 'Less than $5,000' },
  { value: '$5k-$15k', label: '$5,000 - $15,000' },
  { value: '$15k-$50k', label: '$15,000 - $50,000' },
  { value: '$50k-$100k', label: '$50,000 - $100,000' },
  { value: '>$100k', label: 'More than $100,000' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return (
      input
        // .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .slice(0, 1000)
    ); // Limit length
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.project) {
      newErrors.project = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_cyapyc8',
        'template_bt2twxe',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.project,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        project: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-fg-text-contrast mb-2">
          Tell us about your project
        </h3>
        <p className="text-fg-text">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success-bg border border-success-border rounded-lg">
          <p className="text-success-text font-medium">
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </p>
        </div>
      )}

      {'error' === 'error' && (
        <div className="mb-6 p-4 bg-alert-bg border border-alert-border rounded-lg">
          <p className="text-alert-text font-medium">
            Something went wrong. Please try again or contact us directly.
          </p>
          <Link
            className="text-fg-text-contrast font-bold underline"
            href="mailto:silverthreadlabs@gmail.com"
          >
            silverthreadlabs@gmail.com
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="Your full name"
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="company"
            name="company"
            type="text"
            label="Company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your company name"
          />

          <Select
            id="budget"
            name="budget"
            label="Budget Range"
            value={formData.budget}
            onChange={handleInputChange}
            options={budgetOptions}
            placeholder="Select budget range"
          />
        </div>

        <Textarea
          id="project"
          name="project"
          label="Project Description"
          required
          value={formData.project}
          onChange={handleInputChange}
          error={errors.project}
          rows={6}
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
        />

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            fullWidth
            isLoading={isSubmitting}
            loadingText="Sending..."
            disabled={isSubmitting}
          >
            Send Message
          </Button>
          {/* <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-solid hover:bg-primary-solid-hover text-primary-on-primary font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-solid focus:ring-offset-2 focus:ring-offset-bg-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button> */}
        </div>
      </form>
    </div>
  );
}
