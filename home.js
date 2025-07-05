import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Detailed Positive Hornet</title>
        <meta property="og:title" content="Detailed Positive Hornet" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Testimonials</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              We offer top-notch handyman services including plumbing,
              electrical work, carpentry, and more. Your go-to solution for all
              your home repair needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Professional Handyman Services in Ireland
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Plumbing</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Electrical</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Carpentry</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Expert plumbing solutions for your home or business.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Professional electrical services to keep your home safe.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Skilled carpentry services for all your needs.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get a Quote</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today for a free quote and let us handle all your
              handyman needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to tackle your home projects?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Plumbing Services</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Electrical Services</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Carpentry Services</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Our experienced plumbers can handle any plumbing issue, from leaky
              faucets to full bathroom installations.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Trust our skilled electricians for all your electrical needs,
              including wiring, lighting, and repairs.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Our carpenters are experts in woodworking, offering custom
              furniture, repairs, and installations.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$50 per hour</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$80 per hour</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$100 per hour</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get a Quote</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get a Quote</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Book Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Plumbing services</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Electrical repairs</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Carpentry work</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Plumbing services</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Electrical repairs</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Carpentry work</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Plumbing services</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Electrical repairs</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Carpentry work</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Browse Our Services</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Get a Quote</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Book an Appointment</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Enjoy Quality Service</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Explore our range of handyman services including plumbing,
              electrical work, carpentry, and more.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Fill out our simple form to receive a free quote for your required
              services.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Schedule a convenient time for our professionals to visit your
              location and complete the tasks.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Sit back and relax while our skilled team takes care of all your
              handyman needs with precision and efficiency.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              I was impressed by the professionalism and quality of work
              provided by the handyman team. They fixed my plumbing issue in no
              time!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              I highly recommend their electrical services. The team was
              efficient and the results exceeded my expectations.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Great carpentry work done on my rental property. The handyman was
              skilled and completed the job on schedule.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              I rely on their handyman services for all my projects. Their
              attention to detail and craftsmanship are unmatched.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Read what our customers have to say about our handyman services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Sarah O&apos;Connor</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Murphy</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emma Byrne</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Homeowner</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Business Owner</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Landlord</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Interior Designer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Have a question or need assistance? Feel free to reach out to us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Dublin Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Phone &amp; Email</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Visit our main office in Dublin for in-person inquiries and
              consultations.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Contact us via phone or email for quick responses and support.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
