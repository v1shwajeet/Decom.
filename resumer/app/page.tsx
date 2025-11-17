import MaxWidthWrapper from './src/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Navbar from './src/components/navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
      <MaxWidthWrapper className='flex flex-col justify-center text-center items-center pt-16 md:pt-24 sm:pt-20'>
        <p className='text-sm font-semibold text-gray-700 rounded-full border border-gray-200 bg-white/80 px-6 py-1.5 shadow-sm hover:border-gray-300 hover:bg-white/90 '>
          Decom is now public!
        </p>
        <h1 className='max-w-3xl text-4xl font-bold tracking-tight my-4 md:text-6xl lg:text-7xl'>
          Chat with your <span className='text-blue-500'>documents</span> in seconds.
        </h1>
        <p className='max-w-2xl text-sm text-zinc-700 md:text-lg'>
          Decom lets you have natural conversations with any document. Upload your file and instantly ask follow-up questions, get summaries, and pull out the details that matter.
        </p>
        <div className='mt-3 flex items-center gap-3'>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'px-7 text-sm sm:text-base',
            })}
            href='/dashboard'
            target='_blank'
          >
            Get Started
            <ArrowRight />
          </Link>
          <span className='text-xs text-zinc-500 sm:text-sm'>
          No credit card required.
        </span>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-linear-to-b from-blue-50/70 via-sky-50 to-white sm:p-4">
          <Image
            src='/dashboard-preview.png'
            width={1364}
            height={866}
            quality={100}
            alt='Product preview'
            className='h-auto w-full rounded-xl border border-slate-200 shadow-sm'
          ></Image>
        </div>

      </MaxWidthWrapper>

      <MaxWidthWrapper className='mb-24 mt-20 sm:mt-28 sm:mb-32'>
        <div className='mb-12 px-2 sm:px-4 md:px-0'>
          <div className='mx-auto max-w-2xl text-left sm:text-center'>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl'>
              Start chatting in minutes
            </h2>
            <p className='mt-4 text-sm text-gray-600 sm:text-base md:text-lg'>
              Go from static resumes and PDFs to interactive conversations in just a few simple steps with Decom.
            </p>
          </div>
        </div>

        <ol className='my-8 space-y-6 pt-4 md:flex md:space-x-10 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:border-zinc-200 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xs font-semibold tracking-wide text-blue-600'>
                Step 1
              </span>
              <span className='text-lg font-semibold text-slate-900'>
                Create your account
              </span>
              <span className='mt-2 text-sm text-zinc-700'>
                Sign up in seconds and choose the plan that fits you best. You can always start with the free tier and upgrade later.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:border-zinc-200 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xs font-semibold tracking-wide text-blue-600'>
                Step 2
              </span>
              <span className='text-lg font-semibold text-slate-900'>
                Upload your documents
              </span>
              <span className='mt-2 text-sm text-zinc-700'>
                Drop in your resumes, PDFs, or other files. Decom securely processes them so they&apos;re ready for conversation.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:border-zinc-200 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xs font-semibold tracking-wide text-blue-600'>
                Step 3
              </span>
              <span className='text-lg font-semibold text-slate-900'>
                Start asking questions
              </span>
              <span className='mt-2 text-sm text-zinc-700'>
                Ask anything—from quick summaries to deep insights—and get answers in seconds, not hours.
              </span>
            </div>
          </li>
        </ol>

        <div className='mt-14'>
          <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 sm:-m-4 sm:rounded-2xl sm:p-4'>
            <Image
              src='/dashboard-preview.png'
              alt='Decom document chat preview'
              width={1419}
              height={732}
              quality={100}
              className='rounded-lg bg-white p-3 shadow-2xl ring-1 ring-gray-900/10 sm:p-6 md:p-10'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Home