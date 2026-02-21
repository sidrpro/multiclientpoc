export interface ClientConfig {
  id: string;
  name: string;
  subdomain: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  contactForm: {
    title: string;
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      placeholder?: string;
    }>;
    submitText: string;
    successMessage: string;
  };
}

export const clients: Record<string, ClientConfig> = {
  clientA: {
    id: "clientA",
    name: "Client A",
    subdomain: "clienta",
    logo: "/logos/clientA-logo.svg",
    primaryColor: "#3B82F6", // Blue
    secondaryColor: "#1E40AF", // Dark Blue
    accentColor: "#60A5FA", // Light Blue
    backgroundColor: "#F0F9FF", // Very Light Blue
    textColor: "#1E293B", // Dark Slate
    contactForm: {
      title: "Get in Touch with Client A",
      fields: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          required: true,
          placeholder: "John Doe",
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "john@example.com",
        },
        {
          name: "company",
          label: "Company",
          type: "text",
          required: false,
          placeholder: "Your Company",
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          placeholder: "Tell us about your project...",
        },
      ],
      submitText: "Send Message",
      successMessage: "Thank you! We'll get back to you soon.",
    },
  },
  clientB: {
    id: "clientB",
    name: "Client B",
    subdomain: "clientb",
    logo: "/logos/clientB-logo.svg",
    primaryColor: "#10B981", // Green
    secondaryColor: "#059669", // Dark Green
    accentColor: "#34D399", // Light Green
    backgroundColor: "#F0FDF4", // Very Light Green
    textColor: "#064E3B", // Dark Green
    contactForm: {
      title: "Contact Client B",
      fields: [
        {
          name: "name",
          label: "Your Name",
          type: "text",
          required: true,
          placeholder: "Jane Smith",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "jane@example.com",
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "tel",
          required: true,
          placeholder: "+1 (555) 123-4567",
        },
        {
          name: "subject",
          label: "Subject",
          type: "text",
          required: true,
          placeholder: "What is this regarding?",
        },
        {
          name: "message",
          label: "Your Message",
          type: "textarea",
          required: true,
          placeholder: "How can we help you?",
        },
      ],
      submitText: "Submit Inquiry",
      successMessage: "Your inquiry has been received! We'll contact you shortly.",
    },
  },
  clientC: {
    id: "clientC",
    name: "Client C",
    subdomain: "clientc",
    logo: "/logos/clientC-logo.svg",
    primaryColor: "#8B5CF6", // Purple
    secondaryColor: "#6D28D9", // Dark Purple
    accentColor: "#A78BFA", // Light Purple
    backgroundColor: "#FAF5FF", // Very Light Purple
    textColor: "#4C1D95", // Dark Purple
    contactForm: {
      title: "Reach Out to Client C",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
          placeholder: "First Name",
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          required: true,
          placeholder: "Last Name",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          name: "budget",
          label: "Budget Range",
          type: "select",
          required: false,
          placeholder: "Select budget range",
        },
        {
          name: "message",
          label: "Project Details",
          type: "textarea",
          required: true,
          placeholder: "Describe your project requirements...",
        },
      ],
      submitText: "Send Request",
      successMessage: "Request submitted successfully! Our team will review it.",
    },
  },
};

export function getClientBySubdomain(subdomain: string): ClientConfig | null {
  const normalizedSubdomain = subdomain.toLowerCase();
  const client = Object.values(clients).find(
    (c) => c.subdomain.toLowerCase() === normalizedSubdomain
  );
  return client || null;
}

export function getDefaultClient(): ClientConfig {
  return clients.clientA;
}
