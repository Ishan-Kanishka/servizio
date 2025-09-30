import {Star} from 'lucide-react';

const testimonials = [
  {
    name: 'Donald Jackman',
    title: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 5,
  },
  {
    name: 'Richard Nelson',
    title: 'Instagram Influencer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 4,
  },
  {
    name: 'James Washington',
    title: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 5,
  },
];

export default function Testimonials () {
  return (
    <div className="px-6 py-20 bg-gray-50">
      <h2 className="text-4xl text-center text-green-600 font-bold">
        What people says
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 pt-14 mt-12">
        {testimonials.map ((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({name, title, image, text, stars}) {
  return (
    <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
      <div className="flex flex-col items-center px-5 py-4 relative">
        <img
          className="h-24 w-24 absolute -top-14 rounded-full"
          src={image}
          alt={name}
        />
        <div className="pt-8 text-center">
          <h1 className="text-lg font-medium text-gray-800">{name}</h1>
          <p className="text-gray-800/80">{title}</p>
        </div>
      </div>
      <p className="text-gray-500 px-6 text-center">{text}</p>
      <div className="flex justify-center pt-4">
        <div className="flex gap-0.5">
          {Array.from ({length: stars}, (_, i) => (
            <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
          ))}
        </div>
      </div>
    </div>
  );
}
