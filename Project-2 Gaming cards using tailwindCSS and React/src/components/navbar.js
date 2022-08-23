/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";

export default function NavBar(props) {
  return (
    <div className='max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0 '>
          <img
            className='h-48 w-full  object-cover md:h-full md:w-48'
            src={`../images/${props.item.coverImg}`}
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Case study ok
          </div>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            {props.item.title}
          </a>
          <p className='mt-2 text-slate-500'>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
