import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#373737] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              HOR
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              From small tasks to complete projects, we provide solutions for every type of work.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/explore" className="hover:text-white">Explore</a></li>
              {/* <li><a href="#" className="hover:text-white">Services</a></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: support@yourapp.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: 26-B rajul nagar, Delhi, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Social Links</h3>
            <ul className="text-sm space-y-2 flex">
              <li><img className='h-10' src="https://imgs.search.brave.com/obgPMhKnp5jf4lGiASNSBCYzEioDnpQtYeVRAuQSvQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzkvRmFj/ZWJvb2stTG9nby1O/by1CYWNrZ3JvdW5k/LnBuZw" alt="" /></li>
              <li><img className='h-10' src="https://imgs.search.brave.com/l2HojlsK1yo1ISpdjtgRC_nxUFv1QbNzZpokroECj6A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3R3aXR0ZXItbG9n/by1wbmcvdHdpdHRl/ci1iaXJkLXN5bWJv/bHMtcG5nLWxvZ28t/MC5wbmc" alt="" /></li>
              <li><img className='h-10' src="https://imgs.search.brave.com/d4eAqUJ-6TwYkXPQZIABNPu-dKu-g_ESImlgnRYj9YY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAxODA1MTgvb3Vy/bWlkL3BuZ3RyZWUt/aW5zdGFncmFtLWlj/b24taW5zdGFncmFt/LWxvZ28tcG5nLWlt/YWdlXzM1NzE0MDYu/cG5n" alt="" /></li>
              
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
