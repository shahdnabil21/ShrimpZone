export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fb581dd1] text-white">

      <h2 className="text-center text-3xl md:text-4xl font-bold py-6 ">
        <i className="fa-solid fa-shrimp mr-2"></i> Contact Us
      </h2>

      
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full max-w-6xl mx-auto px-6 pb-10">
       
        <div className="flex flex-col space-y-4 items-center pb-2.5 md:pb-0">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            <i className="fa-solid fa-user-plus"></i> Follow Us
          </h3>
          <div className="flex space-x-4 text-2xl md:text-3xl text-gray-200">
            <a href="#" className="hover:text-[#ffccaa] transition">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#ffccaa] transition">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        
        <div className="w-[300px] h-[250px] rounded-lg overflow-hidden shadow-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5486764877433!2d31.3717912!3d30.1071095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458176b80c66707%3A0x710439a6f1bc1e4e!2sShrimp%20Zone%20Sheraton!5e0!3m2!1sen!2seg!4v1758475394469!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

       
        <div className="flex flex-col items-center  pt-2.5 md:pt-0">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            <i className="fa-solid fa-phone"></i> Call Us
          </h3>
          <ul className="space-y-1 text-xl text-gray-200 text-center">
            <li>+0222681169</li>
            <li>+201008026075</li>
            <li>+201011030706</li>
          </ul>
        </div>
      </div>

      
      <div className="bg-[#fb571d] text-center py-3 text-sm">
        © {new Date().getFullYear()} Shrimp Zone. All rights reserved.
      </div>
    </footer>
  );
}
