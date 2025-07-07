import Heading from '../../Components/Heading/Heading';
import CountUp from 'react-countup';
import ClientReview from './ClientReview';

const Offer = () => {
    const stats = [
  { title: "Total Portfolio Projects", value: 38 },
  { title: "Total Clients Served", value: 29 },
  { title: "Projects Last Month", value: 6 },
  { title: "Ongoing Projects in Queue", value: 3 },
];
    return (
        <div className="bg-gray-100 pb-12">
            <Heading title={`What We're Offering Right Now`} description='Explore our currently available digital solutions crafted for individuals and businesses' />

            <section className="container mx-auto px-4 md:px-12 lg:px-24 pt-8">
                <div className="md:mt-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 py-4">
                        
                    </div>
                </div>
                <p className="text-lg text-justify">
                        At HexaByte™, we believe in building smart, reliable, and elegant digital experiences. Below are the services we're currently offering — tailored to meet the most in-demand needs of today’s online presence. Whether you're an individual professional or a startup founder, we have a solution for you.
                        </p>
            </section>

            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8">
                <h2 className='md:text-2xl text-xl font-bold mb-4 text-[#123955]'>Portfolio Website Development</h2>
                <p className="text-lg text-justify">Want to stand out in your field? A well-crafted portfolio website helps you showcase your work, tell your story, and attract new opportunities. HexaByte™ is now offering a professional, responsive, and personalized portfolio website building service — designed with modern aesthetics and clean code.</p>
            </div>

            <div className="container mx-auto px-4 md:px-12 lg:px-24 space-y-6">
    <div>
        <h3 className="text-xl font-semibold text-[#123955] mb-2">What’s Included:</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
            <li>Clean and minimal one-page or multi-page layout</li>
            <li>Fully responsive design (mobile, tablet, desktop)</li>
            <li>Smooth animations and transitions</li>
            <li>SEO-ready and optimized for performance</li>
            <li>Contact form with real-time delivery to your email</li>
            <li>Integrated links to your social platforms</li>
            <li>Option to include resume download section</li>
            <li>Deployed to a custom domain or platform like Netlify/Firebase</li>
        </ul>
    </div>

    <div>
        <h3 className="text-xl font-semibold text-[#123955] mb-2">Tech Stack:</h3>
        <p className="text-lg text-gray-700">
            React JS · Tailwind CSS · Firebase or Netlify · EmailJS or Formspree (for contact form handling)
        </p>
    </div>

    <div>
    <h3 className="text-xl font-semibold text-[#123955] mb-4">Tech Stack:</h3>

    <div className="overflow-hidden border-yellow-500 border-2 rounded-xl  ">
        <div className="flex space-x-8  animate-slide-left w-max">
            <img src="/tech1.png" alt="React" className="h-24 w-auto" />
            <img src="/tech2.png" alt="Tailwind CSS" className="h-24 w-auto" />
            <img src="/tech3.jpg" alt="Firebase" className="h-24 w-auto" />
            <img src="/tech4.png" alt="Netlify" className="h-24 w-auto" />
            <img src="/tech5.png" alt="EmailJS" className="h-24 w-auto" />
            <img src="/tech6.png" alt="Formspree" className="h-24 w-auto" />
        </div>
    </div>
</div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-md font-semibold text-[#123955]">💰 Price</h4>
            <p className="text-gray-700">Starting from <span className="font-bold">TK1800</span><br/>(May vary based on features)</p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-md font-semibold text-[#123955]">⏱️ Delivery Time</h4>
            <p className="text-gray-700">3–5 working days</p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-md font-semibold text-[#123955]">✅ Status</h4>
            <p className="text-gray-700">Currently Available (limited slots per week)</p>
        </div>
    </div>


    <div className="bg-[#123955] rounded-md py-12 mt-12 text-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl font-bold text-center uppercase mb-10 text-yellow-400">Project Statistics</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {stats.map((item, index) => (
        <div key={index} className="bg-[#305776] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-yellow-400 mb-2">
            <CountUp end={item.value} duration={10} />
          </h3>
          <p className="text-white text-lg">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    <ClientReview/>

    <div className="mt-8 text-center">
        <p className="text-lg mb-4 text-[#123955] font-medium">
            Interested in building your personal brand or showcasing your professional identity online?
        </p>
        <a
            href="#contact-form"
            className="inline-block bg-[#F9A825] text-black px-6 py-3 rounded shadow-md hover:bg-yellow-600 font-semibold transition duration-200"
        >
            Request This Service
        </a>
    </div>
</div>



        </div>
    );
};

export default Offer;