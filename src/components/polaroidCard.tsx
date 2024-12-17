// 'use client'

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { cn } from "./lib/utils"

// interface PolaroidCardProps {
//   title: string
//   description: string
//   image?: string
//   className?: string
//   rotate?: number
// }

// export function PolaroidCard({ title, description, image, className, rotate = 0 }: PolaroidCardProps) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, rotate: 0 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={cn(
//         "bg-white p-3 shadow-xl max-w-sm w-full",
//         "transform transition-transform duration-300",
//         className
//       )}
//       style={{ rotate: `${rotate}deg` }}
//     >
//       <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4">
//         {image ? (
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//           />
//         ) : (
//           <div className="absolute inset-0 flex items-center justify-center text-gray-400">
//             No image
//           </div>
//         )}
//       </div>
//       <div className="space-y-2 p-2">
//         <h3 className="text-xl font-bold text-[#1F3B3B]">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </div>
//     </motion.div>
//   )
// }

