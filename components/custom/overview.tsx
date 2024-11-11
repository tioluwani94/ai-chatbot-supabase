import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, SupabaseIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <SupabaseIcon />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p>
          This is an{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/vercel/ai-chatbot"
            target="_blank"
          >
            open source
          </Link>{' '}
          chatbot template built with Next.js, the AI SDK by Vercel, and
          Supabase. It uses the{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">streamText</code>{' '}
          function in the server and the{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">useChat</code> hook
          on the client to create a seamless chat experience, with{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://supabase.com"
            target="_blank"
          >
            Supabase
          </Link>{' '}
          providing real-time data storage and authentication.
        </p>
        <p>
          Learn more about the{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            AI SDK
          </Link>{' '}
          and{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://supabase.com/docs"
            target="_blank"
          >
            Supabase
          </Link>{' '}
          in their respective documentation.
        </p>
      </div>
    </motion.div>
  );
};