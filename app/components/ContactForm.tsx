export default function ContactForm() {
  return (
    <form className="glass p-8 rounded-3xl max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-4 rounded-xl bg-black/20 mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 rounded-xl bg-black/20 mb-4"
      />

      <textarea
        rows={5}
        placeholder="Message"
        className="w-full p-4 rounded-xl bg-black/20"
      />

      <button
        className="
        btn-glass
        mt-6
        w-full"
      >
        Send Message
      </button>
    </form>
  );
}