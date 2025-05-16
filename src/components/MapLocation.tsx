export default function MapLocation() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <h2 className="text-[50px] text-slate-50 text-center font-bold mb-6 w-full">Our Location</h2>
        
        <div className="scale-z-50 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border-5 border-white">
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6060212709344!2d112.62698817114709!3d-7.285587176636072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fde455555555%3A0xd7e2611ae591f046!2sUniversitas%20Ciputra%20Surabaya!5e0!3m2!1sen!2sid!4v1747306077552!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
}