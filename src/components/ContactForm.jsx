const ContactForm = () => {
  return (
    <section className="py-16 px-6 w-full max-w-2xl mx-auto bg-overlay_rr rounded-2xl shadow-xl border border-border/30">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-primary">
        Get in Touch
      </h2>
      <p className="text-center text-secondaryText mb-10">
        Have a question or want to collaborate? Drop us a message and we’ll get back to you as soon as possible.
      </p>

      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-background text-text p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-background text-text p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition"
        />
        <textarea
          placeholder="Your Message"
          className="bg-background text-text p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition h-36 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:scale-[1.02] hover:shadow-xl transition-transform"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
