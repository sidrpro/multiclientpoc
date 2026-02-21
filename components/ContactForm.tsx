"use client";

import { useState } from "react";
import { ClientConfig } from "@/lib/clients";

interface ContactFormProps {
  config: ClientConfig;
}

export default function ContactForm({ config }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    config.contactForm.fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      
      if (field.type === "email" && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = "Please enter a valid email address";
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real application, you would send the data to your API here
    console.log("Form submitted for", config.name, formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({});
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-lg p-6 text-center"
        style={{ backgroundColor: config.accentColor + "20" }}
      >
        <div
          className="mb-2 text-2xl"
          style={{ color: config.primaryColor }}
        >
          ✓
        </div>
        <p style={{ color: config.textColor }}>
          {config.contactForm.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2
        className="mb-6 text-2xl font-bold"
        style={{ color: config.textColor }}
      >
        {config.contactForm.title}
      </h2>
      
      {config.contactForm.fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="mb-2 block text-sm font-medium"
            style={{ color: config.textColor }}
          >
            {field.label}
            {field.required && (
              <span style={{ color: config.primaryColor }}> *</span>
            )}
          </label>
          
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              rows={5}
              className={`w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2 ${
                errors[field.name]
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-transparent"
              }`}
              style={{
                backgroundColor: "white",
                color: config.textColor,
                "--tw-ring-color": errors[field.name] ? undefined : config.primaryColor,
              } as React.CSSProperties & { "--tw-ring-color"?: string }}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className={`w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2 ${
                errors[field.name]
                  ? "border-red-500"
                  : "border-gray-300 focus:border-transparent"
              }`}
              style={{
                backgroundColor: "white",
                color: config.textColor,
              }}
            >
              <option value="">{field.placeholder || "Select an option"}</option>
              {field.name === "budget" && (
                <>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </>
              )}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              className={`w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2 ${
                errors[field.name]
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-transparent"
              }`}
              style={{
                backgroundColor: "white",
                color: config.textColor,
                "--tw-ring-color": errors[field.name] ? undefined : config.primaryColor,
              } as React.CSSProperties & { "--tw-ring-color"?: string }}
            />
          )}
          
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg px-6 py-3 font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: config.primaryColor }}
      >
        {isSubmitting ? "Submitting..." : config.contactForm.submitText}
      </button>
    </form>
  );
}
