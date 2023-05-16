import React from 'react'
import './ContactUs.css'

const Contactus = () => {
  const faqsList = [
    {
        q: "What are some random questions to ask?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
        q: "Do you include common questions?",
        a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
        q: "Can I use this for 21 questions?",
        a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
    },
    {
        q: "Are these questions for girls or for boys?",
        a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
    },
    {
        q: "What are some random questions to ask?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends."
    },
    {
        q: "What do you wish you had more talent doing?",
        a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    },        
]
  return (
    <div className='contact'>
    <div className='contact2'>
        <div className='contact-component'>
        <section className=" py-14 max-w-screen-xl mx-auto">
            <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            <button
                                className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                            No spam ever, we are care about the protection of your data.
                            Read our <a className="underline" href="javascript:void(0)"> Privacy Policy </a>
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
            </div>
        </section>
        </div>
    </div>
    <div className='contact3'>
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
    <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
            Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
    </div>
    <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {
            faqsList.map((item, idx) => (
                <div 
                    className="space-y-3 mt-5"
                    key={idx}
                >
                    <h4 className="text-xl text-gray-700 font-medium">
                        {item.q}
                    </h4>
                    <p className="text-gray-500">
                        {item.a}
                    </p>
                </div>
            ))
        }
    </div>
</section>
</div>
</div>
  )
}

export default Contactus