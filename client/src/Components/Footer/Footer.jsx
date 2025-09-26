import {Github, Linkedin, X} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Footer () {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-white">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">

        <div className="max-w-96">
          <Link
            className="size-10 flex items-center gap-1 text-decoration-none"
            to="/"
          >
            <img src="/logo.png" alt="favicon" />
            <h2 className="text-xl">
              Note<span className="brand-color">Deck</span>
            </h2>
          </Link>
          <p className="mt-6 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a href="#">
              <X size={20} color="#2563EB" />
            </a>
            <a href="#">
              <Github size={20} color="#2563EB" />
            </a>
            <a href="#">
              <Linkedin size={20} color="#2563EB" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
            <ul className="text-sm text-gray-500 space-y-2 list-none">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
            <div className="text-sm text-gray-500 space-y-2 list-none">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </div>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2025 ©
        {' '}
        <a href="https://prebuiltui.com">Nadun</a>
        . All Right Reserved.
      </p>
    </footer>
  );
}
