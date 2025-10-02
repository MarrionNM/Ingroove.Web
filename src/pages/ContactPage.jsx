import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";

const ContactPage = () => {
  return (
    <div className="bg-background text-text min-h-screen flex flex-col">
      {/* Center Contact Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <ContactForm />
      </div>

      {/* FAQ Section pinned below */}
      <div className="px-4 pb-12">
        <FAQSection />
      </div>
    </div>
  );
};

export default ContactPage;
