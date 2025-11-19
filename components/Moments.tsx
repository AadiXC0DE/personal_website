import React from 'react';
import { motion } from 'framer-motion';
import { MOMENTS } from '../constants';
import { MessageCircle, Heart, Repeat, Share, MoreHorizontal, BadgeCheck, BarChart3 } from 'lucide-react';
import { TweetMoment } from '../types';

const TwitterCard: React.FC<{ moment: TweetMoment }> = ({ moment }) => (
  <div className="bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-blue-500/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 max-w-md w-full mx-auto transform hover:-translate-y-1">
    <div className="p-4 border-b border-zinc-50 flex items-center justify-between">
       <div className="flex items-center gap-3">
         <img src="https://github.com/AadiXC0DE.png" alt="Aaditya" className="w-10 h-10 rounded-full border border-zinc-100" />
         <div className="leading-tight">
            <div className="flex items-center gap-1">
               <span className="font-bold text-zinc-900 text-sm">Aaditya Chowdhury</span>
               <BadgeCheck size={14} className="text-[#1D9BF0] fill-current" />
            </div>
            <span className="text-zinc-500 text-xs">@AadiChowdhury7</span>
         </div>
       </div>
       <MoreHorizontal size={16} className="text-zinc-400" />
    </div>

    <div className="p-4">
       <p className="text-zinc-900 text-[15px] whitespace-pre-line leading-relaxed mb-3">
         {moment.tweetContent}
       </p>

       {moment.hasMedia && moment.mediaUrl && (
         <div className="rounded-xl overflow-hidden border border-zinc-100 mb-3">
            <img src={moment.mediaUrl} alt="Moment Media" className="w-full h-48 object-cover" />
         </div>
       )}

       <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3 border-b border-zinc-50 pb-3">
          <span>{moment.tweetDate}</span>
          <span>•</span>
          <span><strong className="text-zinc-900">{moment.views}</strong> Views</span>
       </div>

       <div className="flex items-center justify-between text-zinc-500 px-2">
          <div className="flex items-center gap-2 group cursor-pointer">
             <MessageCircle size={18} className="group-hover:text-[#1D9BF0]" />
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
             <Repeat size={18} className="group-hover:text-green-500" />
             <span className="text-xs group-hover:text-green-500">{moment.retweets}</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
             <Heart size={18} className="group-hover:text-pink-500" />
             <span className="text-xs group-hover:text-pink-500">{moment.likes}</span>
          </div>
           <div className="flex items-center gap-2 group cursor-pointer">
             <BarChart3 size={18} className="group-hover:text-[#1D9BF0]" />
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
             <Share size={18} className="group-hover:text-[#1D9BF0]" />
          </div>
       </div>
    </div>
  </div>
);

const StoryContext: React.FC<{ moment: TweetMoment }> = ({ moment }) => (
  <div className="flex flex-col justify-center h-full p-4 sm:p-8">
     <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
     <h3 className="text-2xl font-bold text-zinc-900 mb-4">{moment.storyTitle}</h3>
     <p className="text-zinc-600 text-lg leading-relaxed">
       {moment.storyContent}
     </p>
  </div>
);

const Moments: React.FC = () => {
  return (
    <section id="impact" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">The Highlight Reel</h2>
        <p className="text-zinc-500 max-w-xl text-lg">
           Some pivotal moments from my engineering journey, captured in real-time.
        </p>
      </div>

      <div className="space-y-24">
        {MOMENTS.map((moment, index) => (
          <motion.div 
            key={moment.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${moment.orientation === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
          >
             {/* Tweet Side */}
             <div className="w-full md:w-1/2 flex justify-center relative">
                {/* Decorative Elements behind tweet */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl -z-10`}></div>
                <TwitterCard moment={moment} />
             </div>

             {/* Context Side */}
             <div className="w-full md:w-1/2">
                <StoryContext moment={moment} />
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Moments;